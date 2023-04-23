//import all the modules require
const fs = require('fs')
const lodash = require('lodash')
const readline = require('readline')
const csv = require('csv-parser');

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
 
 
  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  rl.on('line', (line) => {
    fileContents.push(line);
  });

  rl.on('close', () => {
    cb(null, fileContents);
  });

  rl.on('error', (error) => {
    cb(error);
  });

}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {

  const femaleCandidatesSouthwest = fileContents.filter(record => {
    const values = record.split(',');
    return (values[1]).trim() === 'female' && (values[5]).trim() === 'southwest';
  });
cb(null, femaleCandidatesSouthwest);
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
  const data = filteredData.join('\n');

  fs.writeFile(outputFileName, data, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null, 'Successfully wrote filtered data to file');
    }
  });
  
}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
  const fileContents = [];

  fs.createReadStream(fileName, { encoding: 'utf8' })
    .pipe(csv())
    .on('data', (row) => {
      fileContents.push(row);
    })
    .on('error', (err) => {
      console.error(`Error while reading file: ${err.message}`);
      cb(err, null);
    })
    .on('end', () => {
      cb(null, fileContents);
    });
  // const readStream = fs.createReadStream(fileName, { encoding: 'utf8' });

  // readStream.on('data', (chunk) => {
  //   fileContents.push(chunk);
  // });

  // readStream.on('error', (err) => {
  //   console.log('Error while reading contents of file using streams, ERROR:', err);
  //   cb('Encountered error while reading file contents using streams..!', null);
  // });
 
  // readStream.on('end', () => {
  //   const lines = fileContents.join('').split('\n');
  //   cb(null, lines);
  // });
  
   
}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  const filteredData = fileContents.filter((record) => {
    return record.children === '0';
  });

  // use lodash.compact() to remove any falsy values from the filtered data array
  const compactedData = lodash.compact(filteredData);

  cb(null, compactedData);
  
}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
 }
