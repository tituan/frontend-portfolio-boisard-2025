'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message envoyé !');
        setFormData({ firstname: '', lastname: '', email: '', message: '' });
        setStep(1);
        setIsOpen(false);
      } else {
        alert('Erreur lors de l’envoi.');
      }
    } catch (error) {
      alert('Erreur serveur.');
    }
  };

  const isStep1Valid = formData.firstname && formData.lastname && formData.email;
  const isStep2Valid = formData.message;

  return (
    <>
      <div className="chat-widget" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <motion.div 
          className="chat-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="chat-header">
            <h4>Contact rapide</h4>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {step === 1 && (
            <div className="chat-step">
              <input
                type="text"
                name="firstname"
                placeholder="Prénom"
                value={formData.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                value={formData.lastname}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <button disabled={!isStep1Valid} onClick={() => setStep(2)}>
                Suivant
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="chat-step">
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button disabled={!isStep2Valid} onClick={handleSubmit}>
                Envoyer
              </button>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
