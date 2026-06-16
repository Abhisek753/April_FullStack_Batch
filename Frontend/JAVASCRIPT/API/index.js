console.log("Hi this is my first api call");

fetch("https://jsonplaceholder.typicode.com/posts/9").then(res=>{
     return res.json();
}).then(data=>{
    console.log(data)
});

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"delete",
    body:JSON.stringify({
        title:"foo",
        body:"bar",
        userId:1
    })
}).then(res=>{
     return res.json();
}).then(data=>{
    console.log(data)
})