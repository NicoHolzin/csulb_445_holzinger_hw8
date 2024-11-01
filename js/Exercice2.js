function lookupUser() {
  const username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const profilePicture = document.getElementById('profilePicture');
      profilePicture.innerHTML = data.avatar_url 
        ? `<img src="${data.avatar_url}" alt="Profile Picture">` 
        : `<img src="default-profile.png" alt="No Picture Available">`;

      document.getElementById('name').textContent = data.name || 'N/A';
      document.getElementById('blog').innerHTML = data.blog 
        ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` 
        : 'N/A';
      document.getElementById('created').textContent = data.created_at || 'N/A';
    })
    .catch(error => {
      console.error(error.message);
      
    });
}
