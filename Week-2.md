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
## Wednesday 📆
### 1. Managing Events in React JS
``Write a react component that will display the current value of our counter.``
```js
import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0
    }
    this.add = this.add.bind(this);
    this.rest = this.rest.bind(this);
  }
  add(){
      this.state.counter+=1
    }
  rest(){
      this.state.counter-=1
    }
  
  // Your event handlers 
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button type="button" onClick={this.rest} id="decrement">
            Decrement
          </button>
          <button type="button" onClick={this.add} id="increment">
            Increment
          </button>
      </div>
    )
  }
}
```
___
