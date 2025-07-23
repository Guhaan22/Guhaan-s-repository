function setup() {}
  createCanvas(600, 400);
  background(220);// 0 to 255 gray tone
// noLoop();  // stops continuous drawing //]
function draw() {
 circle(75, 200, 150);
 circle(225, 200, 150);
 circle(375, 200, 150);
 circle(525, 200, 150);
} 
let diameter = 80;
let posx = 75;

// recap 1 repeating circles using for loop
for (let i = 0; i < 4; i++) {
  circle(posx + i * 150, 200, diameter);
  posx = posx + diameter + 10 // calculate  the next position of x
}