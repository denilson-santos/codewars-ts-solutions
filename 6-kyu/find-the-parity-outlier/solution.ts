export function findOutlier(integers: number[]): number {
  const oddIntegers = integers.filter((integer) => integer % 2 !== 0);

  const evenIntegers = integers.filter((integer) => integer % 2 === 0);

  return oddIntegers.length === 1 ? oddIntegers[0] : evenIntegers[0];
}
