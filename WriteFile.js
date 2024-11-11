const fs= require("fs");
var text="Hello,I will go from here";
console.log("Writing Synchronously");
fs.writeFileSync('input.txt',text);
console.log("Writing ASynchronously");
fs.writeFile('input.txt',text,function(err){
    if(err)
        console.log(err)
    else
    console.log("Writing Successful \n",text);
});