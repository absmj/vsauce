// Nature of Code Week 8
// Soft Body Character with toxiclibs.js
// https://github.com/nature-of-code/noc-syllabus-S23/

class Spring extends VerletSpring2D {
  constructor(a, b, len, strength) {
    super(a, b, len, strength);
    physics.addSpring(this);
  }

  show() {
    stroke(112, 50, 126);
    strokeWeight(8);

    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

class SpringMin extends VerletMinDistanceSpring2D {
  constructor(a, b, len, strength) {
    super(a, b, len, strength);
    physics.addSpring(this);
  }

  show() {
    stroke(0);
    strokeWeight(0.5);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
