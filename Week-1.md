<h1 align="center">Week 1 ✨</h1>

## Tuesday
### 1. Ensure question
``Given a string, write a function that returns the string with a question mark ("?") appends to the end,
unless the original string ends with a question mark, in which case, returns the original string.``
```js
function ensureQuestion(s) {
  const quest = s.endsWith('?') ? s : s.concat('?');
  return quest;
}
```

### 2. Reversed Words
``Complete the solution so that it reverses all of the words within the string passed in.``
```js
function reverseWords(str){
  return reversed = str.split(' ').reverse().join(' ')
}
```
___
## Wednesday
### 1. Smallest Integer In Array
``Given an array of integers your solution should find the smallest integer.``
```js
class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallest = args[0]
    args.map((x)=>{
      if(x<smallest){
        smallest = x
      }
    })
    return smallest
  }
}
```
___
