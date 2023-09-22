class Jungle {
  constructor() {
    this.tigers = []
    this.monkeys = []
    this.snakes = []
  }
  soundOff() {

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
      console.error(`${this.type} doesn't have enough energy`)
    else this.#energy = val;

  }
  sound() {
    console.log(`${this.type}'s making noise`)
    this.energy -= 3;
  }
  eat() {
    console.log(`${this.type}'s eating`)
    this.energy += 5;
  }

  sleep() {
    console.log(`${this.type}'s sleeping`)
    this.energy += 10;
  }

}

class Tiger extends Animal {
  constructor(jungle) {
    super(jungle);
    this.type = 'tiger'
  }
  eat(food) {
    if (food instanceof Grain) {
      console.log('“I can’t eat that”')
    }
    else super.eat()
  }
  sleep() {
    this.sleep()
    this.energy -= 5;
  }
}

class Monkey extends Animal {
  constructor(jungle) {
    super(jungle);
    this.type = 'monkey'
  }
  eat(food) {
    super.eat(food);
    this.energy -= 3;
  }
  sound() {
    super.sound();
    this.energy -= 1;
  }
  play() {
    if (this.energy >= 8) {
      this.energy -= 8;
      console.log('“Oooo Oooo”');
    }
    else console.log('“I’m too tired”')
  }
}

class Snake extends Animal {
  constructor() {
    super();
    this.type = 'snake'
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



