//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.
function sum(arr) {
    let sum = 0;
    for (const num of arr)
        if (num > 0) sum += num;
    return sum;
}
//Very simple, given an integer or a floating-point number, find its opposite.
function findOppositeNum(num) {
    return num > 0 ? -num : Math.abs(num);
}
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeFirstAndLast(str) {
    return str.slice(1, str.length - 1);
}
//Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr(n, str) {
    let newStr = "";
    let x = 0;
    while (x < n) {
        x++;
        newStr += str;
    }
    return newStr;
}
module.exports = { sum, findOppositeNum, removeFirstAndLast, repeatStr };