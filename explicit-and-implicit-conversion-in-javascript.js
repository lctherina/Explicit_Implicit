/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + Number(result));
console.log(typeof result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
console.log(typeof isValid);

let age = "25";
let totalAge = (Number(age) + 5);
console.log("Total Age: " + totalAge);

let num = 1987;
let str = String(num);
console.log(str);
console.log(typeof str);

let text = ""
if (text){
  console.log("This is falsy");
}







