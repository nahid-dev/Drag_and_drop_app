import React, { useState } from "react";

const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="p-2 bg-white border"
      />
      <button className="border bg-orange-200 p-2 ml-2" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default Input;
