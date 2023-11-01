export function rgb(r: number, g: number, b: number): string {
  let rgbToHex: { [key: number]: string } = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  let hexR = Math.trunc(r / 16);
  let hexR2 = (r / 16 - hexR) * 16;
  let hexG = Math.trunc(g / 16);
  let hexG2 = (g / 16 - hexG) * 16;
  let hexB = Math.trunc(b / 16);
  let hexB2 = (b / 16 - hexB) * 16;

  if (r < 0) {
    hexR = 0;
    hexR2 = 0;
  }

  if (r > 255) {
    hexR = 15;
    hexR2 = 15;
  }

  if (g < 0) {
    hexG = 0;
    hexG2 = 0;
  }

  if (g > 255) {
    hexG = 15;
    hexG2 = 15;
  }

  if (b < 0) {
    hexB = 0;
    hexB2 = 0;
  }

  if (b > 255) {
    hexB = 15;
    hexB2 = 15;
  }

  return (
    rgbToHex[hexR] +
    rgbToHex[hexR2] +
    rgbToHex[hexG] +
    rgbToHex[hexG2] +
    rgbToHex[hexB] +
    rgbToHex[hexB2]
  );
}
