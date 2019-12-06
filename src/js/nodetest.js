const fs = require("fs");

// Read contents as a string
const string = fs.readFileSync(__dirname + "/test.txt", "utf8");

console.log(string);

// //requiring path and fs modules
// const path = require("path");
// const fs = require("fs");

// //joining path of directory
// const directoryPath = path.join(__dirname);

// //passing directoryPath and callback function
// fs.readdir(directoryPath, (err, files) => {
//   //handling error
//   if (err) {
//     return console.log("Unable to scan directory: " + err);
//   }
//   //listing all files using forEach
//   files.map(file => {
//     // Do whatever you want to do with the file
//     console.log(file);
//   });
// });
