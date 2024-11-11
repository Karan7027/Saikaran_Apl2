const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Output.txt');
// Data to append
const dataToAppend = '\nThis is the new line of text.\n';
// Append data to the file
fs.appendFile(filePath, dataToAppend, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data successfully appended to file!');
    }
});
function printTextFromFile(filename) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        // Convert Buffer to string using toString() and print it
        console.log('Text from file:', data.toString());
    });
}

// Using the function to read from input.txt
printTextFromFile('Output.txt');
