export function getNumberOfDays(month: number, year: number): number {
  return new Date(year, month, 0).getDate() - 1;
  
}

export function generateDays(days: number): number[] {
  return Array.from({ length: days }, (_, i) => i + 1)
}


export const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];