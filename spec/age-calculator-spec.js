import AgeCalculator from './../src/js/age-calculator.js';

describe('AgeCalculator', function() {

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
      let calculator = new AgeCalculator(userDate);
      let result = calculator.checkAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000));
    });

    it('should create a function to convert the user age to a celestial year system', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let jupiterAge = userAge * 11.86;
      expect(jupiterAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 11.86);
    });

    it('should create a function to convert the user age to a Mercury year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let mercuryAge = userAge * 0.24;
      expect(mercuryAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 0.24);
    });

    it('should use the mercuryAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).mercuryAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 0.24)
    });

    it('should create a function to convert the user age to a Venus year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let mercuryAge = userAge * 0.62;
      expect(mercuryAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 0.62);
    });

    it('should use the venusAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).venusAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 0.62)
    });

    it('should create a function to convert the user age to a Mars year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let marsAge = userAge * 1.88;
      expect(marsAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 1.88);
    });

    it('should use the marsAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).marsAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 1.88)
    });

    it('should create a function to convert the user age to a Ceres year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let ceresAge = userAge * 4.6;
      expect(ceresAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 4.6);
    });

    it('should use the ceresAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).ceresAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 4.6)
    });

    it('should create a function to convert the user age to a Jupiter year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let jupiterAge = userAge * 11.86;
      expect(jupiterAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 11.86);
    });

    it('should use the jupiterAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).jupiterAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 11.86)
    });

    it('should create a function to convert the user age to a Saturn year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let saturnAge = userAge * 29.5;
      expect(saturnAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 29.5);
    });

    it('should use the saturnAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).saturnAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 29.5)
    });

    it('should create a function to convert the user age to a Caelum year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let caelumAge = userAge * 84.3;
      expect(caelumAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 84.3);
    });

    it('should use the caelumAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).caelumAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 84.3)
    });

    it('should create a function to convert the user age to a Neptune year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let neptuneAge = userAge * 165;
      expect(neptuneAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 165);
    });

    it('should use the neptuneAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).neptuneAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 165)
    });

    it('should create a function to convert the user age to a Pluto year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let plutoAge = userAge * 247.7;
      expect(plutoAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 247.7);
    });

    it('should use the plutoAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).plutoAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 247.7)
    });

    it('should create a function to convert the user age to an Eris year', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let erisAge = userAge * 558;
      expect(erisAge).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 558);
    });

    it('should use the erisAge function correctly', function() {
      let userDate = new Date("1993-11-04");
      let result = new AgeCalculator(userDate).erisAge();
      expect(result).toEqual(Math.floor((Date.now() - userDate) / 31557600000) * 558)
    });

    // user age, when is next birthday on earth

    // user age, when is next birthday on celestial body

    // foreach celestial body(x10), user age, when is next birthday

    // how old Keith Richards will be in dog years on jupiter in 2073

    // how many mayfly lives has user outlived

});
