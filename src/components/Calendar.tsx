type CalendarProps = {
  daysInMonth: number[],
}
export function Calendar({ daysInMonth }: CalendarProps) {
  

  return (
    <section className="flex flex-wrap items-center justify-start gap-4 pr-4 mt-10 mr-4">
      {daysInMonth.map(day => (
        <div 
          key={day}
          className="flex flex-col items-center justify-center w-20 px-4 py-2 bg-pink-500 rounded-md"
        >
          <p className="text-neutral-light">{day}</p>
          
        </div>
      ))}
    </section>
  )
}