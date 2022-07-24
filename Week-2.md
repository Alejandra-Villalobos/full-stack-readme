<h1 align="center">Week 2 ✨</h1>

## Monday 📆
### 1. Palindrome Strings
``Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.``
```js
function isPalindrome(line) {
  if(typeof(line)==='number') line = line.toString();
  return line.split('').reverse().join('') === line ? true : false;
}
```
___
