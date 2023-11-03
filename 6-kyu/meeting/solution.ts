export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map(
      (fullName) =>
        '(' + fullName.split(':')[1] + ', ' + fullName.split(':')[0] + ')'
    )
    .sort()
    .join('');
}
