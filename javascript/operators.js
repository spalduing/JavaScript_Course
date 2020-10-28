// Operators

/*
    Aritmethic operators
    + - * / % ++ --
*/
console.log("Aritmethic operators: " + 12 % 5);
/*
    Relational operators
    > < >= <= == !=
*/
console.log("Relational operators: " + (10 != 2) );
/*
    Logical operators
    && || !
*/
console.log("Logical operators: " + !(5 > 6 && 7 < 10));
console.log("Logical operators: " + (5 > 6) || (7 < 10));
/*
    Bitwise operators
    & | ^ ~ << >> >>>
*/
console.log("Bitwise operators:" + ((4&1) == 0))
/*
    Assignment operators
    = += -=  *= /=
 */
var a = 0;
a += 5;

console.log("Assigment operators: " + a);

/*
    Other operators
    - + ? typeof
*/

var x = 5;

y = -x;

console.log("Other operators: " + y);

var result =  x  < 10 ? 20 : 30;

console.log("Other operators: " + result);