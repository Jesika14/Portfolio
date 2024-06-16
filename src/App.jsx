import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
