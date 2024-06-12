import { FormEvent, useRef } from "react";
import { Goals } from "../types/types";

type GoalsProps = {
  setGoals: (goals: Goals) => void;
};

export function GoalsForm({ setGoals }: GoalsProps) {
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const stepRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const startDate = startRef.current?.value
      ? new Date(startRef.current.value)
      : null;
    const endDate = endRef.current?.value
      ? new Date(endRef.current.value)
      : null;
    const stepGoal = stepRef.current?.value
      ? Number(stepRef.current.value)
      : null;
    const unitGoal = unitRef.current?.value ? unitRef.current.value : null;

    if (startDate && endDate && stepGoal && unitGoal) {
      const goalObj: Goals = {
        startDate,
        endDate,
        stepGoal,
        unitGoal,
      };
      setGoals(goalObj);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col items-center"
    >
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
          required
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
          required
        />
      </div>
      <div className="flex flex-col items-center gap-4 mb-4">
        <label
          htmlFor="stepGoal"
          className="leading-5 text-center text-neutral-200"
        >
          Distance
        </label>
        <input
          ref={stepRef}
          type="number"
          name="stepGoal"
          id="stepGoal"
          className="w-3/5 px-4 py-1 font-bold text-center rounded-md text-neutral-800 bg-neutral-200 md:w-2/5 lg:w-1/3"
          required
        />
      </div>
      <label
        htmlFor="units"
        className="flex flex-col items-center gap-4 mb-4 leading-5 text-center text-neutral-200"
      >
        Measurement
        <select
          name="units"
          id="units"
          ref={unitRef}
          required
          className="px-4 py-1 font-bold rounded-md bg-neutral-200 text-neutral-800"
        >
          <option
            value=""
            className="w-3/5 font-bold text-center rounded-md text-neutral-800 bg-neutral-200 md:w-2/5 lg:w-1/3"
          >
            --
          </option>
          <option value="km" defaultValue="km" className="font-bold">
            km
          </option>
          <option value="mi" className="font-bold">
            mi
          </option>
        </select>
      </label>
      <button
        type="submit"
        className="px-3 py-1 my-6 border border-4 rounded-md border-neutral-900 w-fit bg-gradient-to-br from-orange via-bright-salmon to-dusty-pink hover:bg-gradient-to-tl"
      >
        Set Goal
      </button>
    </form>
  );
}
