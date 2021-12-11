const circles = Array.from(document.querySelectorAll("span.circle"));
circles.map((element, index) => {
    element.style.width = "10px!important";
    element.style.height = "10px!important";
})
