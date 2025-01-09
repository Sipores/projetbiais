import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 bottom-0 w-full">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p aria-label="FoolBiasProduction" > FoolBiasProduction</p>
        </div>

        <div className="mb-4">
          <a href="mailto:contact@monsite.com" className="text-white p-2 rounded-lg" aria-label="Envoyer un email à contact@monsite.com">contact@monsite.com</a>
        </div>

        <div className="text-sm text-gray-400">
          <p aria-label="© 2025 MonSite. Tous droits réservés." >© 2025 MonSite. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
