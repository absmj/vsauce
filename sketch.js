// // Nature of Code Week 8
// // Soft Body Character with toxiclibs.js
// // https://github.com/nature-of-code/noc-syllabus-S23/

// // "Importing" the classes we need
let { Vec2D, Rect } = toxi.geom;
let { VerletPhysics2D, VerletParticle2D, VerletSpring2D, VerletMinDistanceSpring2D } = toxi.physics2d;
let { GravityBehavior } = toxi.physics2d.behaviors;

// // This is object destructuing!
// let particle = { x: 100, y: 50 }
// let { x , y } = particle;

// // Physics World
let physics;

let skeleton;

// let img, sky, abs;

// function preload() {
//   abs = loadImage("grass.png");
//   sky = loadImage("sky.jpg")
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Make the world
//   physics = new VerletPhysics2D();

//   // Adding gravity to the world
//   let gravity = new GravityBehavior(new Vec2D(0, 0.1));
//   physics.addBehavior(gravity);

//   // Add a bounds
//   let boundary = new Rect(0, 0, width, height);
//   physics.setWorldBounds(boundary);

//   skeleton = new Skeleton(width / 2, 100);

//   imageMode(BOTTOM)

// }

// function draw() {
//   image(sky, 0, 0, 0);
//   // imageMode(CENTER)
//   // translate(0, abs.height, 0)
//   image(abs, 0, 0, windowWidth + (windowHeight / 4), windowHeight / 2);
//   // // background(240, 99, 164);
//   // // push();
//   // scale(0.5)
//   // physics.update();
//   // skeleton.show();
//   // skeleton.dance();
//   // pop();
// }


let grass, abs, sky, rock, me, blackhole, sound;
let scaleAmt, play;

function preload() {
  abs = loadImage('abs.png');
  sky = loadImage('sky.jpg');
  grass = loadImage('grass.png');
  rock = loadImage('rock.png')
  img = loadImage("me.png")
  blackhole = createVideo(['blackhole.mov'])
  sound = createAudio('moon-men-instrumental.mp3');
  blackhole.hide();
  sound.hide();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  blackhole.play();
  blackhole.loop();
  sound.play();
  sound.loop();
  physics = new VerletPhysics2D();
  physics = new VerletPhysics2D();

  // Adding gravity to the world
  let gravity = new GravityBehavior(new Vec2D(0, 0.1));
  physics.addBehavior(gravity);

  // Add a bounds
  let boundary = new Rect(0, 0, width, height);
  physics.setWorldBounds(boundary);

  skeleton = new Skeleton(width / 2, 100);
  scaleAmt = 1;
}

function draw() {
  // Set the background to the sky image
  // background(sky);

  // Calculate the dimensions of the grass image to maintain its aspect ratio
  let imgWidth = width;
  let imgHeight = imgWidth * (grass.height / grass.width);

  // Calculate the position to translate the canvas to keep the bottom center fixed
  let translateX = width / 2;
  let translateY = height - imgHeight / 2;

  // Update the scale amount based on the sin of the frame count
  scaleAmt = map(sin(frameCount / 200), -2, 2, 1, 2);

  // Translate the canvas to the bottom center
  translate(translateX, translateY);

  // Scale the canvas by the current scale amount
  scale(scaleAmt);
  image(sky, 0, 0, windowWidth, height + translateY);
  push();
  blendMode(SCREEN)
  imageMode(CENTER)
  translate(0,0)
  rotate(0.2)
  image(blackhole, 0, -height / 4, 1280, 960);
  pop();
  // Grass 1
  push();
  translate(0, -15)
  scale(-1, 1)
  image(grass, 0, 0, imgWidth, imgHeight);
  pop();

  // Abs 1
  push();
  translate(-200, 0)
  image(abs, 0, 0, imgWidth, imgHeight);
  pop();

  // Grass 2
  push();
  translate(-100, -35)
  scale(-1, 1)
  image(grass, 0, 0, imgWidth, imgHeight);
  pop();

  // Rock
  // push();
  // translate(0, 50);
  // scale(0.5)
  // image(rock, 0, 0, rock.width / 2, rock.height / 2);
  // pop();

  push();
  translate(-translateX, -200)

  physics.update();
  skeleton.show();
  skeleton.dance();
  pop();

  // Grass main
  push();
  translate(200, -10)
  scale(1, 1)
  image(grass, 0, 0, imgWidth, imgHeight);
  pop();


//   // Grass main 1
  image(grass, 0, 0, imgWidth, imgHeight);

  // Translate the canvas back to the original position
  scale(1 / scaleAmt);
  translate(-translateX, -translateY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseClicked() {
  blackhole.play();
  blackhole.loop();
}