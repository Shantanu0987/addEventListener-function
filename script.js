let Click = document.getElementById("div1");
let Hover = document.getElementById("div2");
let DblClick = document.getElementById("div3");
let Drag = document.getElementById("div4");
let Right_Click = document.getElementById("div5");
let Scroll_Up = document.getElementById("div6");
let Scroll_Down = document.getElementById("div7");
let Exit = document.getElementById("div8");

//Useing only addEventListener

Click.addEventListener("click", () => {
  alert("You clicked me");
});
Hover.addEventListener("mouseenter", () => {
  alert("You hoverd over me");
});
DblClick.addEventListener("dblclick", () => {
  alert("Ouch! You clicked me twice");
});
Drag.addEventListener("drag", () => {
  alert("you dragged me");
});
Exit.addEventListener("mouseleave", () => {
  alert("You left me");
});
Right_Click.addEventListener("contextmenu", () => {
  alert("you clicked the secendary side of the mouse ");
});
Scroll_Up.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    alert("You scrolled the mouse scroll upwards");
  }
});
Scroll_Down.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    alert("You scrolled the mouse scroll downwards");
  }
});
