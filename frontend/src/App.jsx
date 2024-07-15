import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";

import Home from "./pages/Home";
import ServicePage from "./pages/Service/ServicePage";
import TestPage from "./pages/Service/testPage";

function App() {
  return (
    <>
    <FormProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            {/* <Route path="Service" element={<Service />} /> */}
            <Route path="Service" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
    </>
  );
}

export default App;
