export function Login() {
  return (
    <section className="flex flex-col items-center gap-2 px-4 -mt-5">
      <p className="text-neutral-200">
        You signed up for a stepping challenge - hooray!
      </p>
      <p className="text-neutral-200">
        You do the hard work, and we'll cheer you on while doing the tracking.
      </p>
      <p className="text-neutral-200">
        Sign up, pick a timeframe & overall goal.
      </p>
      <p className="text-neutral-200">
        We'll break it into a daily goal and track when you're below, above, or
        bang on!
      </p>
      <img src="/logo.svg" alt="sneakers walking" className="-mt-5" />
      <button
        className="inline-block px-3 py-1 border border-4 rounded-md border-neutral-900 w-fit bg-gradient-to-br from-orange via-bright-salmon to-dusty-pink hover:bg-gradient-to-tl"
      >
        Login with Google!
      </button>
    </section>
  );
}
