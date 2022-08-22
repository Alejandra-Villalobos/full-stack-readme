<h1 align="center" >Week 5 :sparkles:</h1>

## Monday :calendar:
### 1. Fun with lists
``Implement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head)
where every element is the result of applying the given mapping method to each element of the original list.``
```js
function map(head, f) {
  return !head ? null : new Node(f(head.data), map(head.next, f));
}
```
___

## Tuesday :calendar:
### 1. Separating Strings
``Create a function that takes a string and separates it into a sequence of letters.``
```js
function sepStr(str) {
  var separated = []
  var splited = str.split(' ')
  var longestWord = str.split(' ').sort((a,b)=> b.length - a.length)[0]
  for(let i = 0; i <  longestWord.length; i++){
    var line = []
    splited.map((word)=>{
      line.push(word[i] || '')
    })
    separated.push(line)
  }
  
  return separated
}
```
___
## Wednesday :calendar:
### 1. Highest Scoring Word 
``Given a string of words, you need to find the highest scoring word.``
```js
function high(x){
  const words = x.split(' ')
  const wordValues = words.map((word)=>word
            .split('')
            .map((letter)=>letter.charCodeAt(0)-96)
            .reduce((a,b)=>a+b))
  return words[wordValues.indexOf(Math.max(...wordValues))]
}
```
___
