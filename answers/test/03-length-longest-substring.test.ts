import {lengthOfLongestSubstring} from '../03-length-longest-substring'

test('basic', () => {
	expect(lengthOfLongestSubstring('bbbb')).toEqual(1);
  });
test('2str', () => {
expect(lengthOfLongestSubstring('bbbaba')).toEqual(2);
});
test('3str', () => {
expect(lengthOfLongestSubstring('abcabccba')).toEqual(3);
});
test('0str', () => {
expect(lengthOfLongestSubstring(" ")).toEqual(1);
});