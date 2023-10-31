import { MORSE_CODE } from './preloaded';

export function decodeMorse(morseCode: string): string {
  let result: string[] = [];
  let words = morseCode.trim().split('   ');
  let decodedWord = '';

  words.forEach((word) => {
    word.split(' ').forEach((letter) => {
      decodedWord += MORSE_CODE[letter];
    });

    result.push(decodedWord);
    decodedWord = '';
  });

  return result.join(' ');
}
