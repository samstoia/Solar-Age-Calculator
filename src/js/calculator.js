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

}
