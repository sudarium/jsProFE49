let inputArray = [1, 3, 21];
let sum = 0;

for (let elementInput of inputArray) {
    sum += elementInput;
}

if (sum % 2 == 0) {
    console.log('Output: "even"');
} else {
    console.log('Output: "odd"');
}