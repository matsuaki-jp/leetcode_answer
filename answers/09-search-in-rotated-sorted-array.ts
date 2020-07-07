const getIndex = (arr:number[], target:number, s:number, e:number) => {
  const c = Math.floor((s+e)/2);
  if(arr[s] === target) return s
  if(arr[e] === target) return e
  if(arr[c] === target) return c
  if(s === c )return -1
  if(arr[s] < target && target < arr[c]){
    return getIndex(arr, target, s, c)
  } else if(arr[c] < target && target < arr[e]){
    return getIndex(arr, target, c, e)
  } else if(arr[c] < arr[s]) {
    return getIndex(arr, target, s, c)
  } else if (arr[e] < arr[c]){
    return getIndex(arr, target, c, e)
  }
  return -1
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = (nums:number[], target:number) => {
  return getIndex(nums, target, 0, nums.length - 1)    
};