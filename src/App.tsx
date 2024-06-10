import { useState } from "react";

import { Login } from "./components/Login";
import { GoalsForm } from "./components/GoalsForm";
import { Calendar } from "./components/Calendar";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";

import {
  getCurrentDate,
  getNumberOfDays,
  getFirstDay,
  generateDays,
  dayArr,
} from "./Utils";

import { config } from "./config/config";

import { Goals } from "./types/types";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

function App() {
  // app variables
  const [loggedIn, setLoggedIn] = useState(false);
  const currentDate = getCurrentDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const [goals, setGoals] = useState<Goals | null>(null);

  // auth
  const app = initializeApp(config.firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // generate calendar
  const daysInMonth = getNumberOfDays(month, year);
  const firstDay = getFirstDay(month, year);
  const calendarArr = generateDays(daysInMonth, firstDay);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Title />
      {!loggedIn && <Login auth={auth} provider={provider} />}
      {!goals && <>{<GoalsForm setGoals={setGoals} />}</>}
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
