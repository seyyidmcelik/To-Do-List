import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import "./style.scss";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <Header />
      <List
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
