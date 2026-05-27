# GitHub Profile Finder

🔗 [Live Demo](https://dennis0474.github.io/github-profile-finder/)

A vanilla JavaScript app that searches any GitHub user and displays
their profile, stats and top repositories using the GitHub REST API.

## Features
- Search any GitHub user by username
- Displays avatar, bio, followers, following and public repo count
- Shows location and join date
- Lists top 6 repositories sorted by stars with descriptions and links
- Handles errors gracefully when a user is not found
- Trigger search by clicking the button or pressing Enter

## Tech Used
- HTML
- CSS
- Vanilla JavaScript (Async/Await, Fetch API, DOM manipulation, Error handling)
- GitHub REST API (no authentication required)

## Project Structure
github-profile-finder/
├── index.html
├── style.css
└── js/
├── api.js        — fetch calls to GitHub API
├── ui.js         — all DOM rendering functions
└── main.js       — event listeners and app logic

## How to Run
Clone the repo and open `index.html` in your browser — no install needed.

```bash
git clone https://github.com/YOUR-USERNAME/github-profile-finder.git
```

## What I Learned
- How to fetch data from a real REST API using async/await
- How to handle failed requests using response.ok and try/catch
- How to separate concerns across multiple JS modules
- How to build a clean UI that responds to both click and keyboard events

- ## Author
- Dennis

- ## Email
- dennisegheosaomoyibo@gmail.com
