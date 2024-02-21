// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  const uniqueNumbers = [...new Set(numbers)];
  const sortNumbers = uniqueNumbers.sort((a, b) => b - a);
  console.log(sortNumbers);

  const maxTwoNumber = sortNumbers.slice(0, 2);

  return maxTwoNumber;
};

console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19])); //[40,20]
console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19])); //[-2,-9]
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19])); //[40,20]
