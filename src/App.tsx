import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat/Chat";
import { UserProvider } from "./Context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogIn from "./Pages/Login/LogIn";
import Registration from "./Pages/Register/Registration";
import LandingPage from "./Pages/Landing-Page/LandingPage";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage/>} />
            <Route path={"/login"} element={<LogIn />} />
            <Route path={"/register"} element={<Registration />} />
            <Route path={"/chat"} element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
