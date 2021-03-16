import React, { useState } from "react";

function Todo({ todo: t }) {
  const [todo, setTodo] = useState(t);
  const [isComplete, setIsComplete] = useState(todo.isComplete);

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
      console.log(isComplete);
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
      <div className="todo-content">
        {todo.todo}
        <input type="checkbox" checked={isComplete} onChange={onClickComplete} />
        <button onClick={delTodo}>삭제</button>
      </div>
      <div className="todo-detail">{todo.detail}</div>
    </li>
  );
}

export default Todo;
