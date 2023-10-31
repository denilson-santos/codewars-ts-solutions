export function countSmileys(arr: string[]): number {
  let count = 0;

  arr.forEach((item) => /[:;][-~]?[)D]/.test(item) && count++);

  return count;
}
