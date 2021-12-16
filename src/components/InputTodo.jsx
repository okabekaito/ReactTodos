import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="タスクを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>登録</button>
    </div>
  );
};
