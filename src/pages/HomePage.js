import lobbyImage from '../assets/images/f_img_1.jpg';
import FeaturedRooms from '../components/FeaturedRooms.js';
import Hero from '../components/Hero.js';
import VideoBand from '../components/VideoBand.js';
import { internalGo } from '../utils/router.js';

function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Rewa hospitality, made comfortable"
        title="Hotel Rewa In"
        copy="Stay close to the city with warm service, polished rooms, and a reservation experience that stays simple."
        cta={{ label: 'Book Now', path: '/book' }}
      />
      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Stay and enjoy</p>
          <h2>Easy comfort for business trips, family visits, and weekend breaks.</h2>
          <p>
            Hotel Rewa In brings together restful rooms, helpful staff, and practical amenities so every stay feels
            settled from the first few minutes.
          </p>
          <a className="text-link" href="/about" onClick={internalGo}>
            More about us
          </a>
        </div>
        <img src={lobbyImage} alt="Hotel Rewa In lounge seating" loading="lazy" decoding="async" />
      </section>
      <FeaturedRooms />
      <VideoBand />
    </>
  );
}

export default HomePage;
