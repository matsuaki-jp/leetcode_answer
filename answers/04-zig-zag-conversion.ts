export const convert = function(s:string, numRows:number):string {
	if(numRows == 1) return s
	let ans:string = ''
	let ansArr = []
	let i:number = 0
	let sign:number = 1;
	let distance = 2  * (numRows - 1)
	let putIndex = 0
	while(i < s.length){
		if(i === 0 || i % distance === 0){
			sign = 1;
		} else if (i === numRows - 1 || i % distance === numRows - 1) {
			sign = -1
		}
		if(ansArr[putIndex] == undefined) ansArr[putIndex] = ''
		ansArr[putIndex] += s[i]
		i++
		putIndex += sign 
	}
	ans = ansArr.join('')
	return ans
};