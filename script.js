// function deleteSmallestIndex(inputArray) {

//     let comparison = +Infinity;
//     let arrayIndexCount = 0;

//     if (inputArray.length == 0) {
//         return inputArray;
//     } else {
//         for (let i = 0, j = 0; i < inputArray.length; i++, j++) {
//             if (inputArray[i] < comparison) {
//                 comparison = inputArray[i];
//                 arrayIndexCount = j;
//             } else {
//                 comparison = comparison;
//             }
//         }
//         inputArray.splice(arrayIndexCount, 1);
//     }
//     return inputArray
// }
// console.log(deleteSmallestIndex([11, 2, 3, 1, 8, 1]));
// console.log(deleteSmallestIndex([]));

function deleteSmallestIndex(inputArray) {
let comparison = inputArray[0];
let arrayIndexCount = 0;

    if (inputArray.length == 0) {
        return  inputArray;
    } else {
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] < comparison) {
                comparison = inputArray[i];
                arrayIndexCount = i;
            } 
        }
        inputArray.splice(arrayIndexCount, 1);
    }
    return  inputArray
}
console.log(deleteSmallestIndex([11, 2, 3, 1, 8, 1]));
console.log(deleteSmallestIndex([]));