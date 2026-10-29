let selectedcolor = "rgb(129, 58, 58)";

function colorblue() {
    selectedcolor = "rgb(58, 65, 129)";
}

function colorred() {
    selectedcolor = "rgb(129, 58, 58)";
}

function colorgreen() {
    selectedcolor = "rgb(58, 129, 58)";
}

function boxclick(box) {
    box.style.backgroundColor = selectedcolor;
}

