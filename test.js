<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub User Search</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
    }

    form {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    input {
      padding: 8px 12px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 10px;
    }

    button {
      padding: 8px 16px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    #user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .user-card {
      background-color: #f1f1f1;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      max-width: 400px;
      width: 100%;
    }

    .user-card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>GitHub User Search</h1>
  <form id="search-form">
    <input type="text" id="username" placeholder="Enter a GitHub username" required>
    <button type="submit">Search</button>
  </form>
  <div id="user-info"></div>

  <script>
    const searchForm = document.getElementById('search-form');
    const userInfoContainer = document.getElementById('user-info');

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const userData = await response.json();

        displayUserInfo(userData);
      } catch (error) {
        userInfoContainer.innerHTML = `<p>${error.message}</p>`;
      }
    });

    function displayUserInfo(userData) {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      const avatar = document.createElement('img');
      avatar.src = userData.avatar_url;
      avatar.alt = `${userData.login}'s avatar`;

      const name = document.createElement('h2');
      name.textContent = userData.name || userData.login;

      const username = document.createElement('p');
      username.textContent = `@${userData.login}`;

      const bio = document.createElement('p');
      bio.textContent = userData.bio || 'No bio available';

      const publicRepos = document.createElement('p');
      publicRepos.textContent = `Public Repositories: ${userData.public_repos}`;

      userCard.appendChild(avatar);
      userCard.appendChild(name);
      userCard.appendChild(username);
      userCard.appendChild(bio);
      userCard.appendChild(publicRepos);

      userInfoContainer.innerHTML = '';
      userInfoContainer.appendChild(userCard);
    }
  </script>
</body>
</html>
