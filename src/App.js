import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />     
      <Route path="/movies" element={<Movies />} />
      <Route path="/add-movie" element={<AddMovie />} />
    </Routes>
  );
}
  
export default App;
