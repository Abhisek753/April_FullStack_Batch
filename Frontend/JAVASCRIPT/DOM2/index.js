// // console.log("Hello World");

// // const TitleElement=document.getElementById("title");
// // console.log(TitleElement.textContent);

// // const myname=document.querySelector(".name");
// // myname.setAttribute("id","firstname");
// // myname.classList.add("text");
// // myname.innerHTML="This is my name Abhisek"

// const parentElement=document.getElementById("parent")
// const para=document.createElement("p");
// const dummyBtn=document.createElement("button");
// dummyBtn.textContent="Submit"
// para.textContent="This is p tag created from js code";

// para.addEventListener("mouseover",()=>{
//     console.log("hover is working");
//     para.style.color="red";
// })
// dummyBtn.addEventListener("dblclick",()=>{
//     console.log("Button is clicked");
//    console.log(8+9);
// })
// parentElement.appendChild(para);
// parentElement.appendChild(dummyBtn);


// const firstname=document.getElementById("name");
// // firstname.addEventListener("input",(event)=>{
// //    console.log(event.target.value);
// // })

// firstname.addEventListener("change",(event)=>{
//    console.log(event.target.value);
// })

const formConatiner=document.getElementById("form");
formConatiner.style.display="flex"
formConatiner.style.flexDirection="column"
formConatiner.style.gap="10px"
formConatiner.style.maxWidth="300px"
const input1=document.createElement("input");
input1.type="test";
input1.placeholder="First Name"

const input2=document.createElement("input");
input2.type="test";
input2.placeholder="Email"

const input3=document.createElement("input");
input3.type="number";
input3.placeholder="Age"
input3.addEventListener("input",(event)=>{
    console.log(event.target.value);
})

const submitBtn=document.createElement("button");
submitBtn.textContent="Sumbit";
submitBtn.style.cursor="pointer"
formConatiner.appendChild(input1);
formConatiner.appendChild(input2);
formConatiner.appendChild(input3);
formConatiner.appendChild(submitBtn);

submitBtn.addEventListener("click",(event)=>{
   console.log(event.target);
   event.preventDefault();
   console.log("Input 1 value",input1.value)
    console.log("Input 2 value",input2.value)
     console.log("Input 3 value",input3.value)
  
    //  localStorage.setItem("formdata",JSON.stringify({"name":input1.value,"email":input2.value,"age":input3.value}));
     sessionStorage.setItem("formdata",JSON.stringify({"name":input1.value,"email":input2.value,"age":input3.value}));

})

const data=sessionStorage.getItem("formdata");
console.log("My session storage data",data);

