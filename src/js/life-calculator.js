export default class LifeCalculator {
  constructor(userHeight, userWeight, health, exercise, alcohol, smoking, drugUse, petOwner, relationship) {
    this.height = userHeight;
    this.weight = userWeight;
    this.health = health;
    this.exercise = exercise;
    this.alcohol = alcohol;
    this.smoking = smoking;
    this.drugUse = drugUse;
    this.petOwner = petOwner;
    this.relationship = relationship;
  }

  checkBMI() {
    return ((this.weight / (this.height * this.height)) * 703).toFixed(2);
  }

  lifestyleMod() {
    return (this.health * this.exercise * this.alcohol * this.smoking * this.drugUse * this.petOwner * this.relationship).toFixed(2);
  }

  lifeExpectancy() {
    let bmi = this.checkBMI();
    let lifestyleMod = this.lifestyleMod();
    return ((lifestyleMod / bmi) * 1000 + 45).toFixed(0);
  }

  lifespan(age) {
    return this.lifeExpectancy() - age;
  }

  mercuryLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 0.24;
  }

  venusLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 0.62;
  }

  marsLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 1.88;
  }

  ceresLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 4.6;
  }

  jupiterLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 11.86;
  }

  saturnLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 29.5;
  }

  caelumLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 84.3;
  }

  neptuneLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 165;
  }

  plutoLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 247.7;
  }

  erisLifespan() {
    let lifespan = this.lifespan();
    return lifespan * 558;
  }
}
