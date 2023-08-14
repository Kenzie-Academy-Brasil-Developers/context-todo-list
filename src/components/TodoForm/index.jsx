import { useContext } from "react";
import { useForm } from "react-hook-form"
import { TodoContext } from "../../providers/TodoContext";

export const TodoForm = () => {
    const { register, handleSubmit } = useForm();

    const { addTodo } = useContext(TodoContext);

    const submit = (formData) => {
        addTodo(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("title")} />
            <input type="text" {...register("content")} />
            <button type="submit">Cadastrar nota</button>
        </form>
    )
}