(() => {
    
    "use strict";
    
    const navbarToggle = document.querySelector(".navbar-toggle"),
          navbarMenu = document.querySelector(".navbar-menu"),
          navbarMenuClose = document.querySelector(".navbar-menu-close");
    
    navbarToggle.addEventListener("click", () => {
        navbarToggle.classList.add("focus");
        navbarMenu.classList.add("open");
    });
    navbarMenuClose.addEventListener("click", () => {
        navbarToggle.classList.remove("focus");
        navbarMenu.classList.remove("open");
    });
    
})();