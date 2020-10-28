//Decision making statements

var x = 2;

if (x < 0) {
    console.log("No! it is negative");
}else if (x > 0) {
    console.log("Yes! it is positive");
}else{
    console.log("It is neither positive or negative");
}

grade = "A"

switch(grade){
    case "A": {
        console.log("Excellent");
        break;
    }
    
    case "B": {
        console.log("Good");
        break;
    }

    default:
    console.log("Invalid grade");
    break;
}