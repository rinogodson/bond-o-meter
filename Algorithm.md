# The Algorithm of Bond-o-Meter

This is a playful method that estimates the romantic compatibility between 2 individuals based on their names.
This method is intended for entertainment and should not be taken as a serious measure of compatibility. It is kinda like FLAMES but more advanced. Let's see the different steps of the algo:

1. **Write Down the names:**
- Write your name & your partner's name side by side. (Write it alphabetically ordered.)

2. **Combine the names:**
- Merge the two names into a single string.

3. **Count each letter:**
- count the occurrences of each letter (A-Z) in the combined string.

4. **Create a Frequency String:**
- List the counts sequentially to form a number. For example, if 'A' appears 3 times, 'B' 1 time, and 'C' 2 times, you'd write "312".

5. **Reduce the Number:**
- Iteratively sum adjacent digits until a two-digit number remains:
- Add each pair of adjacent digits.
- If the result has more than two digits, repeat the process.

6. **Interpret the Result:**
- The final two-digit number represent the "compatibility percentage".

### Example:

Names:

Alice
Bob
Combined Name in alphabetical order:

AliceBob
Letter Counts:

A: 1
B: 2
C: 1
E: 1
I: 1
L: 1
O: 1
Frequency String:

"1211111"
Reduction Process:

1 + 2 = 3

2 + 1 = 3

1 + 1 = 2

1 + 1 = 2

1 (last digit remains as is)

New sequence: "33221"


3 + 3 = 6

3 + 2 = 5

2 + 2 = 4

2 + 1 = 3

New sequence: "6543"

6 + 5 = 11

5 + 4 = 9

4 + 3 = 7

New sequence: "1197"

1 + 1 = 2

1 + 9 = 10

9 + 7 = 16

New sequence: "21016"

2 + 1 = 3

1 + 0 = 1

0 + 1 = 1

1 + 6 = 7

New sequence: "3117"

3 + 1 = 4

1 + 1 = 2

1 + 7 = 8

New sequence: "428"

4 + 2 = 6

2 + 8 = 10

New sequence: "610"

6 + 1 = 7

1 + 0 = 1

New sequence: "71"

Compatibility Percentage: 71%