import InnerHero from '../components/InnerHero.js';
import ReservationForm from '../components/ReservationForm.js';
import RoomCard from '../components/RoomCard.js';
import VideoBand from '../components/VideoBand.js';
import { getRoomBySlug } from '../data/rooms.js';

function BookPage({ selectedRoomSlug }) {
  const selectedRoom = getRoomBySlug(selectedRoomSlug);

  return (
    <>
      <InnerHero title="Reservation" copy="Book your stay at Hotel Rewa In in a few simple steps." />
      <section className="section split-form">
        <ReservationForm selectedRoom={selectedRoom} />
        <aside className="featured-room">
          <h2>Selected Room</h2>
          <RoomCard room={selectedRoom} compact />
        </aside>
      </section>
      <VideoBand />
    </>
  );
}

export default BookPage;
