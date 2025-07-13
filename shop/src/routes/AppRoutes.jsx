// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  HomePage from "../features/products/pages/HomePage";
// import { LoginPage } from "../features/auth/pages/LoginPage";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../features/products/pages/HomePage";
import ProductDetail from "../features/products/pages/ProductDetail";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import CartPage from "../features/cart/pages/CartPage";
import OrdersPage from "../features/orders/Pages/OrdersPage";
import ProfilePage from "../features/userProfile/pages/ProfilePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
