import { Login } from "../components/Login";
import { HomePage } from "./HomePage";

import { Auth, GoogleAuthProvider } from "firebase/auth";

import { Navigate } from "react-router-dom";

type LandingPageProps = {
  auth: Auth;
  provider: GoogleAuthProvider;
  loggedIn: boolean;
  dayArr: string[];
  calendarArr: number[];
  // auth: Auth;
  // loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

export function LandingPage({ auth, provider, loggedIn, dayArr, calendarArr, setLoggedIn }: LandingPageProps) {
  return (
    <>
    {!loggedIn ? (<Login auth={auth} provider={provider} />) : (<HomePage
                dayArr={dayArr}
                calendarArr={calendarArr}
                auth={auth}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
              />)}
    </>
  )
}