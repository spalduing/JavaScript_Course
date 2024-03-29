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

  static shopStatus = false;

  static getShopStatus = function () {
    console.log(this.shopStatus);
  }
  static setShopStatus = function (status = true) {
    this.shopStatus = status;
  }

  getIcecream() {
    console.log(`This is a ${this.flavor} icecream, it has ${this.calories} calories.
    It goes with some ${this.toppings[0]}, ${this.toppings[1]} and some
      ${this.toppings[3]}. Bon Appetite! `);
  }
}

const vanillaBooster = new IceCream(
  "Blackberry",
  344,
  ["Milkmaid", "Honey", "grated chocolate"],
  ["milk", "vanilla flavour"]
);

vanillaBooster.getIcecream();

IceCream.getShopStatus();
IceCream.setShopStatus();
IceCream.getShopStatus();

// console.log("The vanillaBooster variable is a(n): ",typeof vanillaBooster);
// console.log("The vanillaBooster variable is a(n): ",typeof IceCream);

// function IceCream(flavor, calories) {
//   this.flavor = flavor;
//   this.calories = calories;
// }

// IceCream.prototype.getIcecream = function () {
//   console.log(`This is a ${this.flavor} icecream, it has ${this.calories} calories.
//                  Bon Appetite! `);
// };

// const vanillaBooster = new IceCream("Vanilla", 275);

// vanillaBooster.getIcecream();
