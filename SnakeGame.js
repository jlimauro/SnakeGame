// Jeffrey Limauro
// SnakeGame.js

var s;
var scl = 20;
var food;
var score = 0;
var canvas, scoreDiv;

function setup() {
 scoreDiv = createDiv("Score: " + score);
 scoreDiv.parent('myContainer');
 scoreDiv.style('padding-bottom','10px');
 canvas = createCanvas(600,600);
 canvas.parent('myContainer');
 
  s = new Snake();
  frameRate(8);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

//// for debugging:
//function mousePressed() {
//  s.total++;
//}

function draw() {
  
  background(51);
  if (s.eat(food)) {
    pickLocation();
  }
  
  s.death();
  s.update();
  s.show();    
  fill(255,0,100);
  rect(food.x, food.y, scl, scl);
  
  scoreDiv.html('Score: ' + score);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   s.dir(0,-1); 
  } else if (keyCode === DOWN_ARROW) {
   s.dir(0, 1); 
  }
  else if (keyCode === LEFT_ARROW) {
   s.dir(-1, 0); 
  }
  else if (keyCode === RIGHT_ARROW) {
   s.dir(1, 0); 
  }
}