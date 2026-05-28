import { rooms } from '../data/rooms.js';
import { internalGo } from '../utils/router.js';
import LazyBackground from './LazyBackground.js';
import RoomCard from './RoomCard.js';

function FeaturedRooms() {
  return (
    <section className="section section-muted">
      <div className="section-heading">
        <p className="eyebrow">Our luxury rooms</p>
        <h2>Featured rooms.</h2>
      </div>
      <div className="feature-layout">
        <RoomCard room={rooms[0]} />
        <div className="stacked-rooms">
          {rooms.slice(1, 3).map((room) => (
            <LazyBackground
              as="a"
              href="/book"
              onClick={internalGo}
              className="stacked-room"
              key={room.name}
              backgroundImage={`linear-gradient(rgba(6, 10, 16, .42), rgba(6, 10, 16, .42)), url(${room.image})`}
            >
              <span>{room.name}</span>
              <strong>{room.price}</strong>
            </LazyBackground>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
