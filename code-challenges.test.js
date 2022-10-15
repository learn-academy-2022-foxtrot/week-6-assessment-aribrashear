// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("objectValInterpolation", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(objectValInterpolation(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// GOOD FAIL: ReferenceError: objectValInterpolation is not defined

// b) Create the function that makes the test pass.

/**
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an array of objects and return an array with a sentence about each person with their name capitalized.
Function Name: objectValInterpolation
Function Parameter(s): 1, array
--------- INPUT / OUTPUT:
input 1: array containing multiple objects
output 1: an array using string interpolation to make the object key:value pair into a sentence, with the first letter of the element (value) capitalized
 */

// -------------------------------------------- INITIAL ATTEMPTS
// -----------------------------------
// I did a lot of practicing and testing with this in order to access the nested values. I knew what I needed to do to both access the data and capitalize it, but I started to overthink it once I attempted to create a function that would capitalize the word inside of the original function. After this, I decided to step back for a minute and then take another look at it, which resulted in the code underneath this one. I initially thought you couldn't use logic inside of string interpolation, and I knew that you COULD call a function, but it slipped my mind that HOF's are........ Well. They're functions. 😅 (It also turns out that I was probably wrong about using logic in string interpolation, my research on that has been a bit shaky.)

// const objectValInterpolation = (arr) => {
//   return arr.map((val) => {
//     // This will split the values of name into separate words that I can work with to make the first letter capitalized.
//     console.log((split = val.name.split(" ")));
//     // This will return all the name values with their first letter uppercased, but I need to be able to use them inside of my string interpolation.
//     const upperCaseName = (arr) => {
//       split = val.name.split(" ");
//       split.forEach((v, i, arr) =>
//         console.log((v[i] = arr[i][0].toUpperCase() + split[i].substr(1)))
//       );
//     };
//     return `${upperCaseName(val.name)} is a ${val.occupation}.`;
//   });
// };

// -----------------------------------
// -------------------------------------------- FINAL CODE:
// -----------------------------------

const objectValInterpolation = (arr) => {
  // Mapping through the array to access the objects it holds. object = { name: 'ford prefect', occupation: 'a hitchhiker' }
  return arr.map(
    (object) =>
      // Using a template literal in order to create the string description.
      `${object.name
        // Splitting the name into an array so that we can access the individual words. => ['ford', 'prefect']
        .split(" ")
        // Here, we're slicing the first letter of our split array (['f', 'p']). Then we're using .toUpperCase (['F','P']). Then, we're adding it back to the end of the word using .slice again (['ord', 'refect']). The result will be the name with capital first letters. ['Ford', 'Prefect'].
        .map((name) => name.slice(0, 1).toUpperCase() + name.slice(1))
        // Now, we're turning that array back into a string. Ultimately, this code will result in this: ${Ford Prefect}. We can then access the occupation to finish off the string interpolation.
        .join(" ")} is ${object.occupation}.`
  );
};

// -------------------------------------------- FULL FUNCTION WITOUT COMMENTS:
// -----------------------------------

// const objectValInterpolation = (arr) => {
//   return arr.map(
//     (object) =>
//       `${object.name
//         .split(" ")
//         .map((name) => name.slice(0, 1).toUpperCase() + name.slice(1))
//         .join(" ")} is ${object.occupation}.`
//   );
// };

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder3", () => {
  it(`takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.`, () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    // Expected output: [ 2, 1, -1 ]
    expect(remainder3(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainder3(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// GOOD FAIL: ReferenceError: remainder3 is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in a mixed data array and return an array of only the REMAINDERS of the numbers when divided by 3.
Function Name: remainder3
Function Parameter(s): 1, arr
--------- INPUT / OUTPUT:
input 1: an array of mixed data types
output 1: an array of numbers
--------- STEPS/METHODS:
1. In order to get an array with only numbers, I'm going to use .filter() to check for integers.
2. Then, once I have an array of integers, I'll use map to return an array of the same length with all of the elements % 3.

*/

const remainder3 = (arr) => {
  return arr.filter((v) => typeof v === typeof 1).map((v) => v % 3);
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it(`takes in an array of numbers and returns the sum of all the numbers cubed.`, () => {
    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99);
    expect(sumCubed(cubeAndSum2)).toEqual(1125);
  });
});

// GOOD FAIL: ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an array of numbers and return the sum of all the numbers cubed.
Function Name: sumCubed
Function Parameter(s): 1, arr
--------- INPUT / OUTPUT:
input 1: array of numbers
output 1: integer
--------- STEPS/METHODS:
1. I tried looking up existing JS methods to cube a number, but couldn't get them to work. So, my first step is going to be creating a function that will cube numbers inside of my main function.
2. Then, I'll map through the array and cube all of its' values.
3. Once I have an updated array of cubed values, I'll use reduce to add them together and return an integer.
*/

// const sumCubed = (arr) => {
//   const cube = (int) => {
//     return int * int * int;
//   };
//   return arr.map((v) => cube(v)).reduce((fir, sec) => fir + sec);
// };

// -------------------------------------------- FINAL FUNCTION:
// -----------------------------------

// After creating the above function, I realized that I could simply use value ** 3 instead of creating a function to perform v * v * v. It's been a long day. 😅

const sumCubed = (arr) => {
  return arr.map((v) => v ** 3).reduce((fir, sec) => fir + sec);
};

// -------------------------------------------- RESULTS:
// -----------------------------------
/*
 PASS  ./code-challenges.test.js
  objectValInterpolation
    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  remainder3
    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  sumCubed
    ✓ takes in an array of numbers and returns the sum of all the numbers cubed.

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.172 s, estimated 1 s
Ran all test suites.
✨  Done in 0.72s.
 */
