class Skeleton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.springs = [];
    this.hsprings = [];

    this.head = new Particle(new Vec2D(x, y), 16);
    let neck = new Particle(new Vec2D(x, y + 20), 4);
    let lShoulder = new Particle(new Vec2D(x + 20, y + 80), 4);
    let rShoulder = new Particle(new Vec2D(x - 20, y + 80), 4);
    let lElbow = new Particle(new Vec2D(x + 100, y + 80), 8);
    let rElbow = new Particle(new Vec2D(x - 100, y + 80), 8);
    let lHand = new Particle(new Vec2D(x + 200, y + 80), 16);
    let rHand = new Particle(new Vec2D(x - 200, y + 80), 16);
    let belly = new Particle(new Vec2D(x, y + 120), 4);
    let lKnee = new Particle(new Vec2D(x - 50, y + 230), 4);
    let rKnee = new Particle(new Vec2D(x + 50, y + 230), 4);
    let lFoot = new Particle(new Vec2D(x + 50, y + 280), 16);
    let rFoot = new Particle(new Vec2D(x + 50, y + 280), 16);

    this.springs.push(new Spring(this.head, neck, 5, 0.05));
    this.springs.push(new Spring(neck, lShoulder, 20, 0.05));
    this.springs.push(new Spring(neck, rShoulder, 20, 0.05));
    this.springs.push(new Spring(rShoulder, rElbow, 40, 0.05));
    this.springs.push(new Spring(lShoulder, lElbow, 40, 0.05));
    this.hsprings.push(new SpringMin(rShoulder, lShoulder, 100, 0.05));

    this.springs.push(new Spring(rHand, rElbow, 10, 0.05));
    this.springs.push(new Spring(lHand, lElbow, 10, 0.05));
    this.springs.push(new Spring(neck, belly, 50, 0.05));
    this.hsprings.push(new SpringMin(rShoulder, belly, 50, 0.05));
    this.hsprings.push(new SpringMin(lShoulder, belly, 50, 0.05));
    this.hsprings.push(new SpringMin(lShoulder, this.head, 50, 0.05));
    this.hsprings.push(new SpringMin(rShoulder, this.head, 50, 0.05));
    this.springs.push(new Spring(belly, lKnee, 80, 0.05));
    this.springs.push(new Spring(belly, rKnee, 80, 0.05));
    this.hsprings.push(new SpringMin(lKnee, rKnee, 50, 0.05));
    this.springs.push(new Spring(lFoot, lKnee, 80, 0.05));
    this.springs.push(new Spring(rFoot, rKnee, 80, 0.05));
    this.head.lock();
  }

  dance() {
    this.head.x = this.x + sin(frameCount * 0.25) * 16;
    this.head.y = this.y + cos(frameCount * 0.25) * 16;
  }

  show() {
    imageMode(CENTER);
    for (let s of this.springs) {
      s.show();
    }
    image(img, this.head.x, this.head.y - 25, 50, 70);
  }
}
