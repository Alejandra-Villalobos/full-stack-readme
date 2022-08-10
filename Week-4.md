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
