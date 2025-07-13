import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../features/products/pages/HomePage";
import LoginPage from "../features/auth/pages/LoginPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
