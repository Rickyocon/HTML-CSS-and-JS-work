var canvas;
var h1;
var x = 100;
var y = 100;
var my_fav;
var x_speed = 0.1;
var y_speed = -0.1;
var bgcolor;
var button;
var slider;
var my_fav;
var slider;
var input;
var nameP;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(125, 800);
  createP("i love java script");
  h1 = createElement("h1", "waiting for you to click");
  h1.position(170, 10);
  button = createButton("press me");
  button.mousePressed(changeColor);
  button = createButton("favorite number");
  slider = createSlider(0, 100, 10);
  input = createInput("enter your name here");
  nameP = createP("Your Name");
}

function mousePressed() {
  createP("i love java script");
  h1.html("whats popin");
  my_fav = createP("my favorite number is " + random(0, 21));
  my_fav.position(random(0, 500), random(0, 500));
}

function changeFavorite() {
  my_fav = createP("my favorite number is " + random(0, 21));
  my_fav.position(random(0, 500), random(0, 500));
}

function changeColor() {
  bgcolor = color(random(0, 256), random(0, 256), random(0, 256));
}

function draw() {
  background(45, 150, 35);
  fill(0, 255, 0);
  rect(x, y, slider.value(), slider.value());
  rect(x, y, 55, 55);
  triangle(30, 75, 58, 20, 86, 75);
  circle(100, 100, 40);
  stroke(255, 204, 0);
  strokeWeight(4);
  x = x + x_speed;
  y = y + y_speed;
  nameP.html(input.value());
  text(input.value(), 50, 75);
}
