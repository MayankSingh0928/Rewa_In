import { useState } from 'react';

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form-card"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
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
      {sent && <p className="form-status">Thanks. Your message is ready for the hotel team.</p>}
    </form>
  );
}

export default ContactForm;
