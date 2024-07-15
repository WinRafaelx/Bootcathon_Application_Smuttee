import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service/service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
