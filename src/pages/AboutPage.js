import lobbyImage from '../assets/images/f_img_1.jpg';
import InnerHero from '../components/InnerHero.js';
import VideoBand from '../components/VideoBand.js';
import { staffMembers } from '../data/staff.js';

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
        <img src={lobbyImage} alt="Hotel Rewa In guest lounge" loading="lazy" decoding="async" />
      </section>
      <section className="section section-muted">
        <div className="section-heading">
          <p className="eyebrow">Our kind staff</p>
          <h2>The people behind the stay.</h2>
        </div>
        <div className="card-grid">
          {staffMembers.map((member) => (
            <article className="post-card staff-card" key={member.name}>
              <img src={member.image} alt={`${member.name}, ${member.role}`} loading="lazy" decoding="async" />
              <div>
                <p className="card-label">{member.role}</p>
                <h3>{member.name}</h3>
                <p>Focused on service that feels personal, timely, and quietly professional.</p>
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
