import {myAtoi} from '../05-string-to-integer'

test('ex1', () => {
	expect(myAtoi('42')).toEqual(42);
  });
  test('ex2', () => {
	expect(myAtoi('   -42')).toEqual(-42);
  });
  test('ex3', () => {
	expect(myAtoi('4193 with words')).toEqual(4193);
  });
  test('ex4', () => {
	expect(myAtoi('words and 987')).toEqual(0);
  });
  test('ex5', () => {
	expect(myAtoi('-91283472332')).toEqual(-2147483648);
  });
  test('plus overflow', () => {
	expect(myAtoi('+91283472332')).toEqual(2147483647);
  });
  test('fails', () => {
	expect(myAtoi('   -88827   5655  U')).toEqual(-88827);
  });
