export default class AgeCalculator {
  constructor(userDate) {
    this.day = userDate.getDate();
    this.month = userDate.getMonth();
    this.year = userDate.getFullYear();
    // this.birthdate = userDate.getTime();
  }

  checkAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age;
  }

  mercuryAge() {
    let age = this.checkAge();
    return age * 0.24;
  }

  venusAge() {
    let age = this.checkAge();
    return age * 0.62;
  }

  marsAge() {
    let age = this.checkAge();
    return age * 1.88;
  }

  ceresAge() {
    let age = this.checkAge();
    return age * 4.6;
  }

  jupiterAge() {
    let age = this.checkAge();
    return age * 11.86;
  }

  saturnAge() {
    let age = this.checkAge();
    return age * 29.5;
  }

  caelumAge() {
    let age = this.checkAge();
    return age * 84.3;
  }

  neptuneAge() {
    let age = this.checkAge();
    return age * 165;
  }

  plutoAge() {
    let age = this.checkAge();
    return age * 247.7;
  }

  erisAge() {
    let age = this.checkAge();
    return age * 558;
  }

}
