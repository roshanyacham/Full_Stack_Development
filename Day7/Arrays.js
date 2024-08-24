//Q1. THE SUM OF RANGE
function range(start,end,jump=1){
    let result=[]
    if(jump>0){
        for(let i=start;i<=end;i+=jump){
            result.push(i)
        }
    }else{
        for(let i=start;i>=end;i+=jump){
            result.push(i)
        }
    } 
    return result
}
function sum(numbers){
    let total=0
    for(let number of numbers){
        total+=number
    }
    return total
}
let numbers=range(1,10)
console.log(numbers)
let c=range(5,2,-1)
console.log(c)
let b=sum(numbers)
console.log(b)

//Q2. REVERSING AN ARRAY

function reverseArray(myArray){
    let newArray=[]
    for(let i=myArray.length-1;i>=0;i--){
        newArray.push(myArray[i])
    }
    return newArray
}
let myArray = ["A", "B", "C"]
console.log(reverseArray(myArray));
function reverseArrayInPlace(myArray){
    let left=0
    let right=myArray.length-1;
    while(left<right){
        let temp=myArray[left]
        myArray[left]=myArray[right]
        myArray[right]=temp
        left++
        right--
    }
}
let array=[1,2,3,4,5]
reverseArrayInPlace(array)
console.log(array)

//Q3 A LIST
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list }
    }
    return list
  }
  
  function listToArray(list) {
    let arr = []
    while (list) {
      arr.push(list.value)
      list = list.rest
    }
    return arr
  }
  
  function prepend(element, list) {
    return { value: element, rest: list }
  }
  
  function nth(list, n) {
    if (!list) {
      return undefined
    } else if (n === 0) {
      return list.value
    } else {
      return nth(list.rest, n - 1)
    }
  }
console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))


























