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