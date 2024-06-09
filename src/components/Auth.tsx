import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function Auth() {
  const { children } = props;
  const auth = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("user not logged in");
    }
  })

  if (loading) return <p>Loading...</p>;

  return <>{children}</>
}