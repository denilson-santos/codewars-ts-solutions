export const productFib = (prod: number): [number, number, boolean] => {
  let f: number[] = [];

  for (let n = 0; n < prod; n++) {
    if (n <= 1) {
      f.push(n);
    } else {
      f.push(f[n - 1] + f[n - 2]);

      if (f[n] * f[n - 1] === prod) {
        return [f[n - 1], f[n], true];
      } else if (f[n] * f[n - 1] > prod) {
        return [f[n - 1], f[n], false];
      }
    }
  }

  return [-1, -1, false];
};
