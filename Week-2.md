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
## Tuesday 📆
### 1. Well Of Ideas
``In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.``
```js
function well(x){
  var goodIdeas = 0;
  x.map((x)=>{
    if(x==='good'){
      goodIdeas++;
    }
  })
  if (goodIdeas===0) return 'Fail!'
  else if ((goodIdeas>2)) return 'I smell a series!'
  else return 'Publish!'
}
```
___
