type CalendarProps = {
  dayArr: string[],
  daysInMonth: number,
  calendarArr: number[],
}
export function Calendar({ dayArr, daysInMonth, calendarArr }: CalendarProps) {
  

  return (
    <section className="grid grid-cols-7 gap-4 pr-4 mt-10 grid-rows-8">
      {dayArr.map(day => (
        <div 
          key={day}
          className="flex flex-col items-center justify-center w-20 px-4 py-2 bg-pink-500 rounded-md text-neutral-light"
        >
          {day}
        </div>
      ))}
      {calendarArr.map(day => (
        <div 
          key={day}
          className="flex flex-col items-center justify-center w-20 px-4 py-2 rounded-md bg-purple-alpha"
        >
          <p className="text-neutral-light">{day}</p>
          
        </div>
      ))}
    </section>
  )
}