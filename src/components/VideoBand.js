import poolImage from '../assets/images/img_5.jpg';
import { internalGo } from '../utils/router.js';
import LazyBackground from './LazyBackground.js';

function VideoBand() {
  return (
    <LazyBackground
      as="section"
      className="video-band"
      backgroundImage={`linear-gradient(rgba(14, 18, 24, .5), rgba(14, 18, 24, .5)), url(${poolImage})`}
    >
      <div>
        <h2>Relax and enjoy your stay.</h2>
        <p>A quiet room, a helpful team, and the little conveniences that make travel feel lighter.</p>
        <a className="play-button" href="/rooms" onClick={internalGo} aria-label="View rooms">
          <span>View Rooms</span>
        </a>
      </div>
    </LazyBackground>
  );
}

export default VideoBand;
