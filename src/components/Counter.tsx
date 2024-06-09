export function Counter() {
  return (
    <form className="flex flex-col items-center gap-6 p-10 rounded-full w-fit bg-neutral-800 md:gap-8 lg:gap-14">
      <label htmlFor="daily-steps" className="leading-5 text-center text-neutral-200">
        How many steps<br></br> did you take today?
      </label>
      <input
        type="number"
        name="daily-steps"
        id="daily-steps"
        className="w-3/5 px-4 py-1 font-bold text-center rounded-md text-neutral-800 bg-neutral-200 md:w-2/5 lg:w-1/3"
      />
      <button
        className="inline-block px-3 py-1 border border-4 rounded-md border-neutral-900 w-fit bg-gradient-to-br from-orange via-bright-salmon to-dusty-pink hover:bg-gradient-to-tl"
      >
        Record
      </button>
    </form>
  );
}
