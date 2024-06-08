import { Calendar } from "./components/Calendar";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";
import { getNumberOfDays, getFirstDay, generateDays, dayArr } from "./Utils";

function App() {
  const daysInMonth = getNumberOfDays(6, 2024);
  const firstDay = getFirstDay(6, 2024);
  const calendarArr = generateDays(daysInMonth, firstDay);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Title />
      <Counter />
      <Calendar
        dayArr={dayArr}
        // daysInMonth={daysInMonth}
        calendarArr={calendarArr}
      />
    </main>
  );
}

export default App;
