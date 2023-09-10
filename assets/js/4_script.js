const dAz = document.getElementById("divAzul");
const dR = document.getElementById("divRojo");
const dV = document.getElementById("divVerde");
const dAm = document.getElementById("divAmarillo");
const dKey = document.getElementById("key");
const dLetras2 = document.getElementById("divLetras2");
dAz.addEventListener("click", () => (dAz.style.backgroundColor = "black"));
dR.addEventListener("click", () => (dR.style.backgroundColor = "black"));
dV.addEventListener("click", () => (dV.style.backgroundColor = "black"));
dAm.addEventListener("click", () => (dAm.style.backgroundColor = "black"));
var color;
var color2;
function nuevoDiv(color) {
  color2 = color;
  dLetras2.style.width = "200px";
  dLetras2.style.height = "200px";
  dLetras2.style.backgroundColor = color2;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "lightblue";
  } else if (event.key === "q") {
    nuevoDiv("purple");
  } else if (event.key === "w") {
    nuevoDiv("gray");
  } else if (event.key === "e") {
    nuevoDiv("brown");
  }
  dKey.style.backgroundColor = color;
});
