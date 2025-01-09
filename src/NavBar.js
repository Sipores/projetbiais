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
            <div className="text-xl font-bold text-gray-800" role="button" tabIndex="0" aria-label="Logo du site">MonLogo</div>

            {/* Navigation Links */}
            <div className="md:flex space-x-4">
              <Link to="/" aria-label="Accueil du site" className="text-gray-800 hover:text-blue-500">
                Accueil
              </Link>
              <Link to="/Kelig" aria-label="Essaie de Kélig" className="text-gray-800 hover:text-blue-500">
                Kelig
              </Link>
              <Link to="/Maeva" aria-label="Essaie de Maeva" className="text-gray-800 hover:text-blue-500">
                Maeva
              </Link>
              <Link to="/Mathis" aria-label="Essaie de Mathis, Les biais cognitifs et les croyances en pseudo-sciences" className="text-gray-800 hover:text-blue-500">
                Mathis
              </Link>
              <Link to="/Nathan" aria-label="Essaie de Nathan, Les démarcheurs de rue ou comment utiliser les biais cognitifs pour lever des fonds" className="text-gray-800 hover:text-blue-500">
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
