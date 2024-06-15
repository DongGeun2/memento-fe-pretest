import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Start Page
const HomePage = lazy(() => import("./pages/home/HomePage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
