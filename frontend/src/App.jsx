import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";

import Home from "./pages/Home";
import ServicePage from "./pages/Service/ServicePage";

function App() {
  return (
    <>
    <FormProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="Service" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
    </>
  );
}

export default App;
