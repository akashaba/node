
//import the lodash module
const lodash = require ('lodash')


//Create a function to find a maximum value from number array.
function findMaxValue(array){
  return lodash.max(array)
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​

function filterValues(array, value){
  return lodash.filter(array, (v)=> v> value)
}


//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(array){
  return lodash.toUpper(array)
}




module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
