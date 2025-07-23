/*
Task 1: Add the setup() function
*/
function setup() {
  createCanvas(600, 400);
  background(220);// 0 to 255 gray tone

}
function draw() {
 

  fill(255, 255, 0);
  ellipse(300, 300, 150, 150); // Body
  fill(0, 0, 0);
  ellipse(270, 280, 30, 30); // Left eye
  ellipse(330, 280, 30, 30); // Right eye
  fill(255, 0, 0);
  ellipse(300, 320, 50, 20); // Mouth
  fill(0, 255, 0);
  ellipse(300, 350, 100, 50); // Belly
  fill(255, 0, 0);
  ellipse(250, 250, 30, 30); // Left cheek
  ellipse(350, 250, 30, 30); // Right cheek
  
  
}