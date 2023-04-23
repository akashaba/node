const fs = require('fs');
const lodash = require('lodash');
const readline = require('readline')
//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = (fileName, cb) => {
  fs.readFile(fileName, (err, data) =>
    { 
      if (err) throw err;
    cb(null, data.toString());
});

}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  const data = fileContents
  .trim() // remove any leading/trailing white space
  .split('\n') // split the data into an array of rows
  .slice(1) // remove the header row
  .map((row) => {
    // split each row into an object with key-value pairs
    const [pid, product_name, brand, product_url, retail_price, discounted_price, product_rating] = row.split(',');
    return {
      pid,
      product_name,
      brand,
      product_url,
      price: parseFloat(retail_price), // convert the price to a number
      discounted_price,
      product_rating: parseInt(product_rating) || 0 // convert the rating to a number (default to 0 if not provided)
    };
  });

// use lodash.sortBy() to sort the data by price in descending order
const sortedData = _.sortBy(data, 'price').reverse();


  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
// //use map where ever required 
//   let sortedData = lodash.map(fileContents, 'rating');
  
// //use lodash sortBy() and compact() if required
//   sortedData = lodash.compact(sortedData);


//   //use lodash.reverse() if required
//   cb('Encountered error while reading file contents..!', null)
//This method will sortDataonRating 
const data = fileContents
    .trim() // remove any leading/trailing white space
    .split('\n') // split the data into an array of rows
    .slice(1) // remove the header row
    .map((row) => {
      // split each row into an object with key-value pairs
      const [pid, product_name, brand, product_url, retail_price, discounted_price, product_rating] = row.split(',');
      return {
        pid,
        product_name,
        brand,
        product_url,
        price: parseFloat(retail_price), // convert the price to a number
        discounted_price,
        rating: parseInt(product_rating) || 0 // convert the rating to a number (default to 0 if not provided)
      };
    });

  // use lodash.sortBy() to sort the data by rating in descending order
  const sortedData = _.sortBy(data, 'rating').reverse();

  
 
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
 
}





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}