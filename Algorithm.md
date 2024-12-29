# The Algorithm of Love-o-Meter

This is a playful method that estimates the romantic compatibility between 2 individuals based on their names. It is kinda like FLAMES but more advanced. Let's see the different steps of the algo:

1. **Write Down the names:**
- Write your name & your partner's name side by side. (Write it alphabetically ordered.)

2. **Combine the names:**
- Merge the two names into a single string.

3. **Count each letter:**
- count the occurrences of each letter (A-Z) in the combined string.

**Create a Frequency String:**
- List the counts sequentially to form a number. For example, if 'A' appears 3 times, 'B' 1 time, and 'C' 2 times, you'd write "312".

Reduce the Number:
- Iteratively sum adjacent digits until a two-digit number remains:
- Add each pair of adjacent digits.
- If the result has more than two digits, repeat the process.

Interpret the Result:
- The final two-digit number represent the "compatibility percentage".