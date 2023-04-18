const swapDigits = (number)=>{
    let swappedNumber = 0
  
    if (number > 0) {
let str = number.toString().split('');

  let start = (str.length % 2 == 0) ? 0 : 1;

  // Swap alternate digits by iterating over pairs of adjacent digits
  for (let i = start; i < str.length - 1; i += 2) {
    let temp = str[i];
    str[i] = str[i + 1];
    str[i + 1] = temp;
  }

  // Convert the swapped string back to a number and return it
  swappedNumber= Number(str.join(''))
    }
  if(isNaN(swappedNumber)||swappedNumber <=0){ 
    swappedNumber = +0;
    }
    
    return swappedNumber;
    
}
console.log(swapDigits(-123455))

module.exports = swapDigits
