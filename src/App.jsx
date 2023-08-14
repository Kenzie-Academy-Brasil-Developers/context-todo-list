import { useContext } from "react"
import { HomePage } from "./pages/HomePage"
import { DarkmodeContext } from "./providers/DarkmodeContext"

function App() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div className={darkMode === "LIGHT" ? "lightmode" : "darkmode"}>
      <HomePage />
    </div>
  )
}

export default App
