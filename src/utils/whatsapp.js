import { hotelInfo } from '../data/hotelInfo.js';

export function openWhatsAppMessage(lines) {
  const message = lines.filter(Boolean).join('\n');
  const url = `https://wa.me/${hotelInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}

export function getFormValue(formData, key) {
  return String(formData.get(key) || '').trim();
}
