import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoListIndex from "./feactures/TodoList/TodoListIndex";
import Inicio from "./feactures/Inicio/Inicio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vito/tareas" />} />
      <Route path="/vito" element={<Inicio />}>
        <Route path="tareas" element={<TodoListIndex />} />
      </Route>
    </Routes>
  );
}

export default App;
