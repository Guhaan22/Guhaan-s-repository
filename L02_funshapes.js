/*
Task 1: Add the setup() function
*/

function draw() {
  // Challenge 1: An eye using ellipse() function\

  fill(255, 0, 0);
  ellipse(300, 200, 200, 200);

  // Challenge 2: A face using circle() function
  fill(255, 220, 185);
  ellipse(300, 200, 200, 200);

  // Challenge 3: A house using rect() function
  fill(150, 75, 0);
  rect(200, 200, 200, 200);
  fill(255, 0, 0);
  triangle(200, 200, 400, 200, 300, 100);

  // Challenge 4: A rocketship using triangle() function
  fill(200, 0, 0);
  triangle(250, 100, 350, 100, 300, 50);
  fill(150, 150, 150);
  rect(250, 100, 100, 200);
  // Challenge 5: A square face using quad() function

  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon using the functions you have learned
  fill(255, 255, 0);
}