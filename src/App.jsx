import React,{Suspense} from "react";
import { BrowserRouter} from "react-router-dom"; 
import { CartProvider } from "./components/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./Routes.jsx";
import LowStockAlert from "./components/LowStockAlert.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
const App=()=>{
  return(
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
      <LowStockAlert/>
      <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes/>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}
export default App;
