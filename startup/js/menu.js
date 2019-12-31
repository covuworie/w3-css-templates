let sideMenuOpen = false;
let sideMenu = document.querySelector(".side-menu");
let windowWidth = document.windowWidth;

let toggleMenu = function() {
    if(sideMenuOpen) {
        sideMenuClose();
    }
    else {
        sideMenu.style.left = "0";
        sideMenuOpen = true;      
    }   
}

let sideMenuClose = function() {
    sideMenu.style.left = "-40vw";
    sideMenuOpen = false;
}