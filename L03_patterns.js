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
  fill(0, 0, 0);
  ellipse(250, 250, 30, 30); // Left eye
  ellipse(350, 250, 30, 30); // Right eye
  fill(255, 0, 0);
  ellipse(300, 300, 50, 20); // Mouth
  fill(255, 255, 0);
  ellipse(300, 350, 100, 50); // Belly
  fill(255, 0, 0);
  ellipse(250, 250, 30, 30); // Left cheek
  ellipse(350, 250, 30, 30); // Right cheek
  // Recap 7: Create a funny Pokemon using the functions you have learned
  fill(255, 255, 0);
  ellipse(300, 300, 150, 150); // Body
  fill(0, 0, 0);
  ellipse(270, 280, 30, 30); // Left eye
  ellipse(330, 280, 30, 30); // Right eye
  fill(255, 0, 0);
  ellipse(300, 320, 50, 20); // Mouth
  // Recap 8: A square face using quad() function
  fill(255, 220, 185);
  quad(200, 200, 400, 200, 400, 400, 200, 400);
  fill(0, 0, 0);
  ellipse(250, 250, 30, 30); // Left eye
  ellipse(350, 250, 30, 30); // Right eye
  fill(255, 0, 0);
  ellipse(300, 300, 50, 20); // Mouth
  fill(255, 255, 0);
  ellipse(300, 350, 100, 50); // Belly
  fill(255, 0, 0);
  ellipse(250, 250, 30, 30); // Left cheek
  ellipse(350, 250, 30, 30); // Right cheek
  // Recap 9: A funny Pokemon using the functions you have learned
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
  // Recap 10: A funny face using the functions you have learned
  fill(255, 220, 185);
  ellipse(300, 200, 200, 200); // Face
  fill(0, 0, 0);
  ellipse(270, 180, 30, 30); // Left eye
  ellipse(330, 180, 30, 30); // Right eye
  fill(255, 0, 0);
  ellipse(300, 220, 50, 20); // Mouth
  fill(255, 255, 0);
  ellipse(300, 250, 100, 50); // Nose
  fill(0, 0, 255);
  ellipse(250, 150, 30, 30); // Left ear
  ellipse(350, 150, 30, 30); // Right ear
  

  // Task 1: Colour Gradient
  for (let i = 0; i < width; i += 10) {
    let c = map(i, 0, width, 0, 255);
    fill(c, 100, 150);
    rect(i, height - 50, 10, 50);
  }

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}