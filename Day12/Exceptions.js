//Complex Password Validator
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/
function validatePasswords(passwords) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/
    return passwords.filter(password => regex.test(password))
}
let passwords = ['StrongPass123$', 'weakpass', 'Short1$', 'ValidPass123@']
let validPasswords = validatePasswords(passwords)
console.log(validPasswords);

//Extract and Modify Data from a Log File


let logRegex = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) - Error: User (\w+) failed to login from IP (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/
function redactIPs(logs) {
    const ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g
    return logs.map(log => log.replace(ipRegex, '[REDACTED]'))
}
const logs = [
    '2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1',
    '2024-08-28 15:45:12 - Error: User jane_doe failed to login from IP 10.0.0.2'
];
const redactedLogs = redactIPs(logs)
console.log(redactedLogs)


//Exceptions in JavaScript

//Basic Try catch

function divide(a,b){
    try{
        if(b===0){
            throw new Error("Division by zero is not allowed")
        }
        return a/b;
    }catch(error){
        console.log(error.message)
    }
}
console.log(divide(10,2))
console.log(divide(10,0))


// Handling JSON Parsing Errors

function parseJson(jsonString){
    try{
        return JSON.parse(jsonString)
    }catch(error){
        console.error('Invalid JSON format:',error.message)
        return {};
    }
}
const validJson = '{"name": "John", "age": 30}'
const invalidJson = '{"name": "John", "age": 30'

console.log(parseJson(validJson))
console.log(parseJson(invalidJson))