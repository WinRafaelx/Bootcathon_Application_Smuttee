import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import { ChatProvider } from "./context/ChatContext";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import ServicePage from "./pages/Service/ServicePage";
import ChatPage from "./pages/ChatPage";
import ScheduleManagement from "./pages/Admin/ScheduleManagement";
import Signup from "./pages/Admin/Auth/Signup";
import Login from "./pages/Admin/Auth/Login";
import CompleteService from "./pages/Service/CompleteService";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  return (
    <FormProvider>
      <AuthProvider>
        <ChatProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="service" element={<ServicePage />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="complete" element={<CompleteService />} />
              <Route path="/admin">
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <ScheduleManagement />
                    </ProtectedRoute>
                  }
                />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChatProvider>
      </AuthProvider>
    </FormProvider>
  );
}

export default App;
