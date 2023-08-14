import { useContext } from "react"
import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodoList"
import { DarkmodeContext } from "../../providers/DarkmodeContext";

export const HomePage = () => {
    const { darkMode, changeColorMode } = useContext(DarkmodeContext);

    return(
        <main>
            <button onClick={changeColorMode}>
                {darkMode === "LIGHT" ? "Ligar modo escuro" : "Ligar modo claro"}
            </button>
            <TodoForm />
            <TodoList />
        </main>
    )
}