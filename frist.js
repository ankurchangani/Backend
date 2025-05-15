const fs  =  require("fs");

console.log("hello");

fs.writeFile("output.txt" , "writing flie" , (err) => {
    if(err) {
        console.log("error occured");
    }else{
        console.log("flie Written Successfully"); 
    }
})