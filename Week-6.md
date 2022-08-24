<h1 align="center">Week 6 :sparkles:</h1>

# Monday :calendar:
## 1. Expressions Matter
``Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()``

```sql
SELECT GREATEST (a*(b+c), a*b*c, a+b+c, (a+b)*c) AS res FROM expression_matter;
```
