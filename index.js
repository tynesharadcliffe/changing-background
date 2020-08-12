button.onclick = colourChange;
const body = document.getElementById("body");
const background = ["green", "purple", "yellow", "red", "white"];
function colourChange(){
  body.style.backgroundColor = background[Math.floor(Math.random()*5)];
};
