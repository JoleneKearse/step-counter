import { useState, useEffect } from "react";

import { LandingPage } from "./pages/LandingPage";
// import { Login } from "./components/Login";
import { HomePage } from "./pages/HomePage";
import { Title } from "./components/Title";
// import { GoalsForm } from "./components/GoalsForm";
// import { Calendar } from "./components/Calendar";
// import { Counter } from "./components/Counter";

import {
  getCurrentDate,
  getNumberOfDays,
  getFirstDay,
  generateDays,
  dayArr,
} from "./Utils";
import { config } from "./config/config";
import { Stats, Goals } from "./types/types";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // app variables
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  // I do want currentDate to let Count comp to know where to add the steps
  const currentDate = getCurrentDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  // set stats
  // const [stats, setStats] = useState<Stats | null>(null);
  // set current challenge goals
  // const [goals, setGoals] = useState<Goals | null>(null);

  // auth
  const app = initializeApp(config.firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // firestore database
  // const firestore = getFirestore();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
      console.log(loggedIn);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
      setLoading(false);
    });
    if (!loggedIn) return unsubscribe;
  }, [auth]);

  if (loading) {
    // TODO: change to loader
    return <p>Loading...</p>;
  }

  // generate calendar
  const daysInMonth = getNumberOfDays(month, year);
  const firstDay = getFirstDay(month, year);
  const calendarArr = generateDays(daysInMonth, firstDay);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Title />
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <HomePage
                dayArr={dayArr}
                calendarArr={calendarArr}
                auth={auth}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<LandingPage auth={auth} provider={provider} loggedIn={loggedIn} dayArr={dayArr} calendarArr={calendarArr} setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </main>
  );
}

export default App;
