const http=require("http");

// const server=http.createServer((req,res)=>{
//     console.log("hi server");
//     res.end("Hello from server created by developer");
// });

// server.listen(3000,()=>{
//     console.log("Server is running at port 3000");
// })

// const server=http.createServer((req,res)=>{
   
//     if(req.url==="/"){
//         res.end("Home Page");

//     }else if(req.url==="/about"){
//         res.end("About Page");

//     }else if(req.url==="/contact"){
//         res.end("Contact Page")
//     }
   
// })


// server.listen(3000,()=>{
//     console.log("server is running");
// })


// const server=http.createServer((req,res)=>{
//     if(req.url==="/users"&& req.method==="GET"){
//         // res.end("Get User data");
//           res.setHeader("Content-Type", "text/html");
//         //   when you pass json data type will be application/json
//           res.statusCode = 200;

//         res.end(`<h1>Welcome users</h1>`)
//     }else if(req.url==="/users"&& req.method==="POST"){
//         res.end("Create user");
//     }else if(req.url==="/users"&& req.method==="DELETE"){
//         res.end("user Deleted");
//     }else{
//         res.statusCode=404;
//         res.end("Route not found");
//     }
// });

// server.listen(3000,()=>{
//     console.log("server is running at 3000");
// })


const server=http.createServer((req,res)=>{
    if(req.url==="/users"&& req.method==="GET"){
        // res.end("Get User data");
       const users=[
        {id:1,name:"Shirt1"},
        {id:2,name:"Shirt2"}
       ]

          res.setHeader("Content-Type", "application/json");
        //   when you pass json data type will be application/json
          res.statusCode = 200;
         
        res.end(JSON.stringify(users));
    }else if(req.url==="/users"&& req.method==="POST"){

        //  console.log(JSON.parse(req.body));
        let data="";
        req.on("data",(yuyu)=>{
            console.log(yuyu);
            console.log(typeof yuyu);
            data+=yuyu;
        })
      req.on("end",()=>{
        console.log(JSON.parse(data));
      })
       
        res.end("Create user");
    }else if(req.url==="/users"&& req.method==="DELETE"){
        res.end("user Deleted");
    }else{
        res.statusCode=404;
        res.end("Route not found");
    }
});

server.listen(3000,()=>{
    console.log("server is running at 3000");
})