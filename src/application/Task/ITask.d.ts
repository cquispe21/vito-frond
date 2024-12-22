export interface ITaskServices {
    createTask(task:ToDo):void;
    getTask():ToDo[];
    searchTask(idTask:string):ToDo;
    updateTask(task:ToDo):void;
}