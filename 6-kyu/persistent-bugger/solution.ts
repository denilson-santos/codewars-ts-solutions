export function persistence(num: number): number {
  let arrNum = num.toString().split('');
  let total = num;
  let count = 0;

  while (total >= 10) {
    total = 1;

    for (let i = 0; i < arrNum.length; i++) total *= parseInt(arrNum[i]);

    arrNum = total.toString().split('');
    count++;
  }

  return count;
}
