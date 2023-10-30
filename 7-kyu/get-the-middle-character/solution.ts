export function getMiddle(s: string) {
  let arrStr = s.split('');

  if (arrStr.length > 2) {
    if (arrStr.length % 2 == 0) {
      // odd
      return arrStr[arrStr.length / 2 - 1] + arrStr[arrStr.length / 2];
    } else {
      // even
      return arrStr[Math.ceil(arrStr.length / 2) - 1];
    }
  }

  return s;
}
