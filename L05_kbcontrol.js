let xpos = 50
let ypos = 50


function setup() {
  createCanvas(400, 400);
}

// write your codes here
function draw() {
  background(200); // clear the drawing paper
// if(keyCode === 38){   fill(255, 0, 0);
//     }
// if (keyCode === 40){
//     }

textSize(18); // font Size
   // text     x y
text(key,    50, 70)
text(keyCode, 50, 40)
// ellipse(300 ,100 ,100 ,100 );

if(keyIsDown( RIGHT_ARROW)){
    xpos = xpos +3;
  }
  if(keyIsDown( LEFT_ARROW)){
    xpos = xpos -3;
  }
  xpos = constrain(xpos, 0, width);
  if(keyIsDown( UP_ARROW)){
    ypos = ypos -3;
  }
  if(keyIsDown( DOWN_ARROW)){
    ypos = ypos +3;
  }
  ypos = constrain(ypos, 0, height)

  fill(255, 0, 0); // red
  circle(xpos, ypos, 50); // width, height of the canvas
}