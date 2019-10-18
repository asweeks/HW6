var paddleL = 100;
var paddleR = 100;
var ballX = 30;
var ballSpeed = 20;
var rs = 0;
var ls = 0;
// var ballY = 40;
// var ballYSpeed = 5;
var paddleSpeed = 8;
var ball = {
  x: 100,
  y: 200,
  xspeed: 3,
  yspeed: 3,

}
function preload() {
  soundFormats("wav");
  mySound = loadSound("pop.wav");
}
function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
}



function draw() {
  background(0);
  stroke(255);
  
  line(width / 2, 0, width / 2, height)

  rect(0, paddleL, 20, 100);
  rect(width - 20, paddleR, 20, 100);

  fill(255, 0, 0);
  ellipse(ball.x, ball.y, 10);
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;


  // if ((ball.x <= 0) || (ball.x >= width)) {
  //   ball.xspeed *= -1;
  // }
  if ((ball.y <= 0) || (ball.y >= height)) {
    ball.yspeed *= -1;
  }

  if (keyIsDown(UP_ARROW)) {
    paddleR -= paddleSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    paddleR += paddleSpeed;
  }

  if (keyIsDown(65)) {
    paddleL -= paddleSpeed;
  }
  if (keyIsDown(90)) {
    paddleL += paddleSpeed;
  }

  if (paddleL < 0) {
    paddleL = 0;
  }

  if (paddleR < 0) {
    paddleR = 0;
  }
  if (paddleL > height - 100) {
    paddleL = height - 100;
  }

  if (paddleR > height - 100) {
    paddleR = height - 100;
  }

  // ball.xspeed+=0.01;
  // ball.yspeed+=0.01;
if (ball.x > width) {
    textSize(50);
    // text('Left Player Wins!', 100, 100)
     ls+=1;
    ball.x = width/2;
    ball.y = height/2;
    // noLoop();
    // ball.xspeed = 2;
    // ball.yspeed = 2;
  }
  if (ball.x < 0) {
    textSize(50);
    //text('Right Player Wins!', 100, 100)
   rs+=1;
      ball.x = width/2;
    ball.y = height/2;
    //noLoop();
    // ball.xspeed = 2;
    // ball.yspeed = 2;
  }
    textSize(50);
   text(ls, 40, 60);
   text(rs, width-70, 60);
  if (rs >= 3) {
    text('Right Player Wins!', 100, 100);
    ball.x = 100;
    ball.y = 200;
    rs = 0;
    ls = 0;
    noLoop();

  }

  if (ls >= 3) {
    text('Left Player Wins!', 100, 100);
    ball.x = 100;
    ball.y = 200;
    ls = 0;
    rs = 0;
    noLoop();

  }
  if ((ball.x <= 20 && (ball.y >= paddleL && ball.y <= paddleL + 100)) || ((ball.x >= width - 20) && ball.y >= paddleR && ball.y <= paddleR + 100)) {
    ball.xspeed *= -1;
    mySound.play();
  }
  


}
