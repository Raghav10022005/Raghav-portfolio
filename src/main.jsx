import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Lenis from "lenis";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WXPTPNXC",
};

TagManager.initialize(tagManagerArgs);

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);