import React, { useEffect, useState } from "react";
import Form from "./Form";
import Items from "./Items";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col bg-gray-100 gap-8 items-center justify-center min-h-screen">
      <h1 className="text-3xl text-gray-800 font-extrabold border-b-4 pb-2 border-green-700">
        Todo List With React
      </h1>
      <Form input={input} onChange={handleChange} onSubmit={handleSubmit} />
      <div className="w-[400px]">
        {todos.map(({ id, text }) => (
          <Items key={id} id={id} text={text} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
