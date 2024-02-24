import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register('src/core/workers/index.ts')
//     .then(() => console.log('service worker registered!'))
//     .catch(() => console.log('service worker not registered!'))
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
