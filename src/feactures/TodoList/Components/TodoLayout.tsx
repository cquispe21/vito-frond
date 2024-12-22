import { useContext } from "react";
import Button from "../../../shared/Components/Button/Button";
import ModalTareas from "./ModalTareas/ModalTareas";
import TodoContext, { ITodoContext } from "../Context/TodoContext";
import ListTask from "./ListTask";

export default function TodoLayout() {
  const { isOpen, toggleModal } = useContext(TodoContext) as ITodoContext;
  return (
    <>
      <ModalTareas isOpen={isOpen} onClose={toggleModal} />
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Lista de Tareas</h2>
        <Button text="Agregar Tarea" onClick={toggleModal} />
      </div>
      <ListTask />
    </>
  );
}
