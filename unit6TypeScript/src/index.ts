//tutorial: https://www.youtube.com/watch?v=d56mG7DezG

let age: number = 20;
if (age < 50)
    age += 10;
console.log(age);

//don't have to explicitly use a type annotation if the variable is set equal to a value for it to identify the variable type
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

//if variable type is not specified it asssumes any which defeats the purpose of typescript
let level;
level = 1;
level = 'a';

function render(document: any) {
    console.log(document);
}

let numbers = [1, 2, 3];
//setting an empty array need a type annotation otherwise it is set as any
let numbersArray: number[] = [];

//offers code completion for all the methods and properties offered to numbers since the type is specified
numbersArray.forEach( n => n.toExponential);

//Tuples- typically used when working with 2 values
//is a fixed length array
//anything longer than 2 values gets confusing, use for something like key value pairs
let user: [number, string] = [1, 'John'];


// const small = 1;
// const medium = 2;
// const large = 3;

//enum- represent a list of related constants
//  by default the first member is assigned the value of 0 
//  if wanting other values they can be explicitly set
//      setting number values only requires the first value to be set
//      setting string values requires each one to be set
//      enum size {small = 's', medium = 'm', large = 'l'};
enum size {small = 1, medium, large};
let mySize: size = size.medium;
console.log("my size: " + mySize);

//if the enum is defined as a constant the code is more consise
const enum iceCreamFlavor {vanilla = 1, chocolate, strawberry};
let favoriteFlavor: iceCreamFlavor = iceCreamFlavor.vanilla;
console.log("favorite flavor: " + favoriteFlavor);

//as best practice define a return type of the function which is done after the parameter paranthesis
//  use void if not returning a value
//  can make parameters optional by including '?' after parameter- taxYear?
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

//calculateTax(10_000, 2023);
//can be called with or without taxYear
calculateTax(10_000);

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void

}
let employee: Employee = {
    id: 1, 
    name: 'John',
    retire: (date: Date) => {
        console.log(date);
    }
};


