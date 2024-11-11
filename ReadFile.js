const fs = require('fs');

// Reading the file synchronously
console.log("Reading Synchronously");
const data = fs.readFileSync('Output.txt', 'utf8'); // Make sure the file exists
console.log(data.toString());

// Writing to the file asynchronously
console.log("Reading Asynchronously");
fs.writeFile('Output.txt', 'New content written asynchronously!', function(err) {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log("Asynchronous Write Successful"+data.toString());
    }
});

console.log("Writing Successful");
