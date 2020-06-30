import {generateParenthesis} from '../07-generate-parentheses'

test('ex1', () => {
	expect(generateParenthesis(0)).toEqual(['']);
	expect(generateParenthesis(1)).toEqual(['()']);
	expect(generateParenthesis(2).sort()).toEqual(['()()', '(())'].sort());
	let result = ["((()))","(()())","(())()","()(())","()()()"].sort()
	expect(generateParenthesis(3).sort()).toEqual(result)
});
