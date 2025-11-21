import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
