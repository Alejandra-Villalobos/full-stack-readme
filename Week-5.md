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
