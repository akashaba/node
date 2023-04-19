var category = function category(key) {
  
  let category = ''

  switch (key) {
    case 'pl':
      category = 'Personal Loan'
      break;

    case 'Vl':
      category = 'Vehicle Loan'
      break;

    case 'EL':
      category = 'Education Loan'
      break;

    case 'hL':
      category = 'Home Loan'
      break;
    default:
      break;

      
  }
  return category
  };
  
  console.log(category('pl'));
  module.exports = {
    category: category
  };