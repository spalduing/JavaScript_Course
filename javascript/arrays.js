//// Arrays ////

let arr = [1, 2, 3, 4];

console.log(arr[0]);

let arr1 = new Array(4);

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;

console.log(arr1);

let arr2 = new Array("Miguel", "Angel", 3, 4);

console.log(arr2);

//// concatenate ////
console.log("\nConcatenate");

let arr3 = arr.concat(arr1);
console.log(arr3);

//// Pop and push ////
console.log("\nPoping");

arr3.pop();
console.log(arr3);

arr3.pop();
console.log(arr3);

console.log("\nPushing");

arr3.push(100);
console.log(arr3);

//// reverse ////
console.log("\nReversing");

arr3.reverse();
console.log(arr3);

//// string ////
console.log("\nString");

let str = arr3.toString();
console.log(str);
