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

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}