import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { injectStore } from "./common/axios/Interceptors";
import App from "./scenes/App";
import "./sass/main.scss";
window.Buffer = window.Buffer || require("buffer").Buffer;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

injectStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
