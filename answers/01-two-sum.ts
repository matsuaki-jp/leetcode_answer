var nums = [0, 1, 4, 5, 2,0];
var target = 7;
console.log(main(nums, target));

function main(nums:Array<number>, target:number):Array<number> {
	for (let i = 0; i < nums.length; i++){
		for(let k = 0; k < nums.length; k++){
			if(i == k) continue;
			if(nums[i] + nums[k] === target){
				console.log('find it!')
				return [i, k]
			}
		}
	}
	return []
}
const twoSum = (nums, target) => {
	const group = {};
  
	for (let i = 0; i < nums.length; i++) {
	  const another = target - nums[i];
  
	  if (another in group) {
		return [group[another], i];
	  }
	  group[nums[i]] = i;
	  console.log(group);
	}
  
	return null;
  };
  console.log(twoSum(nums, target));