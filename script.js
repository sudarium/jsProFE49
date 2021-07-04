let defaultArray = [ [ "foo", "foo@foo.com" ],[ "bar_", "bar@bar.com" ], ["poo_", "poo@poo.com"] ];

let fixArray = [];

for (let i = 0; i < defaultArray.length; i++){
    if(/_/.test(defaultArray[i][0])){
        fixArray.push(defaultArray[i])
    }
}
console.log(fixArray);