import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import AppRouter from "./components/AppRouter";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
