import { useEffect, useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: nextId++, title: action.title, completed: false },
      ];
    case "remove":
      return state.filter((t) => t.id !== action.id);
    case "change":
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    default:
      throw new Error("action undefined", action.type);
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  const [title, setTitle] = useState("");

  function handleAddTask(title) {
    if (title !== "") {
      dispatch({ type: "add", title });
      setTitle("");
    }
  }

  function handleRemoveTask(id) {
    dispatch({ type: "remove", id });
  }

  function handleChangeTask(id, title) {
    dispatch({ type: "change", id, title });
  }

  return (
    <>
      <input
        id="add-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTask(title);
        }}
      />
      <button onClick={() => handleAddTask(title)}>Add</button>

      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              <input
                type="checkbox"
                value={task.completed}
                onChange={() => handleChangeTask(task.id)}
              />
              <label>{task.title}</label>
            </span>
            <span>
              <button>Edit</button>
              <button onClick={() => handleRemoveTask(task.id)}>remove</button>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

const initialTasks = [
  {
    id: 1,
    title: "getting the project done",
    completed: false,
  },
  {
    id: 2,
    title: "cooking the dinner",
    completed: true,
  },
];

let nextId = initialTasks.length;

export default App;
