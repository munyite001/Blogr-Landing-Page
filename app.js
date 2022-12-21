//  Mobile - menu
const mobileMenu = document.querySelector('.mobile-menu');
const openMenu = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.open-menu-img');
const menuLinks = document.querySelectorAll('.nested-list-link');
const nav = document.querySelector('.nav');

openMenu.addEventListener('click', ()=>{
  if (hamburger.classList.contains('open'))
  {
    hamburger.classList.remove('open');
    hamburger.src = "./images/icon-close.svg";
    mobileMenu.classList.add('show-mobile-menu');
  }
  else 
  {
    hamburger.classList.add('open');
    hamburger.src = "./images/icon-hamburger.svg";
    mobileMenu.classList.remove('show-mobile-menu');
  }
  
});

//  Show and hide Mobile menu lists
menuLinks.forEach((link) => {
  link.addEventListener('click',(e) => {
    let menuList = e.currentTarget.querySelector('.nested-list');
    let arrow = e.currentTarget.querySelector('.arrow-icon');
    if(menuList.classList.contains("show-nested-list"))
    {
      menuList.classList.remove("show-nested-list");
      arrow.style.rotate = "0deg";
    }
    else
    {
      menuList.classList.add("show-nested-list");
      arrow.style.rotate = "180deg";
    }
  });
});


//  Sticky Navbar past a certain point
window.addEventListener("scroll", () => {
  if (scrollY > 40)
  {
    nav.classList.add('sticky-nav');
    nav.style.width="100%";
    if(window.innerWidth > 768)
    {
      nav.style.padding = "0 12%"
    }
  }
  else
  {
    nav.classList.remove('sticky-nav');
    if (window.innerWidth > 768)
    {
      nav.style.width = "80%";
      nav.style.padding="1rem";
    }
  }
})
