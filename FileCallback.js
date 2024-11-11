const fs = require('fs');
// Function that reads a file and uses a callback
function readFile(filePath, callback) {
    // Asynchronously read the file content
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}
// Calling the function and providing a callback
readFile('Input.txt', (err, data) => {
    if (err) {
        // Handle the error
        console.error('Error reading file:', err);
        return;
    }
    // Process the data
    console.log('File content:', data);
});