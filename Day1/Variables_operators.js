//  Numbers
console.log(0x1A)
console.log(3.14159)
console.log(2.5e3)
console.log(42)
console.log(0b1010)
// Special numbers
console.log(1/0)
console.log(-1/0)
console.log("Hello"/2)
console.log(Math.sqrt(-1))
console.log(NaN+5)
// Arthmetic Operators
console.log(2**3)
console.log(2-3)
console.log(2+3)
a=5
a++
console.log(a)
a=5
a--
console.log(a)
// Strings
console.log('hello, world!')
console.log("Hello, world!")
console.log(`Hello, world!`)
console.log(`This is a 
    multi-kine string`)
console.log('Hi'+'How are you')

//Tenary Operators
let age=18
let canvote = age>=18?"Yes":"No"
console.log(canvote)


function checkEvenOrOdd(number){
    return number%2==0?"Even":"Odd"
}
console.log(checkEvenOrOdd(4))

let score=85
let grade=score>=90?"A":
          score>=80?"B":
          score>=70?"C":"F";
console.log(grade)


let temperature=30
let weather=temperature>25?"Hot":
            temperature>15?"Warm":"cold";
console.log(weather)


//Boolean operators

console.log(10>=10)
console.log(10<=5)
console.log(5!=='5')
console.log("apple">"banana")
console.log("5"==5)

//Automatic Type cinversion
console.log(+true)
console.log(+false)
console.log(false==1)
console.log(!!1)
console.log(null==1)
