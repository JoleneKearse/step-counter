export function Counter() {
  return (
    <form className="flex flex-col gap-10 p-10 rounded-lg bg-neutral-800">
      <label htmlFor="daily-steps" className="text-neutral-200">
        How many steps did you take today?
      </label>
      <input
        type="number"
        name="daily-steps"
        id="daily-steps"
        className="px-4 py-1 font-bold rounded-md text-neutral-800 bg-neutral-200"
      />
      <button>Record</button>
    </form>
  );
}
