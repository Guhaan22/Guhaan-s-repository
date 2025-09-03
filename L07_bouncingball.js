// write your codes here
let xpos = 200

function setup() {
    createCanvas(600, 400);
    background("skyblue"); // 220

}

// forever block
function draw() {
    // erase
     background("skyblue"); // 220
     circle(xpos, height/2, 50)
if (keyIsDown(LEFT_ARROW)) {// RIGHT_ARROW
    xpos = xpos -5;

}
if(keyIsDown(LEFT_ARROW)) {
    xpos = 25;
    
}
if (keyIsDown(RIGHT_ARROW)) {// RIGHT_ARROW
    xpos = xpos +5;

}
if(keyIsDown(RIGHT_ARROW)) {
    xpos = width-25;
}
}