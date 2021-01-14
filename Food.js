class Food {
  constructor() {
    this.randomize();
  }
  randomize() {
    this.x = random(width);
    this.y = random(height);
  }
  draw() {
    ellipse(this.x, this.y, size * 1.5);
    
    let closest = distanceToSnake(this.x, this.y);
    if (closest[0] < size*1.25) {
      closest[1].grow(1);
      this.randomize();
    }
  }
}