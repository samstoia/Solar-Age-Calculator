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
      expect(lifespan).toEqual(58);
    });

    it('should use the lifeSpan function to determine how much the user has outlived their expectancy', function() {
      let userDate = new Date("1993-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan;
      if(userAge > lifeExpectancy) {
        lifespan = `You have lived ${userAge - lifeExpectancy} years beyond your expectancy! Congratulations!`;
      } else {
        lifespan = `You have a life expectancy of ${lifeExpectancy - userAge} years.`;
      }
      expect(lifespan).toEqual(`You have a life expectancy of 58 years.`);
    });

    it('should use the lifeSpan function to determine how much the user has outlived their expectancy', function() {
      let userDate = new Date("1923-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan;
      if(userAge > lifeExpectancy) {
        lifespan = `You have lived ${userAge - lifeExpectancy} years beyond your expectancy! Congratulations!`;
      } else {
        lifespan = `You have a life expectancy of ${lifeExpectancy - userAge} years.`;
      }
      expect(lifespan).toEqual('You have lived 12 years beyond your expectancy! Congratulations!');
    });

    it('should create a function to convert a user lifespan to a celestial body years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan;
      if(userAge > lifeExpectancy) {
        lifespan = `You have lived ${(userAge - lifeExpectancy) * 1.88} Martian years beyond your expectancy! Congratulations!`;
      } else {
        lifespan = `You have a life expectancy of ${(lifeExpectancy - userAge) * 1.88} Martian years.`;
      }
      expect(lifespan).toEqual('You have a life expectancy of 90.24 Martian years.');
    });

    it('should use mercuryLifespan to convert a user lifespan to a Mercury years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let mercuryLifespan = calculator.mercuryLifespan(userAge);
      expect(mercuryLifespan).toEqual('11.52');
    });

    it('should use venusLifespan to convert a user lifespan to a Venus years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let venusLifespan = calculator.venusLifespan(userAge);
      expect(venusLifespan).toEqual('29.76');
    });

    it('should use marsLifespan to convert a user lifespan to a Mars years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let marsLifespan = calculator.marsLifespan(userAge);
      expect(marsLifespan).toEqual('90.24');
    });

    it('should use ceresLifespan to convert a user lifespan to a Ceres years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let ceresLifespan = calculator.ceresLifespan(userAge);
      expect(ceresLifespan).toEqual('220.80');
    });

    it('should use jupiterLifespan to convert a user lifespan to a Jupiter years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let jupiterLifespan = calculator.jupiterLifespan(userAge);
      expect(jupiterLifespan).toEqual('569.28');
    });

    it('should use saturnLifespan to convert a user lifespan to a Saturn years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let saturnLifespan = calculator.saturnLifespan(userAge);
      expect(saturnLifespan).toEqual('1416.0');
    });

    it('should use caelumLifespan to convert a user lifespan to a Caelum years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let caelumLifespan = calculator.caelumLifespan(userAge);
      expect(caelumLifespan).toEqual('4046.40');
    });

    it('should use neptuneLifespan to convert a user lifespan to a Neptune years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let neptuneLifespan = calculator.neptuneLifespan(userAge);
      expect(neptuneLifespan).toEqual('7920');
    });

    it('should use plutoLifespan to convert a user lifespan to a Pluto years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let plutoLifespan = calculator.plutoLifespan(userAge);
      expect(plutoLifespan).toEqual('11889.6');
    });

    it('should use erisLifespan to convert a user lifespan to a Eris years', function() {
      let userDate = new Date("1983-11-04");
      let userAge = new AgeCalculator(userDate).checkAge();
      let calculator = new LifeCalculator(72, 200, 1, 1.1, 0.9, 1, 1, 1.05, 1);
      let lifeExpectancy = calculator.lifeExpectancy();
      let lifespan = calculator.lifespan(userAge);
      let erisLifespan = calculator.erisLifespan(userAge);
      expect(erisLifespan).toEqual('26784');
    });

});
