export default class Calculator {
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
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 0.24;
  }

  venusAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 0.62;
  }

  marsAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 1.88;
  }

  ceresAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 4.6;
  }

  jupiterAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 11.86;
  }

  saturnAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 29.5;
  }

  caelumAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 84.3;
  }

  neptuneAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 165;
  }

  plutoAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 247.7;
  }

  erisAge() {
    let today = new Date();
    let age = today.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
      age--;
    }
    return age * 558;
  }

}
