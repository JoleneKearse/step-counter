export function getNumberOfDays(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
  
}

export function getFirstDay(month: number, year: number): number {
  return new Date(`${year}-${month}-01`).getDay();
}


export function generateDays(days: number, firstDay: number): number[] {
  if (firstDay === 0) {
    return Array.from({ length: days }, (_, i) => i + 1)
  } else {
    const intitial = Array.from({ length: days }, (_, i) => i + 1);
    return Array(firstDay).fill(0).concat(intitial);
  }
}

export const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];