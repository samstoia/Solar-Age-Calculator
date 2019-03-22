import AgeCalculator from './../src/js/age-calculator.js';
import LifeCalculator from './../src/js/life-calculator.js';

describe('LifeCalculator', function() {

    it('should create a function to determine users bmi', function() {
      let height = 72; // 6ft
      let weight = 200; // 200lbs
      let bmi = ((weight / (height * height)) * 703).toFixed(2);
      expect(bmi).toEqual('27.12');
    });

    it('should use the checkBMI function to determine users bmi', function() {
      let height = 72; // 6ft
      let weight = 200; // 200lbs
      let bmi = new LifeCalculator(height, weight, 0,0,0,0,0,0,0).checkBMI();
      expect(bmi).toEqual('27.12');
    });

    it('should create a function to determine a lifestyle modifier for user', function() {
      let health = 1.1 // rarely gets sick
      let exercise = 1.1; // Moderate activity level
      let alcohol = 0.9; //  5+ drinks weekly
      let smoking = 1 // non-smoker
      let drugUse = 1 // not an illicit drug user
      let petOwner = 1.05 // owns a pet
      let relationship = 1 // is not in a long-term relationship
      let lifestyle = (health * exercise * alcohol * smoking * drugUse * petOwner * relationship).toFixed(2);
      expect(lifestyle).toEqual('1.14');
    });

    it('should use the lifestyleMod function to determine a lifestyle modifier for user', function() {
      let health = 1.1 // rarely gets sick
      let exercise = 1.1; // Moderate activity level
      let alcohol = 0.9; //  5+ drinks weekly
      let smoking = 1 // non-smoker
      let drugUse = 1 // not an illicit drug user
      let petOwner = 1.05 // owns a pet
      let relationship = 1 // is not in a long-term relationship
      let lifestyle = new LifeCalculator(0,0, health, exercise, alcohol, smoking, drugUse, petOwner, relationship).lifestyleMod();
      expect(lifestyle).toEqual('1.14');
    });

    it('should determine users life expectancy to be 81 through bmi and lifestyle', function() {
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let bmi = calculator.checkBMI();
      let lifestyle = calculator.lifestyleMod();
      let lifeExpectancy = ((lifestyle / bmi) * 1000 + 45).toFixed(0);
      expect(lifeExpectancy).toEqual('83');
    });

    it('should use the lifeExpectancy function to determine how long the user may live', function() {
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      expect(lifeExpectancy).toEqual('83');
    });

    it('should create a function to determine how much longer the user may live based on life expectancy', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = lifeExpectancy - userAge;
      expect(lifespan).toEqual(58);
    });

    it('should use the lifeSpan function to determine how much longer the user may live', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifespan = calculator.lifespan(userAge);
      expect(lifespan).toEqual('You have a life expectancy of 58 years.');
    });

    it('should use a mock-up of lifeSpan function to determine how much the user has outlived their expectancy', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan;
      if(userAge > lifeExpectancy) {
        lifespan = `You have lived ${userAge - lifeExpectancy} years beyond your expectancy! Congratulations!`;
      } else {
        lifespan = `You have a life expectancy of ${lifeExpectancy - userAge} years.`
      }
      expect(lifespan).toEqual(`You have a life expectancy of ${lifeExpectancy - userAge} years.`);
    });

    it('should use a mock-up of lifeSpan function to determine how much the user has outlived their expectancy', function() {
      let userDate = new Date("1923-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan;
      if(userAge > lifeExpectancy) {
        lifespan = 'You have lived 12 years beyond your expectancy! Congratulations!';
      } else {
        lifespan = lifeExpectancy - userAge;
      }
      expect(lifespan).toEqual('You have lived 12 years beyond your expectancy! Congratulations!');
    });

    it('should use the lifeSpan function to determine how much the user has outlived their expectancy', function() {
      let userDate = new Date("1923-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifespan = calculator.lifespan(userAge);
      expect(lifespan).toEqual('You have lived 12 years beyond your expectancy! Congratulations!');
    });

    // life expectancy remaining on celestial body

    // foreach celestial body (x10), life expectancy remaining

    // user age exceeds life expectancy, by how much

});
