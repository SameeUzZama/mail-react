import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MailProvider } from "./Store/MailProvider";

ReactDOM.render(
  <React.StrictMode>
    <MailProvider>
      <App />
    </MailProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
