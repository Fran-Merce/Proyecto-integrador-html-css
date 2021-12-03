const menuIcon = document.getElementById("menu-icon")
const navUl = document.getElementById("nav-ul")

menuIcon.addEventListener("click",()=>{
    navUl.classList.toggle("nav__ul-mobile-clicked")
})