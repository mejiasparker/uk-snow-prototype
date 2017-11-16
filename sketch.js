// a snowflake object
var flakearray = [];
var img;

function preload(){
  img = loadImage('ukhomepage.jpg');
}

function setup() {
	createCanvas(640, 50);
  background(0);

  //create 3 types of snowflake objects and push them into the flake array
  for (var i = 0; i < 10; i++){
    var bigflake = new Snowflake(12,3);
    var mediumflake = new Snowflake(10,2);
    var smallflake = new Snowflake(5,1);
  	flakearray.push(bigflake);
    flakearray.push(mediumflake);
    flakearray.push(smallflake);
  }
	// test = new Snowflake(20,3);
  console.log(flakearray);

 
}

function draw() {
  // background(0);
  image(img,0,0);
  for (var i = 0; i < flakearray.length; i++) {
    
    // Call display function640
    flakearray[i].showsnow();

    // Call snowfall function
    flakearray[i].snowfall();
  }
}

function fullsnow() {
	resizeCanvas(640,400);
  var body = select('body');
  body.style('background-image:none');
}
  
  