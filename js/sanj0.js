const birthday = new Date(2004, 0, 13);
const footer_text = '&copy; 2021 Malte Dostal. All rights reserved. <a style="color: white;" href="mailto:malte.dostal@gmail.com">email me,</a><br>Fonts by fonts.google.com ("Righteous", "Raleway")';

for (let f of document.getElementsByClassName("footer")) {
    f.innerHTML = footer_text;
}

init_context_visibility();

document.getElementById("age").innerHTML = Math.floor((Date.now() - birthday) / 1000 / 60 / 60 / 24 / 365.4);
const divstart = document.getElementById("divstart");
divstart.onmouseover = divstart.onmouseout = change_context_visibility;

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("v")) {
    let div = document.getElementById(urlParams.get("v"));
    if (div != null) {
        document.getElementById(DIV_START).style.display = "none";
        div.style.display = "block";
        current_div = div.id;
    }
}

function change_context_visibility(event) {
    let hide = event.type == "mouseout";
    change_context_display_style(hide ? "none" : "inline-block");
}

function change_context_display_style(d) {
    for (let c of document.getElementsByClassName("context")) {
        c.style.display = d;
    }
}

function init_context_visibility() {
    change_context_display_style(isTouchDevice() ? "inline-block" : "none");
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}