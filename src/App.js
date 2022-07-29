import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />     
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}
  
export default App;
