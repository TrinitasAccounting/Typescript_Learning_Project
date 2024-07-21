
// Need to import this to use the assert.equal() function 
import { strict as assert } from "assert";

// const age = 25;

// const canPurchase = age >= 18;

// assert.equal(canPurchase, false)



// Compun boolean expression
// const rating = 8;
// const favoriteMovie = false;

// const suggestMovie = rating > 8 || favoriteMovie;

// console.log(suggestMovie);


// Math Operators

// nan  is returned when something is not a number

// const num = 1;
// this will be negative of whatever num is. Works similar to the ! for booleans
// const num2 = -num;


// Type Alias_______________________
// type PersonName = string;

// function printName(name: string) {
//     console.log(`This is the person's name: ${name}`)
// }

// printName('4')


// Object Types___________________
// type Coordinate = {
//     x: number;
//     y: number;
// }

// const origin: Coordinate = {
//     x: 0,
//     y: 0
// }

// const xPosition = origin.x;
// const yPosition = origin.y;

// let coord: Coordinate = { x: 1, y: 1 }
// coord.x = 20;
// coord.y = 10;




// Arrays_____________________________________________________________
// This is how we define an array
// const numbers: number[] = [1, 2, 3];

// // Defining an array of strings
// const letters: string[] = ['a', 'b', 'c']

// assert.deepEqual(letters, ['a', 'b', 'c'])


// const nums: number[] = [];
// nums.push(10);
// nums.push(20);
// nums.push(30);


// // Here we are saying that this type will be an array (signified by the [] at the end), and each index will be an array of two value type numbers (shown by [number, number])
// const multi: [number, number][] = [
//     [1, 2],
//     [3, 4],
//     [0, 8]
// ]




// Arrays and Objects_________________________________________________

// type Link = {
//     title: string;
//     url: string;
// }

// const microsoft = {
//     title: 'microsoft',
//     url: 'microsoft.com'
// }

// const typescript = {
//     title: 'Typescript',
//     url: 'typescript.org'
// }

// const linksArray = [microsoft, typescript];

// console.log(linksArray[1].url)



// Tuples__________________________________________________
// They cannot have more or less data that the parent tuple (class from what I can tell) has. So in this case only Title and PublishYear
// type Title = string;
// type PublishYear = number;

// type Book = [Title, PublishYear]


// const sampleBook: Book = ['sampleTitle', 1980];




// For Loops_________________________________________________

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }

//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }



// Function Example
// obviously the first types shown are the types of your inputs. (....): number  => is the type of the answer expected
// function add(num1: number, num2: number): number {
//     return num1 + num2
// }

// console.log(add(2, 2));







// Modules in Typescript

export const pi = Math.PI;

export const myNum = 777;

// then run the following in the new file you want to import into
// import {pi, myNum} from './Typescript_1';


