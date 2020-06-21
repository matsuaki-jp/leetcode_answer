import {convert} from '../04-zig-zag-conversion'

test('basic', () => {
	expect(convert('012345', 2)).toEqual('024135');
  });
  test('3space', () => {
	expect(convert('012345', 3)).toEqual('041352');
  });
  test('1space', () => {
	expect(convert('012345', 1)).toEqual('012345');
  });
