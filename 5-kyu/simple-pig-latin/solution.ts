export const pigIt = (a: string): string => {
  return a
    .split(' ')
    .map((word) =>
      word.length == 0 || (word.length == 1 && /[!?.]/.test(word))
        ? word
        : word.replace(word, word.slice(1) + word[0] + 'ay')
    )
    .join(' ');
};
