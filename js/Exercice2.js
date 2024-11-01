function lookupUser() {
  const username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const profilePicture = document.getElementById('profilePicture');

      if (data.avatar_url) {
        profilePicture.innerHTML = `<img src="${data.avatar_url}" alt="Profile Picture">`;
      } else {
        profilePicture.innerHTML = `<img src="default-profile.png" alt="No Picture Available">`;
      }

      if (data.name) {
        document.getElementById('name').textContent = data.name;
      } else {
        document.getElementById('name').textContent = 'N/A';
      }

      if (data.blog) {
        document.getElementById('blog').innerHTML = `<a href="${data.blog}" target="_blank">${data.blog}</a>`;
      } else {
        document.getElementById('blog').textContent = 'N/A';
      }

      if (data.created_at) {
        document.getElementById('created').textContent = data.created_at;
      } else {
        document.getElementById('created').textContent = 'N/A';
      }
    })
    .catch(error => {
      console.error(error.message);
    });
}
