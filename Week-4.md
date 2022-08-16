<h1 align="center">Week 4 ✨</h1>

## Monday 📆
### 1. Two To One
``Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible,
containing distinct letters - each taken only once - coming from s1 or s2.``
```js
function longest(s1, s2) {
  var set = new Set((s1.concat(s2)).split('').sort());
  return [...set].join('')
}
```
___
## Tuesday 📆
### 1. Leap Years 
``In this kata you should simply determine, whether a given year is a leap year or not.``
```js
function isLeapYear(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? true : false
}
```
___
## Wednesday 📆
### 1. Maximum Length Difference
``You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.``

``Find max(abs(length(x) − length(y)))``
```js
function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1
  else{
    a1.sort((a,b) => a.length - b.length)
    a2.sort((a,b) => a.length - b.length)
    return Math.max(
      Math.abs(a1[0].length - a2[a2.length - 1].length),
      Math.abs(a2[0].length - a1[a1.length - 1].length)
    )
  }
}
```
___
## Thursday 📆
### 1. Base64 Numeric Translator
``Complete the method that will take a base-64 number (as a string) and output its base-10 value as an integer.``
```js
function base64toBase10(base64) {
    const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    if(base64.length===1) return b64.indexOf(base64)
    else{
       return base64.split('').reduce((a,b)=> a * 64 +b64.indexOf(b),0);
    }
}
```
