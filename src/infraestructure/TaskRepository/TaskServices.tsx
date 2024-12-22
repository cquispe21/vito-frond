import { ITaskServices } from "../../application/Task/ITask";
import { ToDo } from "../../domain/Todo/task";
import { v4 as uuidv4 } from "uuid";

export default function TaskServices(): ITaskServices {
  const createTask = (task: ToDo) => {
    const taskget: ToDo[] = getTask();
    task.idTask = uuidv4();
    task.fechaCreacion = new Date();
    taskget.push(task);
    localStorage.setItem("Tareas", JSON.stringify(taskget));
  };

  const searchTask = (idTask: string): ToDo => {
   
    const taskget: ToDo[] = getTask();
    const task = taskget.find((task) => task.idTask === idTask);
    return task!;
  };

  const updateTask = (task: ToDo) => {
    const taskget: ToDo[] = getTask();
    const index = taskget.findIndex((f) => f.idTask === task.idTask);
    taskget[index] = task;
    localStorage.setItem("Tareas", JSON.stringify(taskget));
  };




  const getTask = (): ToDo[] => {
    const GETASK: ToDo[] = JSON.parse(localStorage.getItem("Tareas") || "[]");
    return GETASK;
  };
  return { createTask, getTask, searchTask,updateTask };
}
