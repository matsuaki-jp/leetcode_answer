import {search} from '../09-search-in-rotated-sorted-array'

test('ex1', () => {
	expect(search([0, 2, 4, 6], 4)).toEqual(2);
	expect(search([0, 2, 4, 6], 5)).toEqual(-1);
	expect(search([6, 8, 2, 4], 4)).toEqual(3);
	expect(search([6, 8, 2, 4], 1)).toEqual(-1);
	expect(search([0], 1)).toEqual(-1);
	expect(search([1], 1)).toEqual(0);
	expect(search([4,5,6,7,0,1,2] ,0 )).toEqual(4);
	expect(search([4,5,6,7,8,1,2,3] ,8 )).toEqual(4);
});
