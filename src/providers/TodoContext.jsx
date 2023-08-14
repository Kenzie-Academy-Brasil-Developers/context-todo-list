// 1° passo
import { createContext, useState } from "react";

// 2° passo - instância um constante de contexto
export const TodoContext = createContext({});

// Um para um grupo de componentes (contexto)
export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (formData) => {
        const newTodo = { ...formData, id: crypto.randomUUID()};
        setTodoList([...todoList, newTodo]);
    }

    const removeTodo = (removingId) => {
        const newTodoList = todoList.filter(todo => todo.id !== removingId);
        setTodoList(newTodoList);
    }

    // value é o elemento exportador do contexto, tudo que estiver nele, será compartilhado com aplicação
    return(
        <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

