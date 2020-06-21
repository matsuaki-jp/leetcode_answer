const isNumberString = (s:string):boolean => !isNaN(Number(s)) && s != undefined && s != ' '
const signOrNumber = (s:string):boolean => s == '+'||s == '-' ||isNumberString(s)
const roundOver32bitNumber = (n:number):number => {
	if(n >= 2147483647) return 2147483647
	if(n <= -2147483648) return -2147483648
	return n
}
/**
 * @param {string} str
 * @return {number}
 */
export const myAtoi = (str:string):number => {
	let trimed:string = str.trim()
	let num_str:string = ''
	for(let i = 0; i < trimed.length; i++){
		if(i == 0 ){
			if(signOrNumber(trimed[0])){
				num_str += trimed[0]
				continue;
			} 
			num_str = '0'
			break; 
		} else {
			if(!isNumberString(trimed[i])) break;
			num_str += trimed[i]
		}
	}
	if(!isNumberString(num_str)) return 0
	return roundOver32bitNumber(Number(num_str))
};
