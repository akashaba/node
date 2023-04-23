//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
 let strArray = str.split('');
 let vowels = 'aeiouAEIOU'.split('');
 let count = 0;
 for (let i = 0; i < strArray.length; i++) {
   if (vowels.includes(strArray[i])) {
     count++;
   }
 }

 return count;
}
//console.log(countVowels('Hello World'));

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].includes(checkStr)) {
      return true;
      break;
    }
  }
  return false;
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {

  return str.replace(wordToBeReplaced, replaceWord);
}
// console.log(replaceWord('Hello World', 'World', 'Hello'));

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  let strArray = str.split(' ');
  strArray = strArray.map(word => word.charAt(0).toUpperCase()+word.slice(1));
  return strArray.join(' ');
  
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  let strArray = str.split(' ');
  let longestWord = strArray[0];
  for (let i = 1; i < strArray.length; i++) {
    if (strArray[i].length > longestWord.length) {
      longestWord = strArray[i];
    }
  }
  return longestWord;
  
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}