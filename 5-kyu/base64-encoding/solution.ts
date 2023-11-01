const tableBase64: { [key: string]: string } = {
  '000000': 'A',
  '000001': 'B',
  '000010': 'C',
  '000011': 'D',
  '000100': 'E',
  '000101': 'F',
  '000110': 'G',
  '000111': 'H',
  '001000': 'I',
  '001001': 'J',
  '001010': 'K',
  '001011': 'L',
  '001100': 'M',
  '001101': 'N',
  '001110': 'O',
  '001111': 'P',
  '010000': 'Q',
  '010001': 'R',
  '010010': 'S',
  '010011': 'T',
  '010100': 'U',
  '010101': 'V',
  '010110': 'W',
  '010111': 'X',
  '011000': 'Y',
  '011001': 'Z',
  '011010': 'a',
  '011011': 'b',
  '011100': 'c',
  '011101': 'd',
  '011110': 'e',
  '011111': 'f',
  '100000': 'g',
  '100001': 'h',
  '100010': 'i',
  '100011': 'j',
  '100100': 'k',
  '100101': 'l',
  '100110': 'm',
  '100111': 'n',
  '101000': 'o',
  '101001': 'p',
  '101010': 'q',
  '101011': 'r',
  '101100': 's',
  '101101': 't',
  '101110': 'u',
  '101111': 'v',
  '110000': 'w',
  '110001': 'x',
  '110010': 'y',
  '110011': 'z',
  '110100': '0',
  '110101': '1',
  '110110': '2',
  '110111': '3',
  '111000': '4',
  '111001': '5',
  '111010': '6',
  '111011': '7',
  '111100': '8',
  '111101': '9',
  '111110': '+',
  '111111': '/',
};

export function toBase64(str: string): string {
  let output = '';
  let allBinaries = '';
  let charBinary = '';
  let charBinary6 = '';
  let binary6 = '';

  str.split('').forEach((char) => {
    charBinary = char.charCodeAt(0).toString(2);
    allBinaries += '0'.repeat(8 - charBinary.length) + charBinary;
  });

  for (let i = 6; i <= allBinaries.split('').length; i += 6) {
    binary6 = allBinaries.slice(i - 6, i);
    output += tableBase64[binary6];
  }

  return output;
}

export function fromBase64(str: string): string {
  let output = '';
  let allBinaries6 = '';
  let binary8 = '';

  str.split('').forEach((char) => {
    allBinaries6 += Object.keys(tableBase64).find(
      (key) => tableBase64[key] === char
    );
  });

  for (let i = 8; i <= allBinaries6.split('').length; i += 8) {
    binary8 = allBinaries6.slice(i - 8, i);
    output += String.fromCharCode(parseInt(binary8, 2));
  }

  return output;
}
