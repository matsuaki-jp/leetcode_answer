"use strict";
exports.__esModule = true;
var startString = [
    '{',
    '(',
    '['
];
var endString = [
    '}',
    ')',
    ']'
];
/**
 * @param {string} s
 * @return {boolean}
 */
exports.isValid = function (s) {
    var waitlist = [];
    for (var i = 0; i < s.length; i++) {
        var strIndex = startString.indexOf(s[i]);
        if (strIndex != -1) {
            waitlist.push(endString[strIndex]);
            continue;
        }
        else if (waitlist[waitlist.length - 1] == s[i]) {
            waitlist.pop();
            continue;
        }
        else {
            return false;
        }
    }
    if (waitlist.length > 0)
        return false;
    return true;
};
