function randomInBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(randomInBetween(1, 10));

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);


    return "This is a product";

}

const prodName = "Javascript Course";
const prodPrice = 12.99;

const productOutput = productDescription`This product (${prodName} is ${prodPrice})`;
console.log(productOutput);