/**
 * @param  {number[]} arr
 * @param  {number} s
 * @param  {number} e
 * @param  {number} target
 * @returns number
 */
const findIndex = (arr:number[], s:number, e:number, target:number):number => {
	let c:number = s + Math.floor((e - s + 1) /2);
	if(arr[s] >= target) return s
	if(arr[e] === target) return e
	if(arr[c] === target) return c
	if(arr[e] <= target) return e + 1
	if(e === c) return c
	if(s === c) return c + 1
	if(arr[c] > target ){
		return findIndex(arr, s, c, target)
	} 
	return findIndex(arr, c, e, target)
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = (nums:number[], target:number):number => {
  if(nums.length === 0) return 0
  return findIndex(nums, 0, nums.length - 1, target);  
};