//// CLASSSES ////
class Desert {
  constructor(calories = 100) {
    console.log("This dessert has ", calories.toString(), " calories");
    this.calories = calories;
  }
}

const vanilla = new Desert(123);

console.log(vanilla.calories);

const strawBerries = new Desert(234);

console.log(strawBerries.calories);

