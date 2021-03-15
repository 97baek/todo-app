import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
// import AddForm from "../AddForm/Addform";

function AddTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const todoRef = useRef(null);
  const detailRef = useRef(null);
  const history = useHistory();

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/todos/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: todoRef.current.value,
          detail: detailRef.current.value,
          isComplete: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다.");
          history.push(`/todolist`);
          setIsLoading(false);
        }
      });
    }
  };
  return (
    <form onSubmit={onSubmitTodo}>
      <label htmlFor="input-todo">해야 할 일</label>
      <input type="text" id="input-todo" ref={todoRef} />
      <label htmlFor="input-detail">설명</label>
      <input type="text" id="input-detail" ref={detailRef} />
      <button>저장!!</button>
    </form>
  );
}

export default AddTodo;
