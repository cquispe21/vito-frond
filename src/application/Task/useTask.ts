import { ToDo } from "../../domain/Todo/task";
import TaskServices from "../../infraestructure/TaskRepository/TaskServices";

export default function useTask() {
  const { createTask: createtask, getTask,searchTask:searchtask,updateTask:updatetask } = TaskServices();
  const createTask = (task: ToDo) => {
    createtask(task);
  };
  const getTasks = (): ToDo[] => {
    return getTask();
  };

  const searchTask = (idTask: string): ToDo => {
    return searchtask(idTask);
  };
  const updateTask = (task: ToDo) => {
    updatetask(task);
  }
  return { createTask, getTasks, searchTask,updateTask };
}
