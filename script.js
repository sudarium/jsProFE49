let defaultArray = ["foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com"]
let fixArray = [];

for (let i = 0; i < defaultArray.length; i++) {
    if (/^\.+|\.+$/.test(defaultArray[i])) {
        fixArray.push(defaultArray[i + 1])
    }
}
console.log(fixArray);

