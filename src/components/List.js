import React from "react";
import { GrCheckmark, GrClose } from "react-icons/gr";

const List = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const active = {
    textDecoration: "line-through",
  };
  const passive = {
    textDecoration: "none",
  };
  const list = () => {
    return todos.map((todo, index) => (
      <li key={index}>
        <span style={todo.completed ? active : passive}>{todo.content}</span>

        <div className="listButtons">
          <GrCheckmark
            className={todo.completed ? "status green" : "status"}
            onClick={() => handleComplete(todo)}
          />
          <GrClose className="delete" onClick={() => handleDelete(todo)} />
        </div>
      </li>
    ));
  };
  return (
    <main>
      <ul>{todos.length > 0 ? list() : <h1>No Task</h1>}</ul>
    </main>
  );
};

export default List;
