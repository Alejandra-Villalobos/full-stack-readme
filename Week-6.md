<h1 align="center">Week 6 :sparkles:</h1>

# Monday :calendar:
## 1. Expressions Matter
``Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()``

```sql
SELECT GREATEST (a*(b+c), a*b*c, a+b+c, (a+b)*c) AS res FROM expression_matter;
```
___
# Tuesday :calendar:
## 1. Sudoku Solution Validator
```js
function equals45(n) {
  return n == 45;
}

function validSolution(board) {
  let sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let osums = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
    }
  }
  for (let i = 0; i < 3; i++) if (!osums[i].every(equals45)) return false;
  return sumh.every(equals45) && sumv.every(equals45);
}
```
___
# Wednesday :calendar:
## 1. Even or Odd
``Return a table with a column is_even containing "Even" or "Odd" depending on number column values.``

```sql
SELECT CASE
  WHEN (number % 2 = 0) THEN 'Even'
  ELSE 'Odd'
END AS is_even
FROM numbers
```
___
# Thursday :calendar:
## 1. Returning Strings
``Write a select statement that takes name from person table and return "Hello, <name> how are you doing today?" results in a column named greeting``

```sql
SELECT 'Hello, ' || name || ' how are you doing today?' AS greeting FROM person
```
___
