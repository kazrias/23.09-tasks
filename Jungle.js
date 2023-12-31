class Jungle {
  constructor() {
    this.tigers = []
    this.monkeys = []
    this.snakes = []
  }
  soundOff() {
    const noiseOfTigers = []
    for (let tiger of this.tigers) {
      noiseOfTigers.push(tiger.sound() + tiger.energy)
    }
    const noiseOfMonkeys = []
    for (let monkey of this.monkeys) {
      noiseOfMonkeys.push(monkey.sound() + monkey.energy)
    }
    const noiseOfSnakes = []
    for (let snake of this.snakes) {
      noiseOfSnakes.push(snake.sound() + snake.energy)
    }
    return [noiseOfTigers, noiseOfMonkeys, noiseOfSnakes];
  }

}

class Animal {
  #energy = 10;
  constructor(jungle) {
    if (this instanceof Tiger)
      jungle.tigers.push(this)
    if (this instanceof Monkey)
      jungle.monkeys.push(this)
    if (this instanceof Snake)
      jungle.snakes.push(this)
    else return 'There is no place for such animal in this jungle'
  }
  get energy() {
    return this.#energy
  }
  set energy(val) {
    if (val < 0)
      return `${this.type} doesn't have enough energy`
    else this.#energy = val;

  }
  sound() {
    this.energy -= 3;
  }
  eat() {
    this.energy += 5;
  }

  sleep() {
    this.energy += 10;
  }

}

class Tiger extends Animal {
  constructor(jungle) {
    super(jungle);
    this.type = 'tiger'
  }
  sound() {
    super.sound()
    return 'RrrRrr '
  }
  eat(food) {
    if (food instanceof Grain) {
      return '“I can’t eat that”'
    }
    else super.eat()
  }
  sleep() {
    this.energy += 5;
  }
}

class Monkey extends Animal {
  constructor(jungle) {
    super(jungle);
    this.type = 'monkey'
  }
  eat() {
    this.energy += 2;
    return this;
  }
  sound() {
    this.energy -= 4;
    return 'OaOaOa '
  }
  play() {
    if (this.energy >= 8) {
      this.energy -= 8;
      return '“Oooo Oooo”'
    }
    else return '“I’m too tired”'
  }
}

class Snake extends Animal {
  constructor(jungle) {
    super(jungle);
    this.type = 'snake'
  }
  sound() {
    super.sound()
    return 'SssSss '
  }
}



class Food {

}

class Fish extends Food {

}

class Grain extends Food {

}

class Meat extends Food {

}
