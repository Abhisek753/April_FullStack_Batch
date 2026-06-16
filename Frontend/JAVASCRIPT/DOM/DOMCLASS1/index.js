// console.log("This is my first Dom class");

// const ItemsElement=document.getElementById("items");
// console.log(ItemsElement);
// const classTag=document.getElementsByClassName("myclass");
// console.log(classTag[1]);

// const myTag=document.querySelector("#items");
// console.log(myTag.textContent);
// console.log(myTag.innerHTML);

// myTag.setAttribute("class","testClass");

// let anchorTag=document.querySelector("a");
// anchorTag.setAttribute("href","https://www.amazon.in/");
// anchorTag.setAttribute("target","_blank");
// anchorTag.textContent="My Amazon Link";
// console.log(anchorTag);

// let para=document.querySelectorAll(".myclass")[1];
// para.textContent="Yes Bakend will completed in specific time.";
// para.style.setProperty("color","red");
// para.style.setProperty("font-size","30px");
// para.style.setProperty("background-color","teal");

// // para.style.fontSize="20px"


// console.log(para,"second class element")


let myContainer=document.getElementById("container");

let Paragraph=document.createElement("p");
let myBtn=document.createElement("button");
myBtn.innerHTML="Submit"
Paragraph.textContent="I am Abhisek kumar living in Banglore"
console.log(Paragraph);
myContainer.appendChild(Paragraph);
myContainer.appendChild(myBtn);