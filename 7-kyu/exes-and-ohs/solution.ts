export function xo(str: string): boolean {
  let x = str.split("").filter((item) => /x/i.test(item));
  let o = str.split("").filter((item) => /o/i.test(item));

  return x.length === o.length;
}
