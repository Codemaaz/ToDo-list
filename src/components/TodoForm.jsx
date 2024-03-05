import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, complete: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex justify-center ">
      <input
        type="text"
        placeholder="Enter your task..."
        className="w-80 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/90 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 font-bold` text-white shrink-0 bg-orange-400 hover:bg-orange-500"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
