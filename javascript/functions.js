// functions - return, parameters, default parameters, rest parameters

function  hello(){
    //function body
    console.log("Hello world!");
}

hello();

// returning functions

function returnMe(){
    console.log("returning... ")
    return 5;
}

var x = returnMe()
console.log(x)

// parameterized functions

function add(x, y){
    return x + y;
}

console.log("Sum equals: " + add(5, 10))

// parameterized functions with default parameters
function add(x, y=10){
    return x + y;
}

console.log("Sum equals: " + add(5))

// parameterized functions with rest parameters
function lengthOfMe(...params){
    console.log(params)
    return params.length;
}

console.log("Sum equals: " + lengthOfMe(5, 6, 7, 8))

//=======================================================================================
// functions - constructor, recursion, anonymous, arrow, generator functions


// function constructor

let func = new Function("x", "y", "return x*y;");

console.log("Function constructor var func: " 
+ func(5, 6))


// recursion

function factorial(num){
    if(num <= 0 ){
        return 1;
    }else{
       return num * factorial(num-1)
    }
}

console.log("The factorial is: " + factorial(5))

// anonymous fucntion
var x = function() {
    console.log("I'm an anonymous function");
};

x();

// lambda functions: parameters, fat arrow notation, statements

var food = (x, y, z) => {
    return x + y + z;
}

console.log("This is a lambda function: " +
food(10, 20, 30 ))

// lambda function: second variation

var food = (x, y, z) => x + y + z;

console.log("This is the second variation of a lambda function: " +
food(10, 20, 30 ))

// lambda function: third variation

var food = x => x + 100;

console.log("This is the third variation of a lambda function: " +
food(10 ))

// generator functions

function* query(){
    const name = yield "What's your name?"
    const sport = yield "What's your favourite sport?"
    return `${name}'s fav sport is:  ${sport}`;
}

const instance = query();

console.log(instance.next());
console.log(instance.next("Miguel"));
console.log(instance.next("Basketball"));

//=======================================================================================
// Ways of use generator functions/
console.log("\n\n")

console.log("Generator fucntion: Generates infinite natural numbers")
function* infiniteNaturalNumbers(){
    let number = 1
    while(true){
        yield number++
    }
}

var naturalNumber = infiniteNaturalNumbers();

console.log(naturalNumber.next().value);
console.log(naturalNumber.next().value);
console.log(naturalNumber.next().value);
console.log(naturalNumber.next().value);


console.log("\nGenerator fucntion: A generator function within a generator function")

function* inception(name){
    yield `Hi ${name}, hello from inception `
}
function* start(name){
    yield `Hi ${name} we're starting the inception`
    yield* inception(name)
    yield "bye!"
}

let gen = start("Miguel");

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log("\nGenerator fucntion: Passin argument into a generator function")

function* myGenerator(){
    console.log("Hey, ", yield)
    console.log("Are you ", yield)
}

var generator = myGenerator();

generator.next()
generator.next('Miguel')
generator.next('Diaz')