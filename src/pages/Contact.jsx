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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/ajax/babysriya1193@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please check your internet connection.');
    }
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
            {/* Optional: hidden anti-spam field */}
            <input type="text" name="_formsubmit_id" style={{ display: 'none' }} />

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
