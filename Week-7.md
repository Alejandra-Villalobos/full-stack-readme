<h1 align="center">Week 7 :sparkles:</h1>

## Monday :calendar:
### 1. SQL Basics: Simple NULL handling
``For this challenge you need to create a SELECT statement, this select statement must have NULL handling, using COALESCE and NULLIF.``
```sql
SELECT id,
COALESCE(NULLIF(name, ''), '[product name not found]') AS name,
price,
COALESCE(NULLIF(card_name, ''), '[card name not found]') AS card_name,
card_number,
transaction_date
FROM  eusales
WHERE PRICE > 50
```
___
