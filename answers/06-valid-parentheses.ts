// change map
let myMap = new Map()
myMap.set('{','}')
myMap.set('(',')')
myMap.set('[',']')

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = (s:string):boolean => {
	let waitlist = []
    for (let i = 0; i < s.length; i++){
		if(myMap.has(s[i])){
			waitlist.push(
				myMap.get(s[i])
				)
				continue
		} else if(waitlist[waitlist.length - 1] == s[i]){
			waitlist.pop()
			continue
		} else {
				return false
			
		}
	}
	if(waitlist.length > 0) return false
	return true
};
