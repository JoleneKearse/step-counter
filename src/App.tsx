import { Calendar } from "./components/Calendar";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";
import { getNumberOfDays } from "./Utils";

function App() {
  const daysInMonth = getNumberOfDays(2024, 6);
  
  return (
    <>
      <Title />
      <Counter />
      <Calendar daysInMonth={daysInMonth} />
    </>
  );
}

export default App;
