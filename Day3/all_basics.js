//History of JavaScript

// JavaScript is a language used to create things on the internet. 
// It started in 1990 and became important very quickly. 
// A person named Brendan Eich made it in just 10 days! Later, Microsoft made a similar thing called JScript, but they both follow the same rules called ECMAScript. 
// These rules helped JavaScript to grow and become really important for making the internet more fun and useful. 
// It has changed a lot and is now used to make all kinds of cool things on the web. 
// There's also something called Node.js that helps with making JavaScript stuff.
// The rules for JavaScript (ECMAScript) have been changed many times, and now they're at ES12 in 2021! This means JavaScript has improved a lot and it's still getting better. 
// It's amazing to see how far JavaScript has come from its beginning in 1990 to becoming such a big part of the internet today.  

//Data Types in JavaScript-1

//There are two types of datatypes:

// primitive and Objective

// ->primitive: Number,String,Boolean,Null,Undefined,Symbol

// Number: 
//in number maximum safe value is 9007199254740991
//Example1:
let num1=1234567890
console.log(num1*30)
//Example2:
let num2=5.8
console.log(typeof num2)
//Example3:
let num3=1_00_00
console.log(num3)

//Data Types in JavaScript-2
//String:
//Example1:
let firstName="Roshan"
let lastName="Yacham"
let fullName=firstName + " " + lastName
console.log(fullName)
//the above example it is about the concatination of the strings
//Example2:
let user ="hi \"How are You!\""
console.log(user)
//the above example abount the escape charater
//Boolean
//Example1:
let bool=6>7
console.log(bool)
//the above example checks the which is greate and prints the  output according to the condition whether it is true or false
//Example2:
let isSoldOut=false;
console.log(isSoldOut)
//the above example is to print the boolen satement directly assigning to the value
//Example3:
let a=5
let b=10
let isEqual=(a===b)
console.log(isEqual)
//the above example is to print the boolean value based on the condition.
//Null
//Example1:
let user1=null;
console.log(typeof user1)
//Undefined
//Example1:
let user2
console.log(typeof user2)



//Type conversion and type coercion

//In some cases we neet to convert number to string, string to number, number to boolean.
//convertion
//example1: number to string 
let number =String(100)
console.log(typeof number)
//Example2: string to number
let number1=Number('123')
console.log(typeof number1,number1)
//The above both examples are Explicit conversion because we are trying to convert fron one type to another.
//Coercion
//coercion is also called as implicit type conversion.
// in coersion case when we have two different data and we want to perform some operation we have to check the types .
//example1:
let result=10+"5"
console.log(result,typeof result)
//Example2:
let result1=true+1
console.log(result1,typeof result1)
//example3:
console.log(Boolean('Roshan'))
//example3:
console.log(5=='5')

//Arithmetic Operations
//for calculation we need srthmetic operators
//Example 1:
let num4=6
let num5=7
console.log(num4+num5)
//Example2:
let num6=true
let num7=false
console.log(num6+num7)
//Example3:
console.log(2**3)
//Example4:
num7=8
num7++
console.log(num7)


//relational Operators

//Relational operators are use to compare the  values.
//Example 1:
// comaparing two values
console.log(7>5)
//the above example compare two values and returns true or false based on the condition
//Example 2 :
//comaparing tow  strings 
console.log('apple'<'banana')
// the above example compares the each value of the two strings like a compares with b and p comapares with a like that it comapres and returns the true or false based on the condition given.
//Example3:
//comparing the string and the number
console.log('2'>2)
// the above example return false because it converts the string into 2 and compares with the value based on the condition it return whether it is true or false.

//Logical Operators 
// logical Operators are used to combine boolean values
//logial operators are &,|,!
//Example1:
let x=1
let y=2
let z=3
let solution=x<y || x<z
console.log(solution)
//Example2:
console.log(true && true)
//Example3:
console.log(true||false)


//Ternary Operators
//A ternary operator is a shorthand way of writing if_else statements.
//Example1:
let age=18
let canVote=age>=18?'Yes':'No'
console.log(canVote)
//Example2:
let value=7
let type=(value%2===0) ? 'Even':'Odd'
console.log(type)
//Example3:
let temperature=30
let weather=temperature>25?"Hot":
            temperature>15?"Warm":"cold";
console.log(weather)


//Template Literals
//template literals are use to eork with strings in java script that makes easy to include variables, expression and multiline strings.
//Example1:
let name='roshan'
let age2=25
console.log(`Hello, my name is ${name} and i am ${age} years old.`)
//Example2:
console.log(`Hello, 
I am Roshan,
How are you!`)
//Example3:
let h=10
let i=5
console.log(`The sum of ${x} and ${y} is ${x+y}`)


