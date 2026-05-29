import { useState } from 'react';
import { getFormValue, openWhatsAppMessage } from '../utils/whatsapp.js';

function ReservationForm({ selectedRoom }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    openWhatsAppMessage([
      'New room booking request for Hotel Rewa In',
      `Room Type: ${selectedRoom.name}`,
      `Room Price: ${selectedRoom.price}`,
      `Arrival Date: ${getFormValue(formData, 'arrival')}`,
      `Departure Date: ${getFormValue(formData, 'departure')}`,
      `Rooms: ${getFormValue(formData, 'rooms')}`,
      `Guests: ${getFormValue(formData, 'guests')}`,
      `Email: ${getFormValue(formData, 'email')}`,
      `Note: ${getFormValue(formData, 'note') || 'No note added'}`,
    ]);

    setSent(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Reservation Form</h2>
      <div className="selected-room-summary">
        <span>Selected Room</span>
        <strong>{selectedRoom.name}</strong>
        <p>{selectedRoom.price}</p>
      </div>
      <input type="hidden" name="roomType" value={selectedRoom.name} />
      <input type="hidden" name="roomPrice" value={selectedRoom.price} />
      <div className="form-row">
        <label>
          Arrival Date
          <input required type="date" name="arrival" />
        </label>
        <label>
          Departure Date
          <input required type="date" name="departure" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Rooms
          <select name="rooms" defaultValue="1">
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4">4 Rooms</option>
            <option value="5">5 Rooms</option>
          </select>
        </label>
        <label>
          Guests
          <select name="guests" defaultValue="2">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
          </select>
        </label>
      </div>
      <label>
        Email
        <input required type="email" name="email" />
      </label>
      <label>
        Write a Note
        <textarea name="note" rows="6" />
      </label>
      <button className="primary-button" type="submit">
        Reserve Now
      </button>
      {sent && <p className="form-status">Opening WhatsApp with your booking request.</p>}
    </form>
  );
}

export default ReservationForm;
