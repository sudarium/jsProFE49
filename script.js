function dontGiveMeFive(firsNumber, lastNumber) {

    let result = 0;

    for (let i = firsNumber; i < lastNumber + 1; i++) {
        
        if (String(i).includes('5')) {
            result = result;
        } else {
            result += 1;
        }
    }
    return result;
}
console.log(dontGiveMeFive(25, 95));