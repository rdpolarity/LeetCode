function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  nums.forEach((num, index) => {
    nums.forEach((num2, index2) => {
      if (index == index2) return;
      if (num + num2 == target) {
        result = [index, index2];
      }
  });
  });
  return result as number[];
}