import { addTwoNumbers } from '../02-add-two-numbers';

interface ListNode {
  val: number,
  next: ListNode | null
}



test('basic', () => {
  let l1:ListNode =  {
    val: 2,
    next: { val: 4, next:  { val: 3, next: null } }
  };
  let l2:ListNode =  {
    val: 2,
    next: { val: 4, next:  { val: 3, next: null } }
  };
  let except:ListNode = {
    val:4,
    next: { val: 8, next:  { val: 6, next: null } }
  };
  expect(addTwoNumbers(l1, l2)).toEqual(except);
});
test('basic', () => {
  let l1:ListNode =  {
    val: 1,
    next: { val: 8, next: null  }
  };
  let l2:ListNode =  {
    val: 0,
    next: null  };
  let except:ListNode = {
    val:1,
    next: { val: 8, next: null }
  };
  expect(addTwoNumbers(l1, l2)).toEqual(except);
});
