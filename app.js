
// ONLY GETTING ONE PERSON RANDOMLY AND SET TO PAGE

async function getRandomUsers() {
    
    const response = await fetch("https://randomuser.me/api") 
    console.log(response);
    const data = await response.json(); // as a json we are getting value
    console.log(data);
    const user = data.results[0]; 
    console.log(user);
    displayUser(user);
}

function displayUser(user) {
    const picture = document.getElementById("photo")
    const gender = document.getElementById("gender")
    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const email = document.getElementById("email")
    const age = document.getElementById("birth")
    const address = document.getElementById("address")
    const phoneNumber = document.getElementById("phone")
    
    picture.setAttribute('src',`${user.picture.large}`);
    gender.innerHTML = `${user.gender}`
    firstName.innerText = `${user.name.first}`
    lastName.innerText = `${user.name.last}`
    email.innerText = `${user.email}`
    age.innerText = `${user.dob.age}`
    console.log(user.location)
    address.innerHTML = `${user.location.country} / ${user.location.city} / ${user.location.state}`
    phoneNumber.innerHTML = `${user.phone}`
}

getRandomUsers()




