let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function myFunction() {
    alert("Your Appointment Has Been Successfully Booked");
    
    window.location.reload();
    location.href = 'index.html';
  }
  