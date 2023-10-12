// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// // Expected output: 10
// console.log(b);
// // Expected output: 20
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);
// // Expected output: Array [30, 40, 50]



// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;
// ({ a, b } = obj); // parentheses are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);


const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

//destructing on the left side
// const obj = { e: 1, f: 2 };
// const { e, f} = obj;
// is equivalent to:
// const e = obj.e;
// const f = obj.f;

// For both object and array destructuring, there are two kinds of destructuring patterns:
// binding pattern(binding patterns, the pattern starts with a declaration keyword ( var , let , or const )) and assignment pattern
// const object = { a: 1, b: { c: 2 } };
// const {
// a,
// b: { c: d },
// } = object;
// // Two variables are bound: `a` and `d`


// const objt= { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
// b: { c: d },
// } = objt; // d is re-assignable


// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`


// rest property
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }
const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]


// array destructuring
const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"