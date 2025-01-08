import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nathan from "./pages/Nathan";
import Kelig from "./pages/Kelig";
import Mathis from "./pages/Mathis";
import Maeva from "./pages/Maeva";

const App = () => {
  return (
    <Router>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-800">MonLogo</div>

            {/* Navigation Links */}
            <div className="md:flex space-x-4">
              <Link to="/" className="text-gray-800 hover:text-blue-500">
                Accueil
              </Link>
              <Link to="/Kelig" className="text-gray-800 hover:text-blue-500">
                Kelig
              </Link>
              <Link to="/Maeva" className="text-gray-800 hover:text-blue-500">
                Maeva
              </Link>
              <Link to="/Mathis" className="text-gray-800 hover:text-blue-500">
                Mathis
              </Link>
              <Link to="/Nathan" className="text-gray-800 hover:text-blue-500">
                Nathan
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu des pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kelig" element={<Kelig />} />
        <Route path="/Maeva" element={<Maeva />} />
        <Route path="/Mathis" element={<Mathis />} />
        <Route path="/Nathan" element={<Nathan />} />

      </Routes>
    </Router>
  );
};

export default App;
