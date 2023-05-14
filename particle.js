// Nature of Code Week 8
// Soft Body Character with toxiclibs.js
// https://github.com/nature-of-code/noc-syllabus-S23/

class Particle extends VerletParticle2D {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
    physics.addParticle(this);
  }

  show() {
    fill(0);
    circle(this.x, this.y, this.r * 2);
  }
}
