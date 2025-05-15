import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};
