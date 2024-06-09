import { Calendar } from "./components/Calendar";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";
import { getNumberOfDays, getFirstDay, generateDays, dayArr } from "./Utils";
import { config } from "./config/config";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Login } from "./components/Login";


function App() {
  // app variables
  const [loggedIn, setLoggedIn] = useState(false);
  
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
  })
  
  // generate calendar
  const daysInMonth = getNumberOfDays(6, 2024);
  const firstDay = getFirstDay(6, 2024);
  const calendarArr = generateDays(daysInMonth, firstDay);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Title />
      {!loggedIn && <Login />}
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
