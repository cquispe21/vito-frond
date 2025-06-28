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
        <h2 className="font-semibold text-2xl dark:text-gray-50">Lista de Tickets</h2>
        <Button text="Crear Ticket" onClick={toggleModal} />
      </div>
      <ListTask />
    </>
  );
}
