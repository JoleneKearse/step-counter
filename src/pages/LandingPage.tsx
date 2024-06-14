import { Login } from "../components/Login";

import { Auth, GoogleAuthProvider } from "firebase/auth";

type LandingPageProps = {
  auth: Auth;
  provider: GoogleAuthProvider;
}

export function LandingPage({ auth, provider }: LandingPageProps) {
  return (
    <Login auth={auth} provider={provider} />
  )
}