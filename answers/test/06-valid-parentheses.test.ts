import {isValid} from '../06-valid-parentheses'

test('ex1', () => {
	expect(isValid('[]')).toEqual(true);
  });
  test('ex2', () => {
	expect(isValid('{[]}')).toEqual(true);
  });
  test('ex3', () => {
	expect(isValid('{}[]{}')).toEqual(true);
  });
  test('ex4', () => {
	expect(isValid('{[)}')).toEqual(false);
  });
  test('ex5', () => {
	expect(isValid('{)}')).toEqual(false);
  });
