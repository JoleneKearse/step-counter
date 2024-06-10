import { FormEvent, useRef } from "react";

type GoalsProps = {
  goals: {
    startDate: Date,
    endDate: Date,
    stepGoal: number,
  },
  setGoals: (goals: object) => void,
};

export function GoalsForm({ goals, setGoals }: GoalsProps) {
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const stepRef = useRef<HTMLInputElement>(null);
  // const goalObj = {
  //   startDate: ,
  //   endDate: null,
  //   stepGoal: 0,
  // }
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (startRef !== null) goalObj.startDate = startRef.current.value
  // };
  
  return (
    <form onSubmit={() => handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-4 mb-4">
        <label
          htmlFor="startDate"
          className="leading-5 text-center text-neutral-200"
        >
          Start line
        </label>
        <input
          ref={startRef}
          type="date"
          name="startDate"
          id="startDate"
          className="px-2 py-1 font-bold rounded-md bg-neutral-200 text-neutral-800"
        />
      </div>
      <div className="flex flex-col items-center gap-4 mb-4">
        <label
          htmlFor="endDate"
          className="leading-5 text-center text-neutral-200"
        >
          Finish line
        </label>
        <input
          ref={endRef}
          type="date"
          name="endDate"
          id="endDate"
          className="px-2 py-1 font-bold rounded-md bg-neutral-200 text-neutral-800"
        />
      </div>
      <div className="flex flex-col items-center gap-4 mb-4">
        <label 
          htmlFor="stepGoal"
          className="leading-5 text-center text-neutral-200"
        >
          Step Goal
        </label>
        <input 
          ref={stepRef}
          type="number" 
          name="stepGoal" 
          id="stepGoal" 
          className="w-3/5 px-4 py-1 font-bold text-center rounded-md text-neutral-800 bg-neutral-200 md:w-2/5 lg:w-1/3"
        />
      </div>
      <button
        type="submit"
        className="px-3 py-1 my-6 border border-4 rounded-md border-neutral-900 w-fit bg-gradient-to-br from-orange via-bright-salmon to-dusty-pink hover:bg-gradient-to-tl"
      >
        Set Goal
      </button>
    </form>
  );
}