function displayProfile(user) {
  document.getElementById("profile-card").hidden = false;
  document.getElementById("avatar").src = user.avatar_url;
  document.getElementById("username").textContent = user.login;
  document.getElementById("bio").textContent = user.bio ? user.bio : "No bio available";
  document.getElementById("followers").textContent = user.followers;
  document.getElementById("following").textContent = user.following;
  document.getElementById("repos").textContent = user.public_repos;
  document.getElementById("location").textContent = user.location ? user.location : "Location not provided";
  document.getElementById("join-date").textContent = "Joined " + new Date(user.created_at).toLocaleDateString();
  document.getElementById("profile-link").href = user.html_url;
}

function displayRepos(repos) {
const reposSection = document.getElementById("repos-section");
const reposList = document.getElementById("repos-list");

reposSection.hidden = false;
reposList.innerHTML = "";

repos.forEach(repo => {
  const list = document.createElement("li");

  list.innerHTML = `
  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
  <span>${repo.stargazers_count}</span>
  <p>${repo.description ? repo.description : "No description"}</p>
  `;

  reposList.appendChild(list);
})
}

function displayError() {
  const errMsg = document.getElementById("error-message");
  errMsg.hidden = false;
 document.getElementById("profile-card").hidden = true;
 document.getElementById("repos-section").hidden = true;
}

function clearUI () {
  document.getElementById("error-message").hidden = true;
  document.getElementById("profile-card").hidden = true;
  document.getElementById("repos-section").hidden = true;
  document.getElementById("repos-list").innerHTML = "";
}