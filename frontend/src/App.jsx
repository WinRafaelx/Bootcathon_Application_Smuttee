import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScheduleManagement from "./pages/Admin/ScheduleManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ScheduleManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
