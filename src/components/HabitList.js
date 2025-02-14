import React, { useState, useEffect } from "react";
import { addHabit, getHabits } from "../firebase"; 

const HabitList = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const fetchHabits = async () => {
    const habitsData = await getHabits();
    setHabits(habitsData);
  };

  const handleAddHabit = async () => {
    if (newHabit.trim()) {
      await addHabit(newHabit);
      setNewHabit(""); // Clear input
      fetchHabits(); // Refresh the habit list
    }
  };

  useEffect(() => {
    fetchHabits(); // Fetch habits when component mounts
  }, []);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Enter new habit"
      />
      <button onClick={handleAddHabit}>Add Habit</button>

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.habit} - {habit.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
