const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

async function handleSearch() {
  const username = searchInput.value.trim();

  if (username === "") return;

  clearUI();

  try {
   const user = await fetchUser(username);
    displayProfile(user);

   const repos = await fetchRepos(username);
    displayRepos(repos);
  } catch (error) {
    displayError();
  }
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
})