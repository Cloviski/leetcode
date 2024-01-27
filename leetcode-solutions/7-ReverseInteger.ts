/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

function reverse(x: number): number {
  const reversedString = x.toString().split("").reverse().join("");

  const reversedNumber =
    x < 0 ? -parseInt(reversedString, 10) : parseInt(reversedString, 10);

  const INT32_MAX = Math.pow(2, 31) - 1;
  const INT32_MIN = -Math.pow(2, 31);
  if (reversedNumber > INT32_MAX || reversedNumber < INT32_MIN) {
    return 0;
  }

  return reversedNumber;
}
