'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(beast) {
    if (
      beast.hasOwnProperty('hidden') &&
      beast.hidden === false &&
      beast.health > 0
    ) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      const pos = Animal.alive.findIndex((el) => el === beast);

      if (pos !== 1) {
        Animal.alive.splice(pos, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
