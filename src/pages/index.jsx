import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//product provide
import ProductProvider from "../context/ProductContext";
//sidebar provider
import SidebarProvider from "../components/Sidebar";
//cart provider
import CartProvider from "../contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
