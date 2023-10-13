const openNav = document.querySelector(".open-menu");
const closeNav = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-links-container");

const background = document.querySelector(".background");

const mediaSize = 992;

openNav.addEventListener("click", toggleMenu);

closeNav.addEventListener("click", toggleMenu);
background.addEventListener("click", toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle("open");
  background.classList.toggle("active");
}

navMenu.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth < mediaSize) {
    e.preventDefault();
    const dropdownMenuBranch = e.target.parentElement;

    if (dropdownMenuBranch.classList.contains("active")) {
      collapseDropdownMenu(dropdownMenuBranch);
    } else {
      if (navMenu.querySelector(".dropdown-menu-branch.active")) {
        collapseDropdownMenu(dropdownMenuBranch);
      }
      dropdownMenuBranch.classList.add("active");
      const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
      dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
    }
  }
});

function collapseDropdownMenu(dropdownMenuBranch) {
  dropdownMenuBranch.querySelector(" .dropdown-menu").removeAttribute("style");
  dropdownMenuBranch.classList.remove("active");
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-logo").style.maxWidth = "90px";
  } else {
    document.getElementById("nav-logo").style.maxWidth = "120px";
  }
}

window.onscroll = function () {
  scrollFunction();
};
