// let myIdElement = document.getElementById("myDiv")
// console.log(myIdElement);
// let myTagElemenet = document.getElementsByTagName("p")
// console.log(myTagElemenet[1]);
// console.log(myTagElemenet[0]);

// let myClassElement = document.getElementsByClassName("mySpan")
// console.log(myClassElement[0]);

// let myQueryElement = document.querySelector(".special")
// console.log(myQueryElement);
// let myQueryElement2 = document.querySelector("#myDiv")
// console.log(myQueryElement2)
// let myQueryElement3 = document.querySelector("p")
// console.log(myQueryElement3)
// let myQueryElementAll = document.querySelectorAll("a")
// console.log(myQueryElementAll)

// console.log(document.forms)

// let myP = document.querySelector("#myP")
// console.log(myP)

// let myBtn = document.getElementById('btn');
// myBtn.onclick = function(){
// console.log("clicked")}


// let myBtn1 = document.getElementById("btn");
// myBtn1.onload = function(){
//     console.log ("Changed")
// }

// let myText = document.getElementById("textHasan");
// myText.onclick = function(){
//     console.log("Hasan")
// }
// let myForm = document.querySelector("form")
// console.log(myForm);
// myForm.appendChild(myText);
// let myText2 = document.getElementById("textHasan");
// myText2.addEventListener('click', function(){
//     console.log("Hasan Cloned")
// })

let myText =  document.getElementById("textHasan");
myText.onclick=function(){
    console.log("Hasan")
    let newText =myText.cloneNode(true)
    console.log(newText);
    document.body.appendChild(newText)
    newText.className ="Clone"

}


document.addEventListener("click",function(e){
if(e.target.className === "Clone"){
    console.log("Iam Cloned A")
}
})