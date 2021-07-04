// 1st solution  

// let defaultArray = [ [ "foo", "foo@foo.com" ],[ "bar_", "bar@bar.com" ], ["poo_", "poo@poo.com"] ];

// let newArray = [];

// for (let i = 0; i < defaultArray.length; i++){
//     if(/_/.test(defaultArray[i][0])){
//         newArray.push(defaultArray[i])
//     }
// }
// console.log(newArray);



// 2nd solution

let defaultArray = [ [ "foo", "foo@foo.com" ],[ "bar_", "bar@bar.com" ], ["poo_", "poo@poo.com"] ];

let newArray = defaultArray.filter(user =>/_/.test(user)); 
console.log(newArray);