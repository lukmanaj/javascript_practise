/* Problem 1


We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will /not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.




Solution
*/


function sumAll(arr) {
 let max = Math.max(arr[0],arr[1]);
 let min = Math.min(arr[0],arr[1]);
 let sumBetween = 0;
 for (let i=min; i<=max; i++){
    sumBetween+=i
 }
 return sumBetween;
}


console.log(sumAll([1, 4]));




/* Problem 2
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.


Solution      
*/ 

function diffArray(arr1, arr2) {
 return arr1
   .concat(arr2)
   .filter(item => !arr1.includes(item) || !arr2.includes(item));
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/*Problem 3
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object. 


Solution 
*/

function destroyer(arr, ...valsToRemove) {
 return arr.filter(elem => !valsToRemove.includes(elem));
}








/*Problem 4
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.






Solution
*/
function whatIsInAName(collection, source) {
const sourceKeys = Object.keys(source);


 return collection
   .filter(obj => sourceKeys
                    .every(key => obj.hasOwnProperty(key) &&
                           obj[key] === source[key]));




}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/*Problem 5


Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


Solution
*/
function spinalCase(str) {


 const regex = /\s+|_+/g;


 // Replace low-upper case to low-space-uppercase
 str = str.replace(/([a-z])([A-Z])/g, "$1 $2");


 // Replace space and underscore with -
 return str.replace(regex, "-").toLowerCase();
}






console.log(spinalCase('This Is Spinal Tap'));




/*Problem 6
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
________________


Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


Solution
*/

function translatePigLatin(str) {
let consonantRegex = /^[^aeiou]+/;
 let myConsonants = str.match(consonantRegex);
 return myConsonants !== null
   ? str
       .replace(consonantRegex, "")
       .concat(myConsonants)
       .concat("ay")
   : str.concat("way");


}


console.log(translatePigLatin("consonant"));


/*Problem 7
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


Solution
*/
function myReplace(str, before, after) {
// Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
 if (/^[A-Z]/.test(before)) {
   after = after[0].toUpperCase() + after.substring(1)
 } else {
   after = after[0].toLowerCase() + after.substring(1)
 }


 // return string with argument "before" replaced by argument "after" (with correct case)
 return str.replace(before, after);
}




/*Problem 8
DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


Solution
*/
function pairElement(str) {
  let matchWithBasePair = function(char, pairedArray) {
   switch (char) {
     case "A":
       pairedArray.push(["A", "T"]);
       break;
     case "T":
       pairedArray.push(["T", "A"]);
       break;
     case "C":
       pairedArray.push(["C", "G"]);
       break;
     case "G":
       pairedArray.push(["G", "C"]);
       break;
   }
 };


 // Find pair for every character in the string
 const paired = [];
 for (let i = 0; i < str.length; i++) {
   matchWithBasePair(str[i], paired);
 }


 return paired;
}


console.log(pairElement("GCG"));


/*Problem 9
Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.


Solution
*/
function fearNotLetter(str) {
 for (let i = 0; i < str.length; i++) {
   /* code of current character */
   const charCode = str.charCodeAt(i);


   /* if code of current character is not equal to first character + no of iteration
       then a letter was skipped */
   if (charCode !== str.charCodeAt(0) + i) {
     /* if current character skipped past a character find previous character and return */
     return String.fromCharCode(charCode - 1);
   }
 }
 return undefined;


}


fearNotLetter("abce");


/*Problem 10
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.


Solution
*/
function uniteUnique(arr) {
// Creates an empty array to store our final result.
 const finalArray = [];


 // Loop through the arguments object to truly make the program work with two or more arrays
 // instead of 3.
 for (let i = 0; i < arguments.length; i++) {
   const arrayArguments = arguments[i];


   // Loops through the array at hand
   for (let j = 0; j < arrayArguments.length; j++) {
     let indexValue = arrayArguments[j];


     // Checks if the value is already on the final array.
     if (finalArray.indexOf(indexValue) < 0) {
       finalArray.push(indexValue);
     }
   }
 }


 return finalArray;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/*Problem 11
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


Solution
*/
function convertHTML(str) {
 // Split by character to avoid problems.


 let temp = str.split("");


 // Since we are only checking for a few HTML elements, use a switch


 for (let i = 0; i < temp.length; i++) {
   switch (temp[i]) {
     case "<":
       temp[i] = "&lt;";
       break;
     case "&":
       temp[i] = "&amp;";
       break;
     case ">":
       temp[i] = "&gt;";
       break;
     case '"':
       temp[i] = "&quot;";
       break;
     case "'":
       temp[i] = "&apos;";
       break;
   }
 }


 temp = temp.join("");
 return temp;
}


convertHTML("Dolce & Gabbana");


/*Problem 12
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.




Solution
*/
function sumFibs(num) {
 let prevNumber = 0;
 let currNumber = 1;
 let result = 0;
 while (currNumber <= num) {
   if (currNumber % 2 !== 0) {
     result += currNumber;
   }
   currNumber += prevNumber;
   prevNumber = currNumber - prevNumber;
 }


 return result;
}


sumFibs(4);




/*Problem 13
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


Solution
*/
function sumPrimes(num) {
    // Helper function to check primality
 function isPrime(num) {
   for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i == 0)
       return false;
   }
   return true;
 }


 // Check all numbers for primality
 let sum = 0;
 for (let i = 2; i <= num; i++) {
   if (isPrime(i))
     sum += i;
 }
 return sum;
}


