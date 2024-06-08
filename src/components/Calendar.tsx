type CalendarProps = {
  dayArr: string[];
  // daysInMonth: number,
  calendarArr: number[];
};
export function Calendar({ dayArr, calendarArr }: CalendarProps) {
  return (
    <section className="grid grid-cols-7 gap-4 pr-4 mt-10 grid-rows-7">
      {dayArr.map((day) => (
        <div
          key={day}
          className="flex flex-col items-center justify-center w-20 px-4 py-2 rounded-md bg-neutral-700 text-neutral-light"
        >
          {day}
        </div>
      ))}
      {calendarArr.map((day) => (
        <div
          key={day}
          className="flex flex-col items-center justify-center w-20 px-4 py-2 rounded-md bg-purple-alpha text-neutral-600"
        >
          <p className="text-neutral-light">{day === 0 ? " " : day}</p>
        </div>
      ))}
    </section>
  );
}
