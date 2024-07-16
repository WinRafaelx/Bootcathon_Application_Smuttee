import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";

import Home from "./pages/Home";
import ServicePage from "./pages/Service/ServicePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <>
    <FormProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
    </>
  );
}

export default App;
