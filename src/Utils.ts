export function getNumberOfDays(month: number, year: number): number[] {
  const numberOfDays = new Date(year, month, 0).getDate() - 1;
  return Array.from({ length: numberOfDays }, (_, i) => i + 1)
}
