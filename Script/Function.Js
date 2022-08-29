// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."
// function tellFortune(x,y,z,n){
//     return `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`
// }

// console.log(tellFortune('software engineer','Jordan','Alice','3'))

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"


// function calculateDogAge(x){
//     Age = x*7
//     return `Your doggie is ${Age} years old in dog years!`
// }
// console.log(calculateDogAge(5))

// 4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"

// function firstOfArray(x){

//     return x[0]
// }
// console.log(firstOfArray([1,4,5]))

// Create a function called lastOfArray
// that take an array as a parameter
// and return the last element in an array

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"
// function lastOfArray(x){
//     return x[x.length-1]
// }
// console.log(lastOfArray([1,4,5]))

// Using console make this array to be like this one (push, unshift, shift, pop)

// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]
// function arrayModification(array){
//     x = array.push();
//     y = array.unshift();
//     z = array.shift();
//     n = array.pop();
//     return x , y, z, n

// }
// * Exercise 1: 
// * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Case:
// *    Test Case 1: doubleValues([1,2,3]) 
// *    Test Case 2: doubleValues([5,1,2,3,10])  
// *
// * Result: 
// * Test Case 1:  [2,4,6]
// * Test Case 2: [10,2,4,6,20]

// function doubleValues(array){
//     for (i=0;i<array.length-1;i++){
//         array[i] = array[i]*2
//     }
//     return array
// }
// console.log(doubleValues([1,2,3]))
// console.log(doubleValues([5,1,2,3,10]) )

// * Exercise:
// * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// *
// * Test Cases:
// *   onlyEvenValues([1,2,3]) 
// *   onlyEvenValues([5,1,2,3,10]) 
// * 
// * Result:
// *  Test Case 1:  [2]
// *  Test Case 2: [2,10]

// function onlyEvenValues(array){
//     let evenArray=[];
//     for (i=0;i<array.length-1;i++){
//         if (array[i] % 2 === 0) {
//             evenArray.push(array[i])
//         }
        
//     }
//     console.log(evenArray) 
// }
// onlyEvenValues([1,2,3]) 


/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
// function showFirstAndLast(arr){
//  }
// function showFirstAndLast(array) {
//     //Your Code Here
//     let newArr = [];
//     for(i=0;i< array.length; i++){
//         newArr.push(array[i][0]+array[i][array[i].length-1])
//     }
//     return newArr
// }

// console.log(["ct", "mt", "tm", "uy"])

// Create a function called middleOfArray
//     that take an array as a parameter
//     and return the middle element in an array if it is have an odd elemnets
//     and return the two middle elemnt in an array if it is have an even elemnets
    
//     Ex: middleOfArray([1,4,5]) => 4
//     Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
//     */
    // function middleOfArray(array){
    //     oddArray = [];
    //     evenArray = []
    //     if(array.length % 2 == 0){
    //       return  [array[array.length/2 -1] ,array [(array.length / 2)]]

    //     }else{
    //          return oddArray=array[Math.floor(array.length/2)];
            
    //     }
        
    // }

    // console.log(middleOfArray(["t","u","g","x"]));
    // console.log(middleOfArray([1,4,5]))