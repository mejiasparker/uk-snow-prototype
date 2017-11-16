// snowflake constuctor
class Snowflake {
  constructor(diam, speed) {
    this.x = random(width); // x location of flake 
    this.y = random(0,-100); // y location of flake 
    this.diam = diam; // size of flake 
    this.speed = speed;
  }

  showsnow() {
    // Display the snow 
    noStroke();
		for (var i = 0; i < this.diam; i++){
		fill(255,255,255,(i*5));
		ellipse(this.x,this.y,i);
		}
    // ellipse(this.x,this.y,this.diam)
  }

  snowfall() {
    // Make snow fall
    this.y = this.y + this.speed;
    if(this.y > height){
       this.y = random(0,-100);
       this.x = random(width);
       }
  }
}