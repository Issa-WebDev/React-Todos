import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
      setError(false);
    } else {
      setError(true);
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

      <form
        onSubmit={handleSubmit}
        className="relative w-[400px] pt-8 flex gap-3"
      >
        {error && (
          <p className="absolute top-0 text-red-500 italic">
            Please enter a valid todo
          </p>
        )}
        <input
          type="text"
          placeholder="Add New Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white p-2 outline-none border-none flex-1 rounded-md"
        />
        <button
          type="submit"
          className="py-2 px-4 outline-none border-none font-bold bg-blue-700 rounded-md text-white"
          disabled={!input.trim()}
        >
          Submit
        </button>
      </form>

      <div className="w-[400px]">
        {todos.map(({ id, text }) => (
          <ul key={id} className="w-full flex flex-col">
            <li className="relative w-full px-4 py-2 rounded-md font-semibold mb-2 bg-white">
              {text}
              <button
                className="absolute rounded-sm right-3 bg-red-200"
                onClick={() => handleDelete(id)}
              >
                ❌
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todo;
