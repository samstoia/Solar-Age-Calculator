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
}
