import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import Taskcontext from "./context/Taskcontext.jsx";

//localStorage.clear() //purana jitna data save hai localstorage me wo clear ho jaeyga same server bhut project ke lie banaye rhte hai to uska data save hamare pass rhtaa haii
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <Taskcontext>
        <App />
      </Taskcontext>
    </AuthContext>
  </StrictMode>
);
