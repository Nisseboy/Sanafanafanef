class Segment {
  constructor() {
    this.x = -100;
    this.y = -100;
    
    this.prevXs = [];
    this.prevYs = [];
    
    this.prevX = this.x;
    this.prevY = this.y;
  }
  draw() {
    ellipse(this.x,this.y,size);
    
    this.prevXs.push(this.x);
    this.prevYs.push(this.y);
    
    if (this.prevXs.length > distance) {
      this.prevXs.splice(0, 1);
      this.prevYs.splice(0, 1);
    }
    
    this.prevX = this.prevXs[0];
    this.prevY = this.prevYs[0];
  }
}