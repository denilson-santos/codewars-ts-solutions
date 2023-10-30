export function accum(s: string): string {
  let output = '';
  let arrStr = Array.from(s.toLowerCase());

  arrStr.forEach((char, index) => {
    output += char.toUpperCase();

    for (let i = 0; i < index; i++) {
      output += char;
    }

    if (index < arrStr.length - 1) output += '-';
  });

  return output;
}
