import React, { useState } from "react";

const AccessibleContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Veuillez entrer votre nom.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Veuillez entrer un message.";
    }
    return newErrors;
  };

  return (
    <div className="border border-gray-500 p-4 rounded-md">
      {isSubmitted ? (
        <p role="status" tabIndex="0">
          <strong>Merci pour votre message ! Nous vous contacterons bientôt.</strong>
        </p>
      ) : (
        <form onSubmit={handleSubmit} aria-labelledby="contact-form-title">
          <h1 id="contact-form-title">Contactez-nous</h1>
            
          <section aria-labelledby="name-section">
            <h2 id="name-section" className="sr-only">Nom</h2>
            <div className="p-2">
              <label htmlFor="name" className="p-2">Nom :</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="border-2 border-blue-500 focus:border-blue-700 focus:ring-1 focus:ring-blue-400 rounded-md px-2 py-1 text-gray-700 placeholder-gray-400 shadow-sm"
                placeholder="Entrez votre nom"
                required
              />
              {errors.name && (
                <span id="name-error" role="alert" style={{ color: "red" }}>
                  {errors.name}
                </span>
              )}
            </div>
          </section>

          <section aria-labelledby="email-section">
            <h2 id="email-section" className="sr-only">E-mail</h2>
            <div className="p-2">
              <label htmlFor="email" className="p-2">E-mail :</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="border-2 border-blue-500 focus:border-blue-700 focus:ring-1 focus:ring-blue-400 rounded-md px-2 py-1 text-gray-700 placeholder-gray-400 shadow-sm"
                placeholder="Entrez votre email"
                required
              />
              {errors.email && (
                <span
                  id="email-error"
                  role="alert"
                  style={{
                    color: "red",
                    display: "block", // Force le span à être sur une nouvelle ligne
                    marginTop: "0.5rem", // Ajoute un petit espace au-dessus du message d'erreur
                  }}
                >
                  {errors.email}
                </span>
              )}
            </div>
          </section>

          <section aria-labelledby="message-section">
            <h2 id="message-section" className="sr-only">Message</h2>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
                Message :
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="border-2 border-blue-500 focus:border-blue-700 focus:ring-1 focus:ring-blue-400 rounded-md px-2 py-1 text-gray-700 placeholder-gray-400 shadow-sm"
                placeholder="Entrez votre message"
                required
              ></textarea>
              {errors.message && (
                <span id="message-error" role="alert" className="text-red-500 mt-1 text-sm">
                  {errors.message}
                </span>
              )}
            </div>
          </section>

          <section aria-labelledby="submit-section">
            <h2 id="submit-section" className="sr-only">Envoyer</h2>
            <button type="submit" className="p-2">Envoyer</button>
          </section>
        </form>
      )}
    </div>
  );
};

export default AccessibleContactForm;
