import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
