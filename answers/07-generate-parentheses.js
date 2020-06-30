"use strict";
exports.__esModule = true;
/**
 * @param  {string} str
 * @param  {number} maxIn
 * @param  {number} b
 * @param  {string[]} res
 */
var setPair = function (str, maxIn, b, res) {
    if (str.length === maxIn - 1 && b == 1) {
        return res.push(str + ')');
    }
    else if (b >= 0 && b <= maxIn - str.length) {
        setPair(str + '(', maxIn, b + 1, res);
        setPair(str + ')', maxIn, b - 1, res);
    }
    else {
        return;
    }
};
/**
 * @param {number} n
 * @return {string[]} res
 */
exports.generateParenthesis = function (n) {
    if (n == 0)
        return [''];
    var res = [];
    var maxIndex = n * 2;
    var b = 0;
    setPair('', maxIndex, b, res);
    return res;
};
