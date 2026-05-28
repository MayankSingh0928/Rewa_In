import { internalGo } from '../utils/router.js';

function RoomCard({ room, compact = false, loading = 'lazy' }) {
  return (
    <article className={compact ? 'room-card compact' : 'room-card'}>
      <div className="room-image">
        <img src={room.image} alt={room.name} loading={loading} decoding="async" />
        <span>{room.tag}</span>
      </div>
      <div className="room-body">
        <h3>{room.name}</h3>
        <div className="room-specs">
          <span>{room.guests}</span>
          <span>{room.size}</span>
        </div>
        <p>{room.description}</p>
        <a className="secondary-button" href="/book" onClick={internalGo}>
          Book Now {room.price}
        </a>
      </div>
    </article>
  );
}

export default RoomCard;
