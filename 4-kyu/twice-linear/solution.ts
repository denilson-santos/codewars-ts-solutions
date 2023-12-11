export function dblLinear(n: number): number {
  const u: number[] = [1];
  let i = 0;
  let j = 0;

  while (u.length <= n) {
    const y = 2 * u[i] + 1;
    const z = 3 * u[j] + 1;

    if (y < z) {
      u.push(y);
      i++;
    } else if (y > z) {
      u.push(z);
      j++;
    } else {
      u.push(y);
      i++;
      j++;
    }
  }

  return u[n];
}
