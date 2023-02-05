function responsiveNav() {
    var x = document.getElementsByClassName("navbar")[0];
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
