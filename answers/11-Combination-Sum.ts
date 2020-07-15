const loopDifference = (arr:number[], target:number, index:number, answerArr:number[][], thisArr:number[]) => {
	while(index < arr.length){
		let ans = thisArr.slice()
		if(target - arr[index] === 0) {
			ans.push(arr[index])
			answerArr.push(ans)
			return;
		} 
		if(target < 0) return ;
		let addAns = thisArr.slice()
		addAns.push(arr[index])
		loopDifference(arr, target - arr[index], index, answerArr, addAns)
		index++
	}
	return
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum = (candidates:number[], target:number):number[][] => {
    /**
	 * 1 <= candidates.length <= 30
	 * 1 <= candidates[i] <= 200
	 * Each element of candidate is unique.
	 * 1 <= target <= 500
	 */
	let answer = [];
	candidates.sort((a, b) =>  a - b);
	loopDifference(candidates, target, 0, answer, [])
	return answer;
};