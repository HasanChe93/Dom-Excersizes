// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add("Hasan");
// myUniqueData.add("Hasan")
// myUniqueData.add(2).add(3).add("A");

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);


const arr = ["A","B","C","D",,"E"];
for (let i =0; i< arr.length; i++ ){
    console.log(`${i} -  ${arr[i]}` );
}

console.log(`${"#".repeat(30)}`)


arr.forEach((element,i) =>{
    console.log(`${i}-${element}`);
});

console.log(`${"#".repeat(30)}`)



let callbacks = 0;
arr.forEach((element,i) =>{
    console.log(`${i}-${element}`);
    callbacks++;
});
console.log(callbacks)

console.log(`${"#".repeat(30)}`)
