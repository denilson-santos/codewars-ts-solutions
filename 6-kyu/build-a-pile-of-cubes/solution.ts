export function findNb(m: number): number {
  let count = 0;
  let total = 0;

  while (total < m) {
    count++;
    total = 0;

    for (let i = 0; i < count; i++) {
      total += (count - i) * (count - i) * (count - i);
    }
  }

  return m === total ? count : -1;
}
