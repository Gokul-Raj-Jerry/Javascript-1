// var, let, const scope

/* var name = "Kanishka";
if(name === 'Kanishka'){
let hobbies = ['Sports', 'Cooking'];
console.log(hobbies);
}
function greet(){
    var age = 30;
    var name = "Palani";
    console.log(name, age, hobbies);
}
console.log(name, hobbies);
greet(); */
/* console.log(name); */

//hoisting

/*  'use strict'; 
const name = "Kanishka";
var undefined = 5;
console.log(name); */

//how JS code is executed

function getName(){
    return prompt('Your name:', '');
}

function greet(){
const userName = getName();
console.log('Hello '+ userName);
}

greet();

