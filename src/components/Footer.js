import { hotelInfo } from '../data/hotelInfo.js';

function Footer({ goTo }) {
  return (
    <footer className="site-footer">
      <div>
        <h3>Phone Support</h3>
        <p>24/7 support for arrivals and bookings.</p>
        <div className="footer-links">
          {hotelInfo.phones.map((phone) => (
            <a href={phone.href} key={phone.href}>
              {phone.label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3>Visit Us</h3>
        <p>{hotelInfo.address}</p>
        <div className="footer-links">
          <a href={hotelInfo.mapUrl} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        </div>
      </div>
      <div>
        <h3>Plan Your Stay</h3>
        <p>Owned by {hotelInfo.ownerName}. Comfortable rooms, thoughtful service, and simple reservations.</p>
        <a className="footer-book" href="/book" onClick={(event) => goTo(event, '/rooms')}>
          Book a Room
        </a>
      </div>
      <p className="copyright">Copyright {new Date().getFullYear()} Hotel Rewa In. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
