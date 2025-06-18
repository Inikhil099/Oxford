import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Enroll from "./pages/Enroll.jsx";
import User from "./pages/User.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Enroll/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/enroll" element={<Enroll/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
