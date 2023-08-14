import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext"

export const TodoCard = ({todo}) => {
    const { removeTodo } = useContext(TodoContext);
    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
    )
}