import { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = e => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateTodo(id, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update form-control ${todo.done
          ? "text-decoration-dashed"
          : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="Agregar Tarea"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <button className="btn btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
