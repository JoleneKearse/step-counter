import { Counter } from "../components/Counter";
import { Calendar } from "../components/Calendar";

type HomePageProps = {
  dayArr: string[];
  calendarArr: number[];
}

export function HomePage({ dayArr, calendarArr }: HomePageProps) {
  return (
    <>
      <Counter />
      <Calendar 
        dayArr={dayArr}
        calendarArr={calendarArr}
      />
    </>
  );
}
