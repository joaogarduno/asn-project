// MENU
// 
const downSlide = () => {
  const mobileBurger = document.querySelector('.mobile__burger');
  const mobileMenu = document.querySelector('.mobile__menu');
  // const navContent = document.querySelector('.nav-content');
  const menuItems = document.querySelectorAll('.mobile__menu ul li a');

  mobileBurger.addEventListener('click', () => {
    
    // ICON BURGER
    mobileBurger.classList.toggle('toggle');

    // MENU BOX
    mobileMenu.classList.toggle('nav-active');

    // CHANGE COLOR NAV
    // navContent.style.color = '#131313';

  });

}

downSlide();


// 
// 
// const searchMenu = () => {
//   const btnSearch = document.querySelector('.mobile__search')
//   const sectionSearch = document.createElement('div')
// }