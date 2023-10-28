// let arr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, molestias?"
// let k = arr.split("")
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "a", "e","i","u","o") {
//         arr.splice(i,1)
//     }
// }
// console.log(string);

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, molestias?"
let arr = str.split("")
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "e"|| arr[i] == "a"|| arr[i] =="i"||arr[i] =="u"||arr[i] =="o"|| arr[i] == "O"   ) {
        arr.splice(i,1)
    }
    
}

console.log(arr);






















// arr[i, "a"] || arr[i, "e"] || arr[i, "i"] || arr["u"] || arr["o"]
// str["o", "e", "a", "i", "u"] ? str.splice() : arr=
// if (arr.indexOf("a","e","i","u","o"))  {
//     arr.splice(i,1)
// }
//  let a = arr.indexOf ("l")
// console.log(arr.splice(a,1));