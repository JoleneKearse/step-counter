import { useEffect } from "react";

import { Counter } from "../components/Counter";
import { Calendar } from "../components/Calendar";

import { Auth, signOut, onAuthStateChanged } from "firebase/auth";
// import { Navigate } from "react-router-dom";

type HomePageProps = {
  dayArr: string[];
  calendarArr: number[];
  auth: Auth;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

export function HomePage({
  dayArr,
  calendarArr,
  auth,
  setLoggedIn,
  loggedIn,
}: HomePageProps) {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
    } catch (err) {
      console.error("Error signing out", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, [auth, setLoggedIn]);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <Counter />
      <Calendar dayArr={dayArr} calendarArr={calendarArr} />
      <button
        className="absolute text-neutral-200 -top-14 left-80 hover:opacity-50"
        onClick={handleLogOut}
      >
        <img src="/sign-out.png" alt="icon" />
      </button>
    </div>
  );
}
