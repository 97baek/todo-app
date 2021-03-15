import React, { useState } from "react";

function Todo({ todo: t }) {
  const [todo, setTodo] = useState(t);
  const [isComplete, setIsComplete] = useState(false);

  const onClickComplete = () => {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        isComplete: !isComplete,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsComplete(!isComplete);
      }
    });
  };

  const delTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setTodo({ id: 0 });
        }
      });
    }
  };

  if (todo.id === 0) {
    return null;
  }

  return (
    <li>
      {todo.todo}
      <button onClick={onClickComplete}>{todo.isComplete ? "완료됨" : "남음"}</button>
      <button onClick={delTodo}>삭제</button>
    </li>
  );
}

export default Todo;
