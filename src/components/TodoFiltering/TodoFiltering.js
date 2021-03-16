import React from "react";

function TodoFiltering({ filterAll, filterComplete, filterOngoing }) {
  return (
    <div className="filter">
      <button onClick={filterAll}>모두 보기</button>
      <button onClick={filterComplete}>완료</button>
      <button onClick={filterOngoing}>진행 중</button>
    </div>
  );
}

export default TodoFiltering;
