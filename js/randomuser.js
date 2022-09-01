const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = users =>{
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h1>user Name : ${user.name.first}</h1>
        <h3>E-mail : ${user.email}</h3>
        <p>user location: ${user.location.city}</p>
        `;
        usersContainer.appendChild(userDiv);
    }
    
}

loadUsers();