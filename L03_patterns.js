function setup() {
  createCanvas(600, 400);
  background(220);// 0 to 255 gray tone

}
function draw() {
 
  // Task 1: Colour Gradient
  for (let i = 0; i < width; i += 10) {
    let c = map(i, 0, width, 0, 255);
    fill(c, 100, 150);
    rect(i, height - 50, 10, 50);
  }
  

  // Task 2: Colour Loop
  for (let i = 0; i < 360; i += 10) {
    stroke(i, 100, 150);
    line(0, i, width, i);
  }

  // Task 3: Row of Circles
  for (let i = 0; i < width; i += 50) {
    fill(100, 150, 200);
    ellipse(i + 25, height - 100, 50, 50);
  }

  // Task 4: Grid of Circles
  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height - 100; y += 50) {
      fill(100, 150, 200);
      ellipse(x + 25, y + 25, 50, 50);
    }
  }
}