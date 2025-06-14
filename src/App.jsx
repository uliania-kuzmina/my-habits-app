import { useState } from "react";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

  const addHabit = () => {
    if (input.trim()) {
      setHabits([...habits, {text: input, done:false}]);
      setInput("");
    }
  };

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  return (
    <div className="App">
      <h1>Трекер привычек</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите привычку"
      />

      <button onClick={addHabit}>Добавить</button>

      <ul>
        {habits.map((habits, index) => (
          <li
          key = {index}
            onClick = {() => toggleHabit(index)}
            style = {{
              textDecoration: habits.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {habits.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;