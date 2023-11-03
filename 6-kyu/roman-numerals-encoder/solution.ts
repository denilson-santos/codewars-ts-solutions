export function solution(number: number): string {
  if (number < 0 || number > 3999)
    Error('Enter the valid values between 1 and 3999.');

  const romanValues = new Map<number, string[]>();

  romanValues.set(1000, ['M', 'MM', 'MMM']);
  romanValues.set(100, [
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
  ]);
  romanValues.set(10, ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']);
  romanValues.set(1, ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']);

  let result = '';
  let total = number;

  for (let romanProp of romanValues) {
    let index = Math.floor(total / romanProp[0]) - 1;

    if (index >= 0) {
      result += romanProp[1][index];
      total -= romanProp[0] * (index + 1);
    }
  }

  return result;
}
