 /* primitive datatypes store data directly in the variable
 string 
 number
 null
 undefined
 boolean

 
There are a couple of ways to create,
or instantiate, objects. The first is to use
the new operator with a constructor. (A constructor is simply a function that uses new
to create an object—any function can be
a constructor.) By convention, constructors in JavaScript begin with a
capital letter to distinguish them from nonconstructor functions
eg
var object = new Object();


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

Primitive literals includes
 string literals,
 numeric literals, 
 Boolean literals, 
 null literal, 
 undefined literal.


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

//Object Literals eg
var book = {
name: "The Principles of Object-Oriented JavaScript",
year: 2014
};

var book = {
    "name": "The Principles of Object-Oriented JavaScript",
    "year": 2014
   };

var book = new Object();
book.name = "The Principles of Object-Oriented JavaScript";
book.year = 2014;

//The outcome of each of the previous three examples is the same:
//an object with two properties. The choice of pattern is up to you because
//the functionality is ultimately the same.


//Array Literals
var colors = [ "red", "blue", "green" ];
console.log(colors[0]); // "red"

//This code is equivalent to the following:

var colors = new Array("red", "blue", "green")
console.log(colors[0]); // "red"

//function literals

function reflect(value) {
    return value;
   }
   // is the same as
   var reflect = new Function("value", "return value;");


//    Regular Expression Literals
// JavaScript also has regular expression literals that allow you to define
//  regular expressions without using the RegExp constructor.

var numbers = /\d+/g;
// is the same as
var numbers = new RegExp("\\d+", "g");

// y \d is used in the literal and \\d is used in the
// constructor.

// Property Access
// Properties are name/value pairs that are stored on an object.
//  Dot notation is the most common way to access properties in JavaScript (as in
// many object-oriented languages), but you can also access properties on
// JavaScript objects by using bracket notation with a string eg

var array = [];
array.push(12345);

// bracket notation
var array = [];
array["push"](12345);

// identifying reference types
// A function is the easiest reference type to identify because when you use
// the typeof operator on a function, the operator should return "function" Eg

function reflect(value) {
 return value;
}
console.log(typeof reflect); // "function"

// Other reference types are trickier to identify because, for all reference
// types other than functions, typeof returns "object". 
// That’s not very helpful when you’re dealing with a lot of different types. 
// To identify reference
// types more easily, you can use JavaScript’s instanceof operator.
// The instanceof operator takes an object and a constructor as parameters.
//  When the value is an instance of the type that the constructor specifies, 
// instanceof returns true; otherwise, it returns false

var items = [];
var object = {};
function reflect(value) {
 return value;
}
console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true

// identifying arrays
Array.isArray() //is the best way to identify arrays

// there are three primitive wrapper types (String, Number, and Boolean)
var name = "Nicholas";
var firstChar = name.charAt(0);
console.log(firstChar); // "N"

//This is what happens behind the scenes:
// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar); // "N

//  JavaScript creates
// these objects behind the scenes so that you can treat primitives like
// regular objects, but the temporary objects are destroyed as soon as the
// statement using them is complete. Although you can create your own
// instances of primitive wrappers, it’s best not to do that because it can
// be confusing.


// functions are
//actually objects in JavaScript
// Declarations vs. Expressions