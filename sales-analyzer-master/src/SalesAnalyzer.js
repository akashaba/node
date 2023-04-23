
//import all the require module
const fs = require('fs')
const csv = require('csv-parser')
const lodash = require('lodash')
const path = require('path');
const { Transform } = require('stream');

const input = './resources/Sales.csv'
const output = 'output.txt'

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
const readFileContents = (fileName, cb) => {
  const fileContents = [];
  const readStream = fs.createReadStream(fileName, { encoding: 'utf8' });

  readStream.pipe(csv())
  .on('data', (data) => fileContents.push(data))
  .on('end', () => {
    cb(null, fileContents);
  })
  .on('error', (err) => {
       cb(err);
  });
}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  let filteredData = lodash.filter(fileContents, {payment_method: 'credit'})
  
  cb(null, filteredData);
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
    const outputFilePath = path.join(__dirname, 'output.txt');
    
    const writeStream = fs.createWriteStream(outputFilePath, { flags: 'a' });
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
      }
    });
  
    transformStream.pipe(writeStream);
  
    transformStream.on('error', (error) => {
      //console.error(`Error transforming data: ${error}`);
      cb(error);
    });
  
    writeStream.on('error', (error) => {
      // console.error(`Error writing data: ${error}`);
      cb(error);
    });
  
    writeStream.on('finish', () => {
      //console.log('Successfully wrote filtered data to output.txt file..!');
      cb(null, 'Successfully wrote filtered data to output.txt file..!');
    });
  
    // Write the filtered data to the stream
    let result = filteredData.split('\n');
    result.forEach((data) => {
      transformStream.write(`${data.date},${data.customer_id},${data.product_category},${data.payment_method},${data.value},${data.time_on_site},${data.clicks_in_site}\n`);
    });
  
    transformStream.end();
  };
    



module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
