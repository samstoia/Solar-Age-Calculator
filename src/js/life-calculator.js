export default class LifeCalculator {
  constructor(userHeight, userWeight) {
    this.height = userHeight;
    this.weight = userWeight;
  }

  checkBMI() {
    return ((this.weight / (this.height * this.height)) * 703).toFixed(2);
  }
}
