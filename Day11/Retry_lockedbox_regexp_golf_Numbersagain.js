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