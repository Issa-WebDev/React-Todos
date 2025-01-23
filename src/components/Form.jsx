import React from "react";

const Form = ({ input, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="relative w-[400px] pt-8 flex gap-3">
        <input
          type="text"
          placeholder="Add New Todo..."
          value={input}
          onChange={onChange}
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
    </>
  );
};

export default Form;
