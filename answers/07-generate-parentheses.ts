/**
 * @param  {string} str
 * @param  {number} maxIn
 * @param  {number} b
 * @param  {string[]} res
 */
const setPair = (str:string, maxIn:number, b:number, res:string[]) => {
	if(str.length === maxIn - 1 && b == 1){
		return res.push(str + ')')
	} else if (b >= 0 && b <= maxIn - str.length) {
		setPair(str + '(', maxIn, b + 1, res)
		setPair(str + ')', maxIn, b - 1, res)
	} else {
		return
	}
}

/**
 * @param {number} n
 * @return {string[]}
 */
export const generateParenthesis = (n:number):string[] => {
	if(n == 0) return [''];
	let res = [];
	let maxIndex = n * 2;
	let b = 0;
	setPair('', maxIndex, b, res)
	return res;
};
