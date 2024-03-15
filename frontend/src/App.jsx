import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const Login = lazy(() => import("./pages/Login"));
let user = true;
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectRoute user={user} redirectTo="/login" />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirectTo="/">
                <Login />
              </ProtectRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
