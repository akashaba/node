const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, {encoding:'utf-8'}, (err, data)=>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if (typeof fileContents !== 'string') {
      reject(new Error('Expected a string as input'));
    } else {
      resolve(fileContents.toUpperCase());
    }
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, 'utf8', (error, fileContents) => {
//       if (error) {
//         reject("Encountered error while reading file contents..!");
//       } else {
//         convertToUpperCase(fileContents)
//           .then((result) => {
//             resolve(result);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       }
//     });
//   });
// }
let myArr =[]
fs.readFile(fileName, 'utf8', (error, fileContents) => {
  if (error) {
    cb("Encountered error while reading file contents..!");
  } 
    convertToUpperCase(fileContents)
    // fileContents.toUpperCase()
      .then((result) => {
        myArr.push(result)
        cb(null, myArr);
      })
      .catch((error) => {
        cb(error);
      });
  
});
};
// readAndConvertFileContents(fileName)
//   .then((result) => {
//     // console.log('Successfully read and converted file contents:');
//     console.log(result);
//   })
//   .catch((error) => {
//     // console.error('Encountered error while reading or converting file contents:');
//     console.error(error);
//   });

module.exports = {
  readAndConvertFileContents,
};
