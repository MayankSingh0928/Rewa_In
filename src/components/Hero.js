import heroImage from '../assets/images/big_image_1.jpg';
import { internalGo } from '../utils/router.js';

function Hero({ eyebrow, title, copy, cta }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 18, 24, .58), rgba(14, 18, 24, .58)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <p className="hero-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <a className="primary-button" href={cta.path} onClick={internalGo}>
          {cta.label}
        </a>
      </div>
    </section>
  );
}

export default Hero;
