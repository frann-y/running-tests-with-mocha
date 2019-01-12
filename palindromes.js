function isPalindrome(s) {
  var stringReverse = s.split(" ").join("").split("").reverse().join(""); //split and join: ONLY DONE TO STRING REVERSE NOT S
  console.log(s);
  console.log(stringReverse);
  return s.split(" ").join("") === stringReverse; //SPLIT AND JOIN ON 'S'
}

module.exports = isPalindrome;


console.log(isPalindrome("ssss"))
console.log(isPalindrome("abc"));
console.log(isPalindrome("a santa at nasa"));
console.log(isPalindrome("this is a phrase"));
