 /* primitive datatypes store data directly in the variable
 string 
 number
 null
 undefined
 boolean

 Reference types represent objects in JavaScript
 An object is an unordered list of properties consisting of a name (always a string) and a value.
 
     Reference types do not store the object directly into the variable to
which it is assigned,Instead, it holds a pointer (or reference) to
the location in memory where the object exists.
eg

var object1 = new Object();
var object2 = object1;

    Dereferencing objects set them to null eg

var object1 = new Object();
// do something
object1 = null; // dereference

   Adding or Removing Properties
   eg

   var object1 = new Object();
   var object2 = object1;
   object1.myCustomProperty = "Awesome!";
   console.log(object2.myCustomProperty); // "Awesome!"

   Here, myCustomProperty is added to object1 with a value of "Awesome!".
That property is also accessible on object2 because both object1 and
object2 point to the same object.

Instantiating Built-in Types
eg
Array: An ordered list of numerically indexed values
Date: A date and time
Error: A runtime error (there are also several more specific
error subtypes)
Function: A function
Object: A generic object
RegExp: A regular expression

Instantiating  built-in reference type use new
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");


Literal Forms
A literal is syntax that
allows you to define a reference value without explicitly creating an object,
using the new operator and the object’s constructor.
 */


// primitive methods
var name = "Nicholas";
var lowercaseName = name.toLowerCase(); // convert to lowercase
var firstLetter = name.charAt(0); // get first character
var middleOfName = name.substring(2, 5); // get characters 2-4
var count = 10;
var fixedCount = count.toFixed(2); // convert to "10.00"
var hexCount = count.toString(16); // convert to "a"
var flag = true;
var stringFlag = flag.toString(); // convert to "true"


// identifying primitive datatypes
console.log(typeof "Nicholas"); // "string"
console.log(typeof 10); // "number"
console.log(typeof 5.1); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"