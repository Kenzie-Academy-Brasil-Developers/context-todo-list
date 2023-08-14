import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx";
import { DarkmodeProvider } from "./providers/DarkmodeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <DarkmodeProvider>
         <TodoProvider>
            <App />
         </TodoProvider>
      </DarkmodeProvider>
   </React.StrictMode>
);
