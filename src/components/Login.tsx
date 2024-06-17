import { signInWithPopup, Auth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

type LoginProps = {
  auth: Auth;
  provider: GoogleAuthProvider;
};

export function Login({ auth, provider }: LoginProps) {
  const firestore = getFirestore();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("login success");

      if (user) {
        const userRef = doc(firestore, `users/${user.uid}`);
        await setDoc(userRef, {
          email: user.email,
        }, { merge: true })
        
      }
    } catch (err) {
      console.log(err);
      // TODO: Display error message to user
    }
  }
  return (
    <section className="flex flex-col items-center gap-2 px-4 -mt-5">
      <p className="text-neutral-200">
        You signed up for a step challenge - hooray!
      </p>
      <p className="text-center text-neutral-200">
        You do the hard work, we'll cheer you and help in our own way.
      </p>
      <p className="text-neutral-200">
        Sign up, pick a timeframe & overall goal.
      </p>
      <p className="text-center text-neutral-200">
        We'll break it into a daily goal and track when you're below, above, or
        bang on!
      </p>
      <img src="/logo.svg" alt="sneakers walking" className="-mt-5" />
      <button
        className="inline-block px-3 py-1 border border-4 rounded-md border-neutral-900 w-fit bg-gradient-to-br from-orange via-bright-salmon to-dusty-pink hover:bg-gradient-to-tl"
        onClick={handleLogin}
      >
        Login with Google!
      </button>
    </section>
  );
}
