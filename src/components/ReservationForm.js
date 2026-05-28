import { useState } from 'react';

function ReservationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form-card"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2>Reservation Form</h2>
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
      {sent && <p className="form-status">Reservation request prepared. We will confirm availability shortly.</p>}
    </form>
  );
}

export default ReservationForm;
