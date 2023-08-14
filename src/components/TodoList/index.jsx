import { useContext } from "react"
import { TodoContext } from "../../providers/TodoContext";
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
    //importador do contexto (ou seja, ele pega as parada)
    const { todoList } = useContext(TodoContext);
    return(
        <ul>
            {/* um objeto para cada elemento */}
            {todoList.map(todo => <TodoCard key={todo.id} todo={todo} />)}
        </ul>
    )
}