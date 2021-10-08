import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  const onChangeHandle = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (input.trim().length > 0) {
      setTodos([
        ...todos,
        { id: uuidv4(), content: input.trim(), completed: false },
      ]);
      setInput("");
    } else {
      alert("Type something");
      setInput("");
    }
  };

  const clearTodo = () => {
    setTodos([]);
  };
  return (
    <section>
      <form onSubmit={onSubmitHandle}>
        <button className="clearCompleted" onClick={clearTodo}>
          Clear Completed
        </button>
        <br />
        <input
          type="text"
          value={input}
          onChange={onChangeHandle}
          placeholder="New todos"
        />
        <input type="submit" value="Add Task" onClick={addItem} />
      </form>
    </section>
  );
};

export default Form;
