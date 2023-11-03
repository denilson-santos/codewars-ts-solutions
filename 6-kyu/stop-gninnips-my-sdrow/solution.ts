export function spinWords(words: string): string {
  let output = '';
  let arrWords = words.split(' ');

  arrWords.forEach((word, index) => {
    if (word.length >= 5) {
      let arrWord = Array.from(word);

      arrWord.forEach(
        (char, index) => (output += arrWord[arrWord.length - 1 - index])
      );
    } else {
      output += word;
    }

    if (index < arrWords.length - 1) output += ' ';
  });

  return output;
}
