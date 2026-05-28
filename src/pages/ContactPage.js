import roomFour from '../assets/images/img_4.jpg';
import ContactForm from '../components/ContactForm.js';
import InnerHero from '../components/InnerHero.js';
import VideoBand from '../components/VideoBand.js';
import { hotelInfo } from '../data/hotelInfo.js';

function ContactPage() {
  return (
    <>
      <InnerHero title="Contact Us" copy="Questions, arrivals, event stays, or special requests, send us a note." />
      <section className="section split-form">
        <ContactForm />
        <aside className="info-panel">
          <img src={roomFour} alt="Comfortable room at Hotel Rewa In" loading="lazy" decoding="async" />
          <h2>We are here to help.</h2>
          <p>
            Reach out for reservations, room preferences, early check-in requests, or anything that would make your stay
            smoother.
          </p>
          <div className="contact-list">
            <span>Owner: {hotelInfo.ownerName}</span>
            <span>
              Phone:{' '}
              {hotelInfo.phones.map((phone, index) => (
                <span key={phone.href}>
                  {index > 0 && ', '}
                  <a href={phone.href}>{phone.label}</a>
                </span>
              ))}
            </span>
            <span>Email: {hotelInfo.email}</span>
            <span>Location: {hotelInfo.address}</span>
            <a className="map-link" href={hotelInfo.mapUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </aside>
      </section>
      <VideoBand />
    </>
  );
}

export default ContactPage;
