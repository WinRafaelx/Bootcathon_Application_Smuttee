import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScheduleManagement from "./pages/Admin/ScheduleManagement";
import Signup from "./pages/Admin/Auth/Signup";
import Login from "./pages/Admin/Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin"  >
            <Route index element={<ScheduleManagement />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
