// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
    let arrangeStr = [];
    let newStr = [];
    let newStrLength = 0;
    for (let i = 0; i < str.length; i++) {
      arrangeStr = str[i];
      console.log(arrangeStr);
      if(/[a-zA-Z]/.test(arrangeStr)){
        console.log(arrangeStr);
        newStr+=arrangeStr.toLowerCase();
        console.log(newStr);
      }
    }
    
     for (let i = 0; i < newStr.length/2; i++) {
      console.log(newStr.length/2);
      if(newStr[i] !== newStr[newStr.length-1-i]){
        return false
      }
    }
        return true
};
