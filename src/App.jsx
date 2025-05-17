import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

// Lazy load the HomePage component
const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
};

export default App;
