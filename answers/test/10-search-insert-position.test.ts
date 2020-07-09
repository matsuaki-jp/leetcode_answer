import {searchInsert} from '../10-search-insert-position'
test('ex1', () => {
	expect(searchInsert([1,3,5,6], 5)).toEqual(2);
	expect(searchInsert([1,3,5,6], 7)).toEqual(4);
	expect(searchInsert([1,3,5,6], 0)).toEqual(0);
	expect(searchInsert([1,3,5,6], 2)).toEqual(1);
	expect(searchInsert([], 2)).toEqual(0);
	expect(searchInsert([1], 2)).toEqual(1);
	expect(searchInsert([1], 0)).toEqual(0);
	expect(searchInsert([1], 1)).toEqual(0);
	expect(searchInsert([1,3,5], 4)).toEqual(2);
	expect(searchInsert([2,7,8,9,10], 9)).toEqual(3);
});
