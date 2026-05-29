import corridorImage from '../assets/images/hotel-corridor-square.webp';
import InnerHero from '../components/InnerHero.js';
import VideoBand from '../components/VideoBand.js';
import { hotelHighlights } from '../data/highlights.js';

function AboutPage() {
  return (
    <>
      <InnerHero title="About Hotel Rewa In" copy="A local hotel focused on calm stays and attentive service." />
      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Built for guests who want the basics done beautifully.</h2>
          <p>
            We keep the experience straightforward: clean rooms, responsive service, a peaceful atmosphere, and a team
            that understands how much small details matter after a long journey.
          </p>
          <p>
            Whether you are in Rewa for work, family, events, or a quiet pause, the hotel is shaped around dependable
            comfort and warm hospitality.
          </p>
        </div>
        <img src={corridorImage} alt="Hotel Rewa In corridor" loading="lazy" decoding="async" />
      </section>
      <section className="section section-muted">
        <div className="section-heading">
          <p className="eyebrow">Hotel spaces</p>
          <h2>A closer look inside.</h2>
        </div>
        <div className="card-grid">
          {hotelHighlights.map((item) => (
            <article className="post-card staff-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div>
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <VideoBand />
    </>
  );
}

export default AboutPage;
