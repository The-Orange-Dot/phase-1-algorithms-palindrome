function isPalindrome(word) {
  return word.split("").reverse().join("") === word;
}

/* 
==============================

Should return TRUE if word is palindrome (ex. mom, racecar, pop)

==============================
*/

/*
  The "word" parameter is broken up into an array with split(),
  the letters are rearranged with the reverse() method,
  then joined back together with join() and compared with the original word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("pop"));
}

module.exports = isPalindrome;
