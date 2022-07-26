class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let currentl1 : ListNode | null | undefined = l1;
  let currentl2 : ListNode | null | undefined = l2;
  while (l1?.next !== undefined || l2?.next !== undefined) {
    console.log(currentl1?.val);
    console.log(currentl2?.val);
    currentl1 = currentl1?.next;
    currentl2 = currentl2?.next;
  }

  return null;
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const l2 = new ListNode(1, new ListNode(2, new ListNode(3)));

addTwoNumbers(l1, l2);