// Tabs
let cityTab = document.querySelector(".city-tab");
let city = document.querySelector(".city-london");
cityTab.innerHTML = city.innerHTML;

let toggleCity = function(clickedId) {
    // Set the HTML
    if(clickedId == "btn-london") {
        city = document.querySelector(".city-london");
    }
    else if (clickedId == "btn-paris") {
        city = document.querySelector(".city-paris");
    }
    else if (clickedId == "btn-toyko") {
        city = document.querySelector(".city-toyko");
    }
    cityTab.innerHTML = city.innerHTML;

    // Set the active button
    let activeBtn = document.querySelector(".active-city");
    activeBtn.className = activeBtn.className.replace(" active-city", "");
    activeBtn = document.querySelector("#" + clickedId);
    activeBtn.className += " active-city";
}

// Slideshow
let slideImage = function(className) {
    imagesURL = "https://www.w3schools.com/w3images/";
    images = ["snow.jpg", "lights.jpg", "mountains.jpg", "forest.jpg"];

    currentImageNode = document.querySelector(".slideshow img");
    currentImageUrl = currentImageNode.getAttribute("src");
    currentImageUrlParts = currentImageUrl.split(imagesURL);
    imageName = currentImageUrlParts[1]
    currentImageIndex = images.indexOf(imageName);

    if(className == "slide-left") {
        newImageIndex = currentImageIndex - 1;
        if(newImageIndex < 0) {
            newImageIndex = images.length - 1;
        }
        
    }
    else if(className == "slide-right") {
        newImageIndex = currentImageIndex + 1;
        if(newImageIndex > images.length - 1) {
            newImageIndex = 0;
        }
    }

    newImageUrl = imagesURL + images[newImageIndex];
    currentImageNode.setAttribute("src", newImageUrl);
}

// Progess bar
let i = 0;
let animateProgressBar = function() {
    if (i == 0) {
        i = 1;
        var bar = document.querySelector(".progress-bar");
        var width = 5;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                bar.style.width = width + "%";
                bar.innerHTML = width + "%";
            }
        }
    }
}

// Modal dialog
let showModal = function() {
    modal = document.querySelector(".modal");
    modal.style.display = "block";
}

let closeModal = function() {
    modal = document.querySelector(".modal");
    modal.style.display = "none";
}

// Side navigation
let openSideNav = function() {
    nav = document.querySelector(".side-nav");
    nav.style.display = "block";
}

let closeSideNav = function() {
    nav = document.querySelector(".side-nav");
    nav.style.display = "none";
}