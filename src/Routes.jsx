import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const ProductList = lazy(() => import("./pages/ProductList.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const LandingPage=lazy(()=>import("./pages/LandingPage.jsx"))
const Login = lazy(() => import("./pages/Login.jsx"));
const RegisterCustomer = lazy(() => import("./pages/RegisterCustomer.jsx"));
const RegisterOwner = lazy(() => import("./pages/RegisterOwner.jsx"));
const OwnerDashboard = lazy(() => import("./pages/OwnerDashboard.jsx"));
import Layout from "./components/Layout.jsx";

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                
                <Route path="/"element={<LandingPage/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register-customer" element={<RegisterCustomer />} />
                <Route path="/register-owner" element={<RegisterOwner />} /> 
                 <Route path="/"element={<Layout/>}>             
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/products/:category" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} /> 
                </Route>               
                <Route path="/owner-dashboard" element={<ProtectedRoute><OwnerDashboard /></ProtectedRoute>} />

                <Route path="*" element={<Login />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
