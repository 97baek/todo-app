import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import TodoFiltering from "../TodoFiltering/TodoFiltering";
function TodoList() {
  const [todos, setTodos] = useState([]);
  let initialTodos = [];

  useEffect(() => {
    fetch(`http://localhost:3001/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        initialTodos = [...todos];
        console.log(initialTodos);
      });
  }, []);

  const filterAll = () => {
    fetch(`http://localhost:3001/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  };

  const filterComplete = () => {
    fetch(`http://localhost:3001/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.filter((todo) => todo.isComplete === true));
      });
  };

  const filterOngoing = () => {
    fetch(`http://localhost:3001/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.filter((todo) => todo.isComplete === false));
      });
  };

  return (
    <>
      {/* <div className="filter">
        <button onClick={filterAll}>모두 보기</button>
        <button onClick={filterComplete}>완료</button>
        <button onClick={filterOngoing}>진행 중</button>
      </div> */}
      <TodoFiltering
        filterAll={filterAll}
        filterComplete={filterComplete}
        filterOngoing={filterOngoing}
      />
      <ul className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
