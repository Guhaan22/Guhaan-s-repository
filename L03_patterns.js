function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  fill(255, 0, 0);
  ellipse(300, 100, 100, 100);
  // Recap 2: Traffic Light
  fill("yellow");
  ellipse(300, 200, 100, 100);
  fill("green");
  ellipse(300, 300, 100, 100);
  // Recap 3: A face using ellipse() function
  fill(255, 220, 185);
  ellipse(300, 200, 200, 200);
  // Recap 4: A house using rect() function
  fill(150, 75, 0);
  rect(200, 200, 200, 200);
  fill(255, 0, 0);
  triangle(200, 200, 400, 200, 300, 100);
  // Recap 5: A rocketship using triangle() function
  fill(200, 0, 0);
  triangle(250, 100, 350, 100, 300, 50);
  fill(150, 150, 150);
  rect(250, 100, 100, 200);
  // Recap 6: A square face using quad() function
  fill(255, 220, 185);
  quad(200, 200, 400, 200, 400, 400, 200, 400);

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}