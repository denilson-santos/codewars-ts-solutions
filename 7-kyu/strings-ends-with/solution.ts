export function solution(str: string, ending: string): boolean {
  let equal = true;

  Array.from(ending).forEach((item: string, index: number) => {
    let findedItem = str[str.length - (ending.length - index)];
    if (findedItem != item) equal = false;
  });

  return equal;
}
