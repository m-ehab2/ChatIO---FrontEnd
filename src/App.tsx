import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Chat from "./Pages/Chat/Chat";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/chat"} element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
