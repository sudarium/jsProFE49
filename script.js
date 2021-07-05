// let inputArray = [1, 3, 21];
// let sum = 0;

// for (let elementInput of inputArray) {
//     sum += elementInput;
// }

// if (sum % 2 == 0) {
//     console.log('Output: "even"');
// } else {
//     console.log('Output: "odd"');
// }

function oddOrEven(array) {
    return array.reduce(function(sum, item) {
      return sum + item
    }, 0) % 2 == 0 ? 'even' : 'odd';
  }
  
  console.log(oddOrEven([1, 7, 3]));
  console.log(oddOrEven([1, 3, 6, 8]));
  console.log(oddOrEven([]));
