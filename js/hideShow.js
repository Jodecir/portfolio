var list = document.getElementsByTagName("li");

for (var i = 0; i < list.length; i++) {
    list[i].setAttribute("onmouseenter", "showImage()");
    list[i].setAttribute("onmouseleave", "hideImage()");
}

function showImage() {
    var image = event.currentTarget.firstChild.lastChild;
    image.style.opacity = "1";
}

function hideImage() {
    var image = event.currentTarget.firstChild.lastChild;
    image.style.opacity = "0";
}