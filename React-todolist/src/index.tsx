import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

const Configurations = () => {
    const elementTarget = document.querySelector('#root');
    if (!elementTarget) return;
    const root = createRoot(elementTarget, {
        onCaughtError(error, errorInfo) {
            console.log(error);
        },
        onUncaughtError(error, errorInfo) {
            console.log(error);
        },
    });
    root.render(<App />)
}
Configurations();