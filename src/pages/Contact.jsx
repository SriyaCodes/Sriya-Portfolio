import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question or want to work together?
            <br />
            Feel free to contact me using the form below.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="form-title">Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="input-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="btn-submit">
              Send Message ✈️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
