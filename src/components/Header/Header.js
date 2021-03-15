import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="/todolist">할 일 목록</Link>
        </li>
        <li>
          <Link to="/addtodo">할 일 추가</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
