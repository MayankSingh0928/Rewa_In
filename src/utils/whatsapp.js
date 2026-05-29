import { hotelInfo } from '../data/hotelInfo.js';

export function createWhatsAppUrl(lines) {
  const message = lines.filter(Boolean).join('\n');
  return `https://api.whatsapp.com/send?phone=${hotelInfo.whatsappNumber}&text=${encodeURIComponent(message)}`;
}

export function openWhatsAppMessage(lines) {
  window.location.href = createWhatsAppUrl(lines);
}

export function getFormValue(formData, key) {
  return String(formData.get(key) || '').trim();
}
