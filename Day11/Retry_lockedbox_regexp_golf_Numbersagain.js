//RETRY
function primitiveMultiply(a,b){
    if( Math.random()<2.0){
        return a*b
    }else{
        throw new MultiplicatiorUnitFailure('Klunk')
    }
}
function reliableMultiply(a,b){
    try{
        return primitiveMultiply(a,b)
    }catch(e){
        if (e instanceof MultiplicatiorUnitFailure){
            console.log('Failed to multiply....')
        }else{
            throw e
        }

    }

}
console.log(reliableMultiply(8,8))

//THE LOCKED BOX

const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
    };
    function withBoxUnlocked(body) {
        const wasLocked = box.locked
        if(wasLocked){
            box.unlock()
        }
        try{
            body()
        }finally{
            if(wasLocked){
                box.lock()
            }
        }
    
    }
    withBoxUnlocked(() => {
        box.content.push("gold piece");
    });
    try {
        withBoxUnlocked(() => {
            throw new Error("Pirates on the horizon! Abort!");
    });
    } catch (e) {
        console.log("Error raised: " + e);
    }
console.log(box.locked);


//REGEXP GOLF

verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);
  
  verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);
  
  verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);
  
  verify(/\b\w*ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);
  
  verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);
  
  verify(/\b\w{7,}\b/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);
  
  verify(/\b[^eE\s]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "bedrøvet abe", "BEET"]);


    function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  for (let str of yes) {
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  }
  for (let str of no) {
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
  }
}

//Numbers Again

let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
"1.3e2", "1E-4", "1e+12"]) {
if (!number.test(str)) {
console.log(`Failed to match '${str}'`);
}
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
".5.", "1f5", "."]) {
if (number.test(str)) {
console.log(`Incorrectly accepted '${str}'`);
}
}
    

