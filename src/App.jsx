import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const onChengeTodoText = (event) => setTodoText(event.target.value);
  const onChengeAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setImcompleteTodos(newImcompleteTodos);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  const [completeTodos, setCompleteTodos] = useState([]);
  const onClickBack = (index) => {
    const backCompleteTodos = [...completeTodos];
    backCompleteTodos.splice(index, 1);

    const backImompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(backCompleteTodos);
    setImcompleteTodos(backImompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChengeTodoText}
        onClick={onChengeAdd}
      />
      <IncompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
