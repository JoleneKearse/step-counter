export function Counter() {
  return (
    <form className="flex flex-col items-center w-3/5 gap-10 p-10 rounded-3xl bg-neutral-800">
      <label htmlFor="daily-steps" className="text-neutral-200">
        How many steps did you take today?
      </label>
      <input
        type="number"
        name="daily-steps"
        id="daily-steps"
        className="px-4 py-1 font-bold rounded-md text-neutral-800 bg-neutral-200 "
      />
      <button
        className="inline-block px-3 py-1 rounded-md w-fit bg-gradient-to-br from-orange via-bright-salmon to-dusty-pink hover:bg-gradient-to-tl"
      >
        Record
      </button>
    </form>
  );
}
