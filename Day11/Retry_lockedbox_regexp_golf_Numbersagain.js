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

