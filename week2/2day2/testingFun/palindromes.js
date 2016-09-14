function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}

module.exports = isPalindrome;
