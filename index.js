function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
/*1-Take the input string.
2-Reverse the string.
3-Compare the reversed string with the original string.
4-If they are the same, return true; otherwise, return false.
*/ 
/*
  Add written explanation of your solution here
*/
function isPalindrome(str) {
  // Step 2: Reverse the string
  const reversedStr = str.split('').reverse().join('');
  
  // Step 3 & 4: Compare and return result
  return str === reversedStr;
}

// Testing the function with the provided test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
