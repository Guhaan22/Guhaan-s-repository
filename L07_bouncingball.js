// write your codes here
let xpos = 200

let ballX = 200;
let ballY = 300;
let ballSize = 50;
let ballSpeedX = 2;
let ballSpeedY = 2;
function setup() {
    createCanvas(600, 400);
    background("skyblue"); // 220

}

// forever block
// 

// task 1
function draw() {
    background("steelblue")
    noStroke()
    circle(ballX, ballY, ballSize)

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY

    if ( ballX > width-ballSize/2 ){
        ballSpeedX = ballSpeedX * -1;
    }
    if (ballX < 0+ballSize/2) {
        ballSpeedX = ballSpeedX * -1; // change direction
    }
}