// write your codes here

 let shapeColor = "blue";
let diameter = 50;

function setup() {
  createCanvas(600, 400); // Create drawing canvas
  background(200);        // Gray background

  noStroke();
  fill("white");
  rect(0, 50, width, 100); // White rectangle

  fill("red");
  circle(width / 2, height / 2, 50); // Red circle
}

function draw() {
  noStroke();
  fill(shapeColor);
  circle(mouseX, mouseY, diameter); // Follow mouse
}

function mousePressed() {
  shapeColor = color(random(255), random(255), random(255)); // Random color
  diameter += 10;
  if (diameter > 500) diameter = 100;
}

function mouseReleased() {
  shapeColor = "white"; // Revert color to white
  diameter = 50;        // Reset diameter
  background(200);     // Clear background
  fill("white");
  rect(0, 50, width, 100); // Redraw white rectangle
  fill("red");
  circle(width / 2, height / 2, 50); // Redraw red circle
  draw(); // Redraw the current state   
    redraw(); // Ensure the canvas updates immediately
    noLoop(); // Stop draw loop to prevent continuous drawing
    loop(); // Resume draw loop for future interactions
    redraw(); // Ensure the canvas updates immediately
    
}
