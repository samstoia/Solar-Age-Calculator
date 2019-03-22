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

  mercuryLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 0.24).toFixed(2);
  }

  venusLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 0.62).toFixed(2);
  }

  marsLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 1.88).toFixed(2);
  }

  ceresLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 4.6).toFixed(2);
  }

  jupiterLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 11.86).toFixed(2);
  }

  saturnLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 29.5).toFixed(1);
  }

  caelumLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 84.3).toFixed(2);
  }

  neptuneLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 165).toFixed(0);
  }

  plutoLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 247.7).toFixed(1);
  }

  erisLifespan(age) {
    let lifespan = this.lifespan(age);
    return (lifespan * 558).toFixed(0);
  }
}
