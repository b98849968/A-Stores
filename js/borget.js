let menuIcon = document.getElementById("menuIcon");
let menuIcons = document.getElementById("menu-icon1");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
console.log(navbar);

menuIcons.onclick = () => {
  navbar.classList.add("actives");
  header.classList.add("shadowss");

  console.log(navbar);
};
menuIcon.onclick = () => {
  navbar.classList.toggle("actives");
  header.classList.toggle("shadowss");
  console.log(navbar);
};

window.onscroll = () => {
  navbar.classList.remove("actives");
  header.classList.remove("shadowss");

};
 
document.addEventListener("click", function (event) {
  if (window.innerWidth <= 768) {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnMenuIcon =
      menuIcon.contains(event.target) || menuIcons.contains(event.target);

    if (
      !isClickInsideNavbar &&
      !isClickOnMenuIcon &&
      navbar.classList.contains("actives")
    ) {
      navbar.classList.remove("actives");
      header.classList.remove("shadowss");
    }
  }
});

 

 
 
