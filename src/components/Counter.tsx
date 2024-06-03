export function Counter() {


  return (
    <form
      className="bg-purple p-10 text-neutral-light flex flex-col rounded-lg gap-10"
    >
      <label 
        htmlFor="daily-steps"
      >
        How many steps did you take today?
      </label>
      <input 
        type="number" 
        name="daily-steps" 
        id="daily-steps" 
        className="rounded-md px-4 py-1 text-purple font-bold "
      />
      <button>Record</button>
    </form>
  )
}