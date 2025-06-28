import { createContext, ReactNode, useEffect, useState } from "react";
import { ToDo } from "../../../domain/Todo/task";
import useTask from "../../../application/Task/useTask";

export interface ITodoContext {
  isOpen: boolean;
  toggleModal: () => void;
  createTask: (task: ToDo) => void;
  tasks: ToDo[];
  searchTask: (idTask: string) => void;
  task: ToDo | undefined;
  updateTask: (task: ToDo) => void;
  setTask: React.Dispatch<React.SetStateAction<ToDo | undefined>>;
  transition: boolean;
  setTransition: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoContext = createContext({});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  const [tasks, setTasks] = useState<ToDo[]>([]);
  const [task, setTask] = useState<ToDo | undefined>(undefined);
  const { createTask: create,getTasks:gettask,searchTask:searchtask,updateTask:updatetask } = useTask();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const createTask = (task: ToDo) => {
    create(task);
    getTasks();
    toggleModal();
  };

  const searchTask = (idTask: string) => {
    toggleModal();
    const res = searchtask(idTask);
    setTask(res);
  }

  const updateTask = (task: ToDo) => {
    updatetask(task);
    getTasks();
    toggleModal();
  }

  const getTasks = () => {
    const res = gettask();
    setTransition(false);
    setTasks(res);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const storage: ITodoContext = {
    setTransition,
    transition,
    isOpen,
    setTask,
    toggleModal,
    createTask,
    tasks,
    searchTask,
    task,
    updateTask
  };

  return (
    <TodoContext.Provider value={storage}>{children}</TodoContext.Provider>
  );
};

export default TodoContext;
