import bathroom from '../assets/images/bathroom.webp';
import hotelHero from '../assets/images/hotel-hero.webp';
import roomClassic from '../assets/images/room-classic.webp';
import roomDeluxe from '../assets/images/room-deluxe.webp';
import roomExecutive from '../assets/images/room-executive.webp';
import roomPremium from '../assets/images/room-premium.webp';

export const rooms = [
  {
    slug: 'presidential-room',
    name: 'Presidential Room',
    image: hotelHero,
    guests: '2 Guests',
    size: '420 sq ft',
    price: 'From Rs. 2,499',
    tag: 'Signature Stay',
    description: 'A calm, polished room with a king bed, work desk, city views, and attentive room service.',
  },
  {
    slug: 'luxury-room',
    name: 'Luxury Room',
    image: roomPremium,
    guests: '3 Guests',
    size: '360 sq ft',
    price: 'From Rs. 1,999',
    tag: 'Best Value',
    description: 'Bright interiors, generous storage, plush bedding, and everything needed for a comfortable stay.',
  },
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    image: roomDeluxe,
    guests: '2 Guests',
    size: '300 sq ft',
    price: 'From Rs. 1,499',
    tag: 'Guest Favorite',
    description: 'A refined everyday room with soft lighting, clean lines, and quick access to hotel services.',
  },
  {
    slug: 'family-suite',
    name: 'Family Suite',
    image: roomClassic,
    guests: '4 Guests',
    size: '520 sq ft',
    price: 'From Rs. 3,299',
    tag: 'Extra Space',
    description: 'Separate seating, extra bedding options, and a relaxed setup for families and longer visits.',
  },
  {
    slug: 'executive-room',
    name: 'Executive Room',
    image: roomExecutive,
    guests: '2 Guests',
    size: '340 sq ft',
    price: 'From Rs. 2,199',
    tag: 'Work Ready',
    description: 'A quieter room designed for business travelers, with dependable Wi-Fi and a larger desk.',
  },
  {
    slug: 'classic-room',
    name: 'Classic Room',
    image: bathroom,
    guests: '2 Guests',
    size: '280 sq ft',
    price: 'From Rs. 1,299',
    tag: 'Simple Comfort',
    description: 'Clean, compact, and practical, with the essentials handled carefully from check-in to checkout.',
  },
];

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug) || rooms[0];
}
