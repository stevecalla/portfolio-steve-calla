//query selector variables go here 👇
let hamburgerMenu = document.getElementById('hamburger-menu');
let navMenu = document.getElementById('nav-menu');

//global variables go here 👇


//event listeners go here 👇
hamburgerMenu.addEventListener('click', displayMenu);

//functions and event handlers go here 👇
function displayMenu() {
  console.log('hello');
  console.log('1', window.getComputedStyle(navMenu).display);
  // console.log(element.getCom)
  if (window.getComputedStyle(navMenu).display === 'none') {
    navMenu.style.display = 'flex';
    hamburgerMenu.style.color = 'grey';
  } else {
    navMenu.style.display = 'none';
    hamburgerMenu.style.color = 'black';
  }

  console.log('2', window.getComputedStyle(navMenu).display);

}
