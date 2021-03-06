let size = 10;
let count = 1;
let snakes = [];
let distance = 5;
let foods = [];
let foodCount = 20;
let defaultLength = 3;
let fColor = [220, 0, 0];

let cheats = localStorage.aaa == "aaa";

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
      case 38: //grow
        if (cheats)
          snakes[0].grow(1);
        break;
    }
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
