import RoomCard from '../components/RoomCard.js';
import InnerHero from '../components/InnerHero.js';
import VideoBand from '../components/VideoBand.js';
import { rooms } from '../data/rooms.js';

function RoomsPage() {
  return (
    <>
      <InnerHero title="Our Rooms" copy="Choose the stay that fits your visit to Rewa." />
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Rooms and suites</p>
          <h2>Comfortable options with clear pricing.</h2>
        </div>
        <div className="card-grid room-grid">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </section>
      <VideoBand />
    </>
  );
}

export default RoomsPage;
