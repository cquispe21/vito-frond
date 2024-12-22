import { useContext } from "react";
import TodoContext, { ITodoContext } from "../Context/TodoContext";
import moment from "moment";
import DateIcon from "../../../shared/Icons/DateIcon";
import TicketIcon from "../../../shared/Icons/TicketIcon";
import UserIcon from "../../../shared/Icons/UserIcon";
import ComentarIcon from "../../../shared/Icons/ComentarIcon";

export default function ListTask() {
  const { tasks, searchTask } = useContext(TodoContext) as ITodoContext;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 my-2 mx-3 cursor-pointer">
        {tasks.map((task) => (
          <div
            key={task.idTask}
            onClick={() => searchTask(task.idTask)}
            className={` ${task.estado == "completada" && "bg-[#A7F3D0]"} bg-white shadow-md rounded-lg p-2 border border-gray-200 hover:shadow-lg transition-all` }
          >
            <div className="flex flex-col space-y-1.5 h-full">
              <div className="flex justify-between items-center gap-x-2">
                <h3 className="text-base flex justify-between items-center gap-x-2 font-semibold text-gray-800 overflow-x-auto">
                  <TicketIcon className="w-4 h-4 text-yellow-500 flex-shrink-0" />

                  <span className="flex-1 truncate">{task.titulo}</span>

                  <span
                    className={`px-3 py-1 text-xs font-semibold ${
                      task.prioridad === "alta"
                        ? "bg-red-100 text-red-600"
                        : task.prioridad === "media"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {task.prioridad}
                  </span>
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    task.estado === "completada"
                      ? "bg-green-100 text-green-600"
                      : task.estado === "pendiente"
                      ? "bg-yellow-100 text-yellow-600"
                      : task.estado === "en progreso"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {task.estado}
                </span>
              </div>

              <div className="flex justify-between items-center gap-x-2">
                <h3 className="text-base flex justify-between items-center gap-x-2 font-semibold text-gray-800 overflow-x-auto">
                  <ComentarIcon className="w-4 h-4 rotate-2 text-gray-500 flex-shrink-0" />
                  <span className="flex-1 truncate">{task.descripcion}</span>
                </h3>

                <span className="text-gray-400 flex gap-x-1 items-center text-sm flex-shrink-0">
                  <UserIcon className="w-4 h-4 flex-shrink-0" />
                  {task.responsable}
                </span>
              </div>

              <p className="text-gray-500 flex gap-x-1 items-center text-sm truncate">
                <DateIcon className="w-4 h-4" />
                {moment(task.fechaInicio).format("YYYY-MM-DD")} -{" "}
                {moment(task.fechaFinalizacion).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
