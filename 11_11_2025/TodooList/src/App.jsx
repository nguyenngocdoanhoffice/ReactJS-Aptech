import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Javascript", completed: true },
    { id: 2, text: "Learn React", completed: false },
    { id: 3, text: "Build a React App", completed: true },
    { id: 4, text: "Learn Next Js", completed: false },
    { id: 5, text: "Learn Nuxt Js", completed: false },
    { id: 6, text: "Learn Flutter", completed: false },
    { id: 7, text: "Learn React Native", completed: false },
  ]);

  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const addTodo = (e) => {
    if (e.key === "Enter" && newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  return (
    <div className="container">
      <h1>THINGS TO DO</h1>

      <input
        className="input"
        placeholder="Add New"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={addTodo}
      />

      <div className="list">
        {filteredTodos.map((todo) => (
          <label key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </label>
        ))}
      </div>

      <div className="footer">
        <span>{todos.filter((t) => !t.completed).length} items left</span>

        <div className="filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
