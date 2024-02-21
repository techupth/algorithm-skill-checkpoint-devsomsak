// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  let charCount = {};
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
    }
  }

  let prev_str = [];
  for (let char in charCount) {
    if (charCount[char] === maxCount) {
      prev_str.push({ char: char, count: charCount[char] });
    }
  }

  return prev_str[0].char;
};

console.log(getMaxCharacters("abcccccccd")); //'c'
console.log(getMaxCharacters("apple 1231111")); //'1'
