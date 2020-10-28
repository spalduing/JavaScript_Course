//Loop Statements

                // Definite looping//

//for loop
var factor = 7;
var answer = 1;
console.log("\nfor loop // Definite looping\n================")

for (let i = 1; i <= factor; i++){
    answer *= i;
}
console.log("The factorial is : " + answer);
console.log(" ")

// for in
var object = {'name': 'shiv', 'age': '20'}
console.log("\nfor in loop // Definite looping\n================")

for (let prop in object){
    console.log(prop + ":\t" + object[prop])
}

// for of
console.log("\nfor of loop // Definite looping\n================")

for(let item of [10, 12, 14]){
    console.log(item)
}


                // Indefinite loopings

//while loop
var factor = 7
var answer = 1
var i = 1
console.log("\nWhile loop // Indefinite looping\n================")
while(i <= factor){
    answer *= i
    i++
}

console.log("The factorial is: " + answer)

// do while loop
var factor = 7
var answer = 1
var i = 1
console.log("\nDo while loop // Indefinite looping\n================")

do{
    answer *= i
    i++
}while(i <= factor)

console.log("The factorial is: " + answer)