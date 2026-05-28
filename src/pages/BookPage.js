import InnerHero from '../components/InnerHero.js';
import ReservationForm from '../components/ReservationForm.js';
import RoomCard from '../components/RoomCard.js';
import VideoBand from '../components/VideoBand.js';
import { rooms } from '../data/rooms.js';

function BookPage() {
  return (
    <>
      <InnerHero title="Reservation" copy="Book your stay at Hotel Rewa In in a few simple steps." />
      <section className="section split-form">
        <ReservationForm />
        <aside className="featured-room">
          <h2>Featured Room</h2>
          <RoomCard room={rooms[0]} compact />
        </aside>
      </section>
      <VideoBand />
    </>
  );
}

export default BookPage;
