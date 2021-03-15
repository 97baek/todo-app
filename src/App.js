import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/todolist">
          <TodoList />
        </Route>
        <Route path="/addtodo">
          <AddTodo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
