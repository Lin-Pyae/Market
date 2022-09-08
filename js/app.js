//UI
let baricon = document.getElementById("bar-icon");
let btn = document.getElementById('btn');
let sidebar = document.getElementById("sidebar");
let profileImage = document.getElementById("profileimg");

// sidebar
baricon.addEventListener('click',() => {
    sidebar.classList.toggle('styles');
    document.body.classList.toggle('body');
});

// profile dropdown
profileImage.addEventListener('click',() => document.querySelector('.profile-drops').classList.toggle('show'));