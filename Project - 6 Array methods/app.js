// five ways of creating arrays

/* const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers2 = new Array(5,2); // []
console.log(moreNumbers2);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers); 

const moreNumbers = Array.from([1, 2, 3]);
console.log(moreNumbers);

const moreNumbers1 = Array.from("Hai!");
console.log(moreNumbers1); */

// adding and removing data in an array

/* const hobbies = ['Sports','Cooking'];
hobbies.push('Coding');
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

hobbies.unshift('Reading');
console.log(hobbies);

hobbies.shift();
console.log(hobbies); */

//splice method

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.splice(1, 1, 'Hai','Hello');
numbers.splice(0, 1);
console.log(numbers); */

//slice method

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = numbers.slice(0,3);
console.log(result);

const r = numbers.slice(3);
console.log(r); */

//concat method

/* const numbers = [1, 2, 3, 4, 5];
const num = numbers.push([6, 7, 8, 9, 10]);  // adds as a nested array
const num1 = numbers.concat([6, 7, 8, 9, 10]); // adds as elements
console.log(num1); */

//indexOf method
/* const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(5)); 
console.log(numbers.indexOf(20));  */

//find and findIndex()

/* const employees = [{name:"Kanishka"}, {name:"Palani"}];
const find = employees.find((employee, index, names)=>{
    return employee.name === "Kanishka";
});

const find1 = employees.findIndex((employee, index, names)=>{
    return employee.name === "Palani";
});
console.log(find);
console.log(find1);
 */


//includes()

/* const numbers = [1, 2, 3, 4, 5];
const num = numbers.includes(6);
console.log(num); */

//forEach()

/*  const numbers = [1, 2, 3, 4, 5];
let operand = 2;
const multipliedNumbers = [];
numbers.forEach((num) => {
    multipliedNumbers.push(num*operand);
});
console.log(multipliedNumbers); 
console.log(numbers); */

// map()

/* const numbers = [1, 2, 3, 4, 5];
const mappedArray = numbers.map((num) => {
    return num * 2;
});

console.log(mappedArray); */

//sort()

/* const numbers = [10.99, 5.99, 3.99, 6.99];
const sorted = numbers.sort((a,b)=>{
    if( a>b){
        return 1;
    } else if (a === b){
        return 0;
    } else if (a<b){
        return -1;
    }
  
})
console.log(sorted);
console.log(sorted.reverse()); */

//filter()

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = numbers.filter ((num)=>{
    return (num%2 == 0)
});

console.log(filteredArray); */

//reduce()

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reducedArray = numbers.reduce((prevValue, curValue) => {
    return prevValue + curValue;
}, 0);

console.log(reducedArray); */

//split()

/* const data = "Kanishka, 24, Software Developer";
const transformedData = data.split(',');
console.log(transformedData); */

//join()

/* const fragments = ['Kanishka', 'Palani'];
const name = fragments.join(' ');
console.log(name); */

//spread operator

/* const names = ["Kanishka", "Palani", "Priyanka"];
const spreadedNames = [...names];
console.log(spreadedNames); */

//array destructuring

/* const name = ["Kanishka", "Priyanka"];
const [firstName, lastName] = name;
console.log(firstName);
console.log(lastName); */

//working with sets

const ids = new Set([1, 2, 3]);
console.log(ids.has(1));
for(const entry of ids.entries()){
    console.log(entry)
}
ids.delete(1);
console.log(ids);