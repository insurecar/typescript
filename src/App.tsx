import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import goalsImg from "./assets/goals.jpg";

import CourseGoalList from "./components/CourseGoalList";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (enteredGoal: string, enteredSummary: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: enteredGoal,
        description: enteredSummary,
      };
      return [...prev, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) =>
    setGoals((prev) => prev.filter((goals) => goals.id !== id));

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
