import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/Root";
import { Provider } from "react-redux";
import store from "./redux/store/store";


const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);