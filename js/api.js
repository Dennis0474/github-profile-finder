async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }
const data = await response.json();

return data;

}

async function fetchRepos(username) {
const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`);

if (!response.ok) {
  throw new Error("Could not fetch repos");
}

const data = await response.json();

return data;
}