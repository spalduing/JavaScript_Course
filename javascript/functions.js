// functions

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