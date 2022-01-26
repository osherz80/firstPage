
let ob = {
    key1: "key2",
    key2: 100,
    key3:{
        key1:{
            key1: "hiiii"
        },
        key2:{
            key1:{
                key1:111111
            }
        }
    },
    key4:[1,2,3,4],
    key5: null,
    key6:true,

}


let arr = ["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff"];

let newArr = [];
arr.forEach((str) => {
	newArr.push("**** " + str + " ****");
});

let newMapArr = arr.map((str) => {
	return "////// " + str + " //////";
});

console.log(newArr);

console.log(newMapArr);

let newobjarr = Object.keys(ob).map(key => {
    return [key,ob[key]];
})

console.log(newobjarr);


let narr = [
	["id", 1234567],
	["name", "my name"],
	["family", "my family name"],
	["address", "my address"],
	["height", 185],
    ["birth_date", "1/1/1970"]
]

let obj2 = Object.fromEntries(narr);

console.log(obj2);

// let obj3;

// obj3.forEach((a) =>{
//     obj3 += a;
// })

console.log(obj3);

let o2 = {
	id: 1234567,
	name: "my name",
	family: "my family name",
	address: "my address",
	height: 185,
	birth_date: "1/1/1970"
}
