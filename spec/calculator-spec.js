import Calculator from './../src/js/calculator.js';

describe('Calculator', function() {

    it('should create a function to calculate user age', function() {
      let today = new Date("2019-03-22");
      let userDate = new Date("1993-11-04");
      let age = today.getFullYear() - userDate.getFullYear();
      let month = today.getMonth() - userDate.getMonth();
      if((month < 0) || (month === 0 && today.getDate() < userDate.getDate())) {
        age--;
      }
      expect(age).toEqual(25);
    });

    it('should use the checkAge function to calculate user age', function() {
      let userDate = new Date("1993-11-04");
      let calculator = new Calculator(userDate);
      let result = calculator.checkAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000));
    });

    it('should create a function to convert the user age to a celestial year system', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new Calculator(userDate).checkAge();
      let jupiterAge = userAge * 11.86;
      expect(jupiterAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 11.86);
    });

    it('should use the mercuryAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let calculator = new Calculator(userDate);
      let userAge = calculator.checkAge();
      let result = calculator.mercuryAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 0.24)
    });

});
