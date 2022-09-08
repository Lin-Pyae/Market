// admin form submit
let profilebox = document.getElementById('profiles');
let form = document.getElementById('profileForm');
let firstname = document.getElementById('fname');
let lastname = document.getElementById('lname');
let idnumber = document.getElementById('idno');
let password = document.getElementById('pwd');
let date= document.getElementById('date');

let fullname = document.getElementById('fullname');
let updateid = document.getElementById('idnumber');
let updatepassword = document.getElementById('adminpassword');
let updatedate = document.getElementById('joindate');
let editprofile = document.getElementById('edit');

form.addEventListener('submit',(e) => {
    fullname.innerText = firstname.value + " " + lastname.value;
    updateid.innerText = idnumber.value;
    updatepassword.children[0].value = password.value;
    updatedate.innerText = date.value;
    e.preventDefault();
});

editprofile.addEventListener('click',(e) => {
    form.style.transform="translateX(0px)";
    e.preventDefault();
});

