//// CLASSSES ////
class Desert {
  constructor(calories = 100) {
    console.log("This dessert has ", calories.toString(), " calories");
    this.ingredients = [];
    this.calories = calories;
  }
  //setter function
  addIngredients(ingredient) {
    this.ingredients.push(ingredient);
  }
  //getter function
  getIngredients() {
    console.log(this.ingredients);
  }
}

const vanilla = new Desert(123);

console.log(vanilla.calories);

const strawBerries = new Desert(234);

console.log(strawBerries.calories);

vanilla.addIngredients("Vanilla cloves");
vanilla.addIngredients("milk");
vanilla.addIngredients("suggar");

vanilla.getIngredients();

strawBerries.addIngredients("strawberries");
strawBerries.addIngredients("vanilla cloves");
strawBerries.addIngredients("milk");
strawBerries.addIngredients("suggar");

strawBerries.getIngredients();

class IceCream extends Desert {
  constructor(flavor, calories, toppings = [], ingredients = []) {
    super(calories, ingredients);
    this.flavor = flavor;
    this.toppings = toppings;
  }

  getIcecream() {
    console.log(`This is a ${this.flavor} icecream, it haves ${this.calories} calories.
    It goes with some ${this.toppings[0]}, ${this.toppings[1]} and some 
      ${this.toppings[3]}. Bon Appetite! `);
  }
}

const vanillaBooster = new IceCream(
  "Blackberry",
  344,
  ["Milkmaid","Honey", "grated chocolate"],
  ["milk", "vanilla flavour"]
);


vanillaBooster.getIcecream();
