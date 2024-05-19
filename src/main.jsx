import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { SocketProvider } from "./context/socket.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
