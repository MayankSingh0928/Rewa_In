import { useState } from 'react';
import { getFormValue, openWhatsAppMessage } from '../utils/whatsapp.js';

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    openWhatsAppMessage([
      'New contact enquiry for Hotel Rewa In',
      `Name: ${getFormValue(formData, 'name')}`,
      `Phone: ${getFormValue(formData, 'phone')}`,
      `Email: ${getFormValue(formData, 'email')}`,
      `Message: ${getFormValue(formData, 'message')}`,
    ]);

    setSent(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <label>
        Name
        <input required type="text" name="name" />
      </label>
      <label>
        Phone
        <input required type="tel" name="phone" />
      </label>
      <label>
        Email
        <input required type="email" name="email" />
      </label>
      <label>
        Write Message
        <textarea required name="message" rows="6" />
      </label>
      <button className="primary-button" type="submit">
        Send Message
      </button>
      {sent && <p className="form-status">WhatsApp is open with your message ready to send.</p>}
    </form>
  );
}

export default ContactForm;
