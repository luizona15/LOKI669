function setup() {
  createCanvas(600, 600);
  background("rgb(140,140,202)");
}

function draw() {
 stroke("darkblue")
  strokeWeight(5)
 fill("#00B0FF");
if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 30);
 }
}
