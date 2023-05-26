//pure function

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1,5));

//an impure function which changes the variable outside the function

let previousResult = 0;
function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(5, 5));
console.log(previousResult);

//an impure function which changes the array outside the function

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
    h.push("New Hobby");
    console.log(h);
}
printHobbies(hobbies);

//factory function

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

//closure functions


let userName = "Kanishka";

function greetUser() {
    let name = "Anna";
    console.log("Hai" + name); //name
}

let name = "Kanna";

userName="Palani";

greetUser();

//recursion

 function powerOf(x, n){
    let result = 1;
    for(let i=0;i<n;i++){
        result *= x;
    }
    return result;

}

console.log(powerOf(2,3));  //2*2*2

function powerOf(x, n){
/*     if(n===1) {
        return x;
    } */
    return n === 1 ? x: x * powerOf(x,n-1)

}

console.log(powerOf(2,3));