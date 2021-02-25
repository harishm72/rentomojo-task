import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import AppRouter from "./components/AppRouter";

import "./App.css";

function App() {
  const [isLight, setTheme] = useState(true);

  return (
    <BrowserRouter basename="/rentomojo-task">
      <div className={isLight ? "light-theme" : "dark-theme"}>
        <Header setTheme={setTheme} isLight={isLight} />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
