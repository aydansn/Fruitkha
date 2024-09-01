import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { FreshsProvider } from "./contexts/FreshsContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <FreshsProvider>
      <App />
    </FreshsProvider>
  </ProductsProvider>
);
