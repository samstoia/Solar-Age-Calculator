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
      let bmi = new LifeCalculator(height, weight).checkBMI();
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

    it('should determine users life expectancy to be 81 through bmi and lifestyles', function() {
      let userDate = new Date("1993-11-04");
      let calculator = new AgeCalculator(userDate);
      let age = calculator.checkAge();
      let bmi = new LifeCalculator(72, 200).checkBMI();

      let health = 1.1 // rarely gets sick
      let exercise = 1.1; // Moderate activity level
      let alcohol = 0.9; //  5+ drinks weekly
      let smoking = 1 // non-smoker
      let drugUse = 1 // not an illicit drug user
      let petOwner = 1.05 // owns a pet
      let relationship = 1 // is not in a long-term relationship
      let lifestyle = (health * exercise * alcohol * smoking * drugUse * petOwner * relationship);

      let lifeExpectancy = Math.floor((bmi * lifestyle) + 50);
      expect(lifeExpectancy).toEqual(81);
    });

    it('should use the lifeExpectancy function to determine how long the user may live', function() {
      let userDate = new Date("1993-11-04");
      let calculator = new AgeCalculator(userDate);
      let age = calculator.checkAge();
      expect(1).toEqual(1);
    });

    // life expectancy remaining on earth

    // life expectancy remaining on celestial body

    // foreach celestial body (x10), life expectancy remaining

    // user age exceeds life expectancy, by how much

});
