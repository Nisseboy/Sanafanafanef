class Snake {
  constructor(len, speed) {
    this.segments = [];
    for (let i = 0; i < len; i++) {
      this.segments.push(new Segment());
    }

    this.head = this.segments[0];
    this.head.x = width / 2;
    this.head.y = height / 2;
    this.speed = speed;
    this.a = 0;
    this.c = [floor(random(255)), floor(random(255)), floor(random(255))];
  }
  draw() {
    this.segments.forEach(segment => {
      segment.draw();
    });
    this.head.x += cos(this.a) * this.speed;
    this.head.y += sin(this.a) * this.speed;

    for (let i = this.segments.length - 1; i > 0; i--) {
      this.segments[i].x = this.segments[i - 1].prevX;
      this.segments[i].y = this.segments[i - 1].prevY;
    }

    let d = this.distance(this.head.x, this.head.y, 3);
    if (d[0] < size) {
//      this.die();
    }
  }
  distance(x, y, startI = 0) {
    let bestDistance = 10000000;
    let bestSegment;
    let i = startI;
    for (; i < this.segments.length; i++) {
      let segment = this.segments[i];
      let d = dist(this.head.x, this.head.y, x, y);
      if (d < bestDistance) {
        bestDistance = d;
        bestSegment = i;
      }

    }
    return [bestDistance, this, bestSegment];
  }
  grow(len) {
    for (let i = 0; i < len; i++)
      this.segments.push(new Segment());
  }
  die(rebirth = false) {
    snakes.splice(snakes.indexOf(this), 1);
    if (rebirth)
      snakes.push(new Snake(defaultLength, this.speed));


  }
}