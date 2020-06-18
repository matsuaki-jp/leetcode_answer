// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
interface ListNode {
	val: number,
	next: ListNode | null
  }
 
  

export const addTwoNumbers = (l1:ListNode, l2:ListNode):ListNode => {
	let ResultNode:ListNode = {val:0, next:null}
	let result = sumNode(l1, l2, ResultNode, false);
	// console.log(result);
	return result;
};

export const sumNode = (l1:ListNode, l2:ListNode, result:ListNode, carryUp:boolean):ListNode => {
	if(l1 === null && l2 === null){
		if(carryUp){
			result = {val:1, next:null};
		} else {
			result = null
		}
		return result;
	} 
	result = {val:0, next:null}
	// console.log('l1');
	// console.log(l1);
	let val1 = l1 ? l1.val : 0
	let val2 = l2 ? l2.val : 0
	let plusOne = carryUp ? 1 : 0
	let sum = val1 + val2 + plusOne
	let carryupflag = false;
	if(sum < 10) {
		result.val = sum
	} else {
		carryupflag = true;
		result.val = Number(sum.toString().slice(-1))
	}
	let li1 = l1 ? l1.next : null
	let li2 = l2 ? l2.next : null 
	result.next = sumNode(li1, li2, result.next, carryupflag);
	return result
}

/**
 * convert array to num
 * @param  {Array<number>} list
 * @returns number
 */
const convertReverseNum = (list:Array<number>):number => {
	let num:string = '';
	for(let i = list.length - 1; i >= 0; i--){
		num += list[i].toString();
	}
	return Number(num);
}
/**
 * perseReverseArray
 * @param  {number} num
 * @returns Array
 */
const perseReverseArray = (num:number):Array<number> => {
	let str = num.toString();
	let output = [];
	for (let i = str.length - 1; i >= 0; --i) {
	output.push(Number(str[i]));
	}
	return output;
}
