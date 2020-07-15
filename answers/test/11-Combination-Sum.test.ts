import {combinationSum} from '../11-Combination-Sum'
test('ex1', () => {
	expect(combinationSum( [2,3,5], 8)).toEqual(
		[
			[2,2,2,2],
			[2,3,3],
			[3,5]
		  ]

	);
	expect(combinationSum( [2,3], 1)).toEqual(
		[]

	);
});
