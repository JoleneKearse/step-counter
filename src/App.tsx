import { Calendar } from "./components/Calendar";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";
import { getNumberOfDays, generateDays, dayArr } from "./Utils";

function App() {
  const daysInMonth = getNumberOfDays(2024, 6);
  const calendarArr = generateDays(daysInMonth);

  return (
    <>
      <Title />
      <Counter />
      <Calendar
        dayArr={dayArr}
        daysInMonth={daysInMonth}
        calendarArr={calendarArr}
      />
    </>
  );
}

export default App;
