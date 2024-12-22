import TodoLayout from "./Components/TodoLayout";
import { TodoProvider } from "./Context/TodoContext";

export default function TodoListIndex() {
  return (
    <>
      <TodoProvider>
        <TodoLayout />
      </TodoProvider>
    </>
  );
}
