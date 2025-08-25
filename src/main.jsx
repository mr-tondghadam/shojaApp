import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
import AppRoutes from "./routes/index.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename='/shojaApp'>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
);
