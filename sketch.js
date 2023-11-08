function setup() {
  createCanvas(600, 600);
}

function draw() {
 background("#E29AEE"); 
 fill("#D839F3");
 stroke("#6D2679");
 strokeWeight(5)
if(mouseIPressed)
 rect(mouseX, mouseY, 20, 30);
}