sumPrimes(10);




/*Problem 14
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.




Solution
*/
function smallestCommons(arr) {
// Setup
 const [min, max] = arr.sort((a, b) => a - b);
 const numberDivisors = max - min + 1;
 // Largest possible value for SCM
 let upperBound = 1;


for (let i = min; i <= max; i++) {
   upperBound *= i;
 }
 // Test all multiples of 'max'
 for (let multiple = max; multiple <= upperBound; multiple += max) {
   // Check if every value in range divides 'multiple'
   let divisorCount = 0;
   for (let i = min; i <= max; i++) {
     // Count divisors
     if (multiple % i === 0) {
       divisorCount += 1;
     }
   }
   if (divisorCount === numberDivisors) {
     return multiple;
   }
 }
}




smallestCommons([1,5]);


/*Problem 15
Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.




Solution
*/
function dropElements(arr, func) {
while (arr.length > 0 && !func(arr[0])) {
   arr.shift();
 }
 return arr;




}


console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));


/*Problem 16
Steamroller
Flatten a nested array. You must account for varying levels of nesting.


Solution
*/
function steamrollArray(arr) {
const flattenedArray = [];
 // Loop over array contents
 for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
     // Recursively flatten entries that are arrays
     //  and push into the flattenedArray
     flattenedArray.push(...steamrollArray(arr[i]));
   } else {
     // Copy contents that are not arrays
     flattenedArray.push(arr[i]);
   }
 }
 return flattenedArray;
};




console.log(steamrollArray([1, [2], [3, [[4]]]]));


/*Problem 17
Binary Agents
Return an English translated sentence of the passed binary string.
The binary string will be space separated.




Solution
*/
function binaryAgent(str) {
 const biString = str.split(" ");
 const uniString = [];


 /*using the radix (or base) parameter in parseInt, we can convert the binary
     number to a decimal number while simultaneously converting to a char*/


 for (let i = 0; i < biString.length; i++) {
   uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
 }


 // we then simply join the string
 return uniString.join("");
}






console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


/*Problem 18
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.


Solution
*/

function truthCheck(collection, pre) {


 // Is everyone being true?
 return collection.every(obj => obj[pre]);
}


console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));


/*Problem 19
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);


sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
Problem Explanation
It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:
* It has to add two numbers passed as parameters and return the sum.
* It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
* It has to check if it has one or two arguments passed. More are ignored.
* If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.


Solution
*/
function addTogether() {
const [first, second] = arguments;
 if (typeof(first) !== "number")
   return undefined;
 if (arguments.length === 1)
   return (second) => addTogether(first, second);
 if (typeof(second) !== "number")
   return undefined;
 return first + second;


}


addTogether(2,3);




/*Problem 20
Make a Person
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)


Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
Problem Explanation
When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.
There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.
As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.
Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.




Solution
*/
const Person = function(firstAndLast) {
 let fullName = firstAndLast;


 this.getFirstName = function() {
   return fullName.split(" ")[0];
 };


 this.getLastName = function() {
   return fullName.split(" ")[1];
 };


 this.getFullName = function() {
   return fullName;
 };


 this.setFirstName = function(name) {
   fullName = name + " " + fullName.split(" ")[1];
 };


 this.setLastName = function(name) {
   fullName = fullName.split(" ")[0] + " " + name;
 };


 this.setFullName = function(name) {
   fullName = name;
 };
};


const bob = new Person("Bob Ross");
console.log(bob.getFullName());




/*Problem 21
Map the Debris
According to Kepler's Third Law, the orbital period 
T
T of two point masses orbiting each other in a circular or elliptic orbit is:
T=2π
a
3
μ
−
−
−
√
T=2πa3μ
* a
* a is the orbit's semi-major axis
* μ=GM
* μ=GM is the standard gravitational parameter
* G
* G is the gravitational constant,
* M
* M is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


Solution
*/
function orbitalPeriod(arr) {
 const GM = 398600.4418;
 const earthRadius = 6367.4447;
 const a = 2 * Math.PI;
 const newArr = [];


 const getOrbPeriod = function(obj) {
   const c = Math.pow(earthRadius + obj.avgAlt, 3);
   const b = Math.sqrt(c / GM);
   const orbPeriod = Math.round(a * b);
   // create new object
   return {name: obj.name, orbitalPeriod: orbPeriod};
 };


 for (let elem in arr) {
   newArr.push(getOrbPeriod(arr[elem]));
 }


 return newArr;
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
