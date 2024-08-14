//Q1. Explain the difference between null and undefined in JavaScript?

//undefined: When a variable is declared but has not assigned a value, it is automatically initialized with undefined.

// undefined can be used when you don't have the value right now, but you will get it later.

//Null:null variables are intentionally assigned with the null value.

//null  can be used, when you are sure you do not have any value for particular variable.


//Q2. What will be the output of the following code and why?

console.log('10'+5)
//Output:105
//JavaScript sees 10 as a string and 5 as number.when we use + sign, it trus in to a string and joins them together like two pecices of text, resulting in '10'+'5'='105.

console.log('10'-5)
//Output:5
//JavaScript converts the string 10 into number 10 and then substracts 5 from it.

console.log(true+2)
//Output:3
//In JavaScript 'true' is treated as the number 1 when used with srithmetic operations. So,true+2 is effectively 1+2 which equals to 3.

console.log(false+undefined)
//Output:NaN
// In JavaScript 'false' is treated as the number 0 in arithmetic operations.
// 'undefined' is a special value that means 'not defined' and is not a number.
//when we try to add 0and undefined , JavaScript can't perform the operation because 'undefined' is not a number, so it results in'NaN'.


//Q3.What is the difference between == and === in javaScript?provide examples?

//`==`:
// `==` checks if two values are equal after converting them to the same type.
//Example: 
console.log(5=='5') //true
console.log(true=='1')//true
console.log(5=='15')//false

//`===`:
//`===`checks if two values are equal and of the same type without any conversion.
console.log(5==='5')//false
console.log(true===1)//false
console.log(5===5)//true

//Q4. Predict the output of the following expression and explain your reasoning?

console.log(0==false)//true  // 0 and false are considered equal in a loose comparison because JavaScript converts false to 0 before comparing.
console.log(0===false)// false  // 0 is a number and false is a boolean, so there are not the same type. The strict comparison checks both value and type.
console.log(''==0)// true  //An empty string '' and 0 are considered equal in a loose comparison because JavaScripts converts '' to 0 before comparing.
console.log(''===0)// fasle  // An empty string '' and 0 are different types,so they are not equal in a strict comparison.


//Q5. Given the following code, what will be the output and why?

console.log(0 || 1 && 2 || 3)// output: 2 // In the expression, && has higher than ||. so,1 && 2 evaluats we get 2. then the expression becomes 0 || 2 || 3 the || operator return the first truely value, so 2 we gets.
console.log(false || (true && false) || true)// output: true // inside the parentheses true && false evaluates to false. so the expression to false || false || true . The || operator returns the firat truthy value it finds, which is 'true'.
console.log(0 && 1 || 2 && 3)// output:3 the && operator evauates so we get 0||3 so we get 3 .

//Q6. predict the output of the following expressions and explain your reasoning?
let a=10,b=20,c=30
console.log(a+b*c)// output: 610 // the multiplication has higher the addition, so it multiplies b*c then it adds with a.
console.log((a+b)*c)//900// It checks the brackets first it does a+b first and it multiplies with c.
console.log(a+b>c?a:b)// 20 // This uses ternary operator, first a+b calculated we get 30 then it check 30>30 which is false do it returns b which is 20.
console.log((a>b) && (b>c) || (a>c))//false // first it checks inside the brackets then we get false || false so we get false.

//Q7. Analyze and explain the output of the following code snippets?

console.log([]+{})//output:[object Object]// adding an array[] and an object {}, javascript converts the array to an empty string '" "' and the object to [object Object ], when concatinate and results [object Object].
console.log({}+[])//output:[object Object]// adding an array[] and an object {}, javascript converts the array to an empty string '" "' and the object to [object Object ], when concatinate and results [object Object].
console.log([]==![])//output: true // ![] converts to empty array to false so []==false. when comapring with'==' javascript converts false to 0 and [] is also converted to 0, so we get 0==0 which gives true.
console.log(''==[])//output: true// because [] threated as an empty string '' when compared with == we get true.

//Q8. What will be the output of the following code, and why?

console.log(+"")// output: 0 // the + operator converts the empty string '' to a number which in 0.
console.log(+true)//output : 1 // the + operator converts true to number which results to 1.
console.log(+false)//output: 0 //the + operator converts the false to a number which results to 0.
console.log(+null)//output : 0 // the + operator converts null to anumber which results to 0.
console.log(+undefined)// output : NaN // the + operator cannot convert undefined to a number, so it results to NaN.