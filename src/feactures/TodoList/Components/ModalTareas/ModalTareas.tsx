import { useContext, useEffect } from "react";
import { ModalGeneral } from "../../../../shared/Components/Modal/ModalDefault";
import TodoContext, { ITodoContext } from "../../Context/TodoContext";
import { FormProvider, useForm } from "react-hook-form";
import { InputFormContext } from "../../../../shared/Components/InputForm/InputFormContext";
import { TextTareaFormContext } from "../../../../shared/Components/InputForm/TextTareaFormContext";
import { ToDo } from "../../../../domain/Todo/task";
import { ToDoStatus, ToDoPrioridad } from "../../../../domain/Todo/taskStatus";
import moment from "moment";
import InputSelectContext from "../../../../shared/Components/InputForm/InputSelectContext";
import { miembros } from "../../../../shared/data/miembros";
import Button from "../../../../shared/Components/Button/Button";

interface ModalTareasIPropsItems {
  isOpen: boolean;
  onClose: () => void;
  stateEdit?: boolean;
}
export default function ModalTareas({isOpen,onClose}: ModalTareasIPropsItems) {
  const { createTask, task, setTask, updateTask } = useContext(
    TodoContext
  ) as ITodoContext;

  const InitialTask: ToDo = {
    idTask: "",
    titulo: "",
    descripcion: "",
    estado: ToDoStatus.PENDIENTE,
    fechaCreacion: new Date(),
    prioridad: ToDoPrioridad.BAJA,
    fechaInicio: moment(new Date()).format("YYYY-MM-DD"),
    fechaFinalizacion: moment(new Date()).format("YYYY-MM-DD"),
    responsable: "",
  };

  const methods = useForm({ defaultValues: InitialTask });

  useEffect(() => {
    if (!isOpen) {
      methods.reset(InitialTask);
      setTask(undefined);
    }
  }, [isOpen, methods, setTask]);

  useEffect(() => {
    if (task) {
      methods.reset(task);
    }
  }, [task]);

  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose}>
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(task ? updateTask : createTask)}>
            <div className="grid grid-cols-2 gap-4">
              <InputFormContext
                classNameI="col-span-2"
                name="titulo"
                title="Nombre de la tarea"
                validations={{
                  required: "Este campo es requerido",
                }}
              />

              <TextTareaFormContext
                classNameI="col-span-2"
                name="descripcion"
                title="Descripción de la tarea"
                validations={{
                  required: false,
                }}
              />

              <InputFormContext
                type="date"
                name="fechaInicio"
                title="Ingrese la fecha de inicio"
                validations={{
                  required: "Este campo es requerido",
                }}
              />

              <InputFormContext
                type="date"
                name="fechaFinalizacion"
                title="Ingrese la fecha de finalización"
                validations={{
                  required: "Este campo es requerido",
                }}
              />
              <InputSelectContext
                name="responsable"
                title="Responsable"
                options={[
                  { value: "", title: "Seleccione un responsable" },
                  ...miembros.map((el) => {
                    return {
                      value: el.nombreUsuario + " " + el.apellidoUsuario,
                      title: el.nombreUsuario + " " + el.apellidoUsuario,
                    };
                  }),
                ]}
                validations={{
                  required: "Este campo es requerido",
                }}
              />
              <InputSelectContext
                name="prioridad"
                title="Prioridad"
                options={[
                  { value: "", title: "Seleccione una prioridad" },
                  { value: ToDoPrioridad.ALTA, title: "Alta" },
                  { value: ToDoPrioridad.MEDIA, title: "Media" },
                  { value: ToDoPrioridad.BAJA, title: "Baja" },
                ]}
                validations={{
                  required: "Este campo es requerido",
                }}
              />
              {task && (
                <InputSelectContext
                  name="estado"
                  title="Estado de la Tarea"
                  options={[
                    { value: "", title: "Seleccione una prioridad" },
                    { value: ToDoStatus.CANCELADA, title: "Cancelada" },
                    { value: ToDoStatus.COMPLETADA, title: "Completada" },
                    { value: ToDoStatus.EN_PROGRESO, title: "En proceso" },
                    { value: ToDoStatus.PENDIENTE, title: "Pendiente" },
                  ]}
                  validations={{
                    required: "Este campo es requerido",
                  }}
                />
              )}

              {/* {task && (
                <TextTareaFormContext
                  classNameI="col-span-2"
                  name="estado"
                  title="Comentarios"
                  validations={{
                    required: "Este campo es requerido",
                  }}
                />
              )} */}

              <Button type="submit" style="col-span-2" text="Guardar" />
            </div>
          </form>
        </FormProvider>
      </>
    </ModalGeneral>
  );
}
