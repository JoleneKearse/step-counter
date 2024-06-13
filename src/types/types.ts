export type Goals = {
  startDate: Date,
  endDate: Date,
  stepGoal: number,
  unitGoal: string,
}

export type Stats = {
  name: string,
  preferredUnit: string,
  averageStepDistance: number | null,
  gender: string | null,
  height: number | null,
  weight: number | null,
  age: number | null,
}