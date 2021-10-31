function favColor() {
    document.getElementById("color");
    alert("Green")
}

function favPlace() {
    document.getElementById("place");
    alert("Monterey, CA")
}

function favRitual() {
    document.getElementById("ritual");
    alert("Praying")
}

let color = document.getElementById("color");
let place = document.getElementById("place");
let ritual = document.getElementById("ritual");

color.addEventListener("click", favColor);
place.addEventListener("click", favPlace);
ritual.addEventListener("click", favRitual);