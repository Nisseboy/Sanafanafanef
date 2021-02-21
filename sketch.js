let size = 10;
let count = 1;
let snakes = [];
let distance = 5;
let foods = [];
let foodCount = 20;
let defaultLength = 3;
let fColor = [220, 0, 0];

this.focus();

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.body.style.overflow = 'hidden';
  for (let i = 0; i < count; i++) {
    snakes.push(new Snake(defaultLength, 2));
  }
  for (let i = 0; i < foodCount; i++) {
    foods.push(new Food());
  }
  if (localStorage.aaa == "aaa") {
    print("hrm");
    let b = createButton("Grow");
    b.position(0,0);
    b.mousePressed(()=>{snakes[0].grow(1)});
  }
}

function draw() {
  background(0);
  snakes.forEach(snake => {
    fill(snake.c);
    snake.draw();
  });
  fill(fColor);
  foods.forEach(food => {
    food.draw();
  });
  if (keyIsPressed) {
    switch (keyCode) {
      case 37: //Left
        snakes[0].a -= TWO_PI / 60;
        break;
      case 39: //Right
        snakes[0].a += TWO_PI / 60;
        break;
    }
  }
  if (mouseIsPressed) {
    snakes[0].a = atan2(mouseY - snakes[0].head.y, mouseX - snakes[0].head.x);
  }
}

function distanceToSnake(x, y) {
  if (snakes.length == 0)
    return [1000, null, 0];
  let bestDistance = 10000000;
  let best;
  for (let i = 0; i < snakes.length; i++) {
    let snake = snakes[i];
    let d = snake.distance(x,y);
    if (d[0] < bestDistance) {
      bestDistance = d[0];
      best = d;
    }
  }
  return best;
}
