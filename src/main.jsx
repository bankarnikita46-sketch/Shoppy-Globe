// Application entry point - mounts React app & wires Redux store
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux Provider makes the store available everywhere */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
