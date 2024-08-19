// 
// SCROLL WINDOW
const windowScroll = () => {
  const headerScroll = document.querySelector('.headerContent');
  // const menuScroll = document.querySelector('.nav-content');

  window.addEventListener('scroll', () => {
    headerScroll.classList.toggle('scroll-down', window.scrollY > 0);

    // menuScroll.classList.toggle('scroll-menu', window.scrollY > 0)

  });
}
windowScroll();


// 
// SLIDE MENU
const slideMenuDown = () => {
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
slideMenuDown();


// 
// 
// const searchMenu = () => {
//   const btnSearch = document.querySelector('.mobile__search')
//   const sectionSearch = document.createElement('div')
// }


// 
// TEXT SLIDER - SECTIONS & OPTIONS
const sliderMoveTitles = () => {
  const carouselText = document.querySelector('.experience__slidetitle')
  const listTextCarousel = carouselText.querySelector('.experience__ul');

  
  function cloneFirst() {
    const firstItem = listTextCarousel.firstElementChild.cloneNode(true);
    listTextCarousel.appendChild(firstItem)
  }

  function cloneLast(){
    const lastItem = listTextCarousel.lastElementChild.cloneNode(true);
    listTextCarousel.insertBefore(lastItem, listTextCarousel.firstChild)
  }

  // ELEMENTS CLONE
  cloneFirst()
  cloneLast()
}
sliderMoveTitles()





// 
// PROJECTS - DROPDOWN MENU
const dropdownProjects = () => {
  const dropdownBtn = document.querySelector('.projects__options--dropdown');
  const selectBtn = document.querySelector('.dropdownBtn');
  const selectItem = document.querySelector('.projects__options--item')

  selectBtn.addEventListener('mouseover', function show(a){
    selectItem.value = a;
  });

  
  // selectBtn.value = a;
  // function show(a){
  //   document.querySelector('.dropdownBtn').value = a;
  //   selectBtn.value = a;
  // }


  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('dropdown-active');
  });

   // ITEM SELECT
  //  function show(a){
  //   document.querySelector('.dropdownBtn').value = a;
  // }

  
}
dropdownProjects()



// SLIDER EXPERIENCE
// const experienceSlider = () => {}
// experienceSlider()



// 
// FOOTER - CONTACT
const circleSlide = () => {
  const textSlideCircle = document.querySelector('.contact__circle--text p')

  textSlideCircle.innerHTML = textSlideCircle.innerText.split('').map(
    (char, i) =>
      `<span style='transform:rotate(${i * 8.3}deg)'>${char}</span>`
  ).join('');
}

circleSlide()