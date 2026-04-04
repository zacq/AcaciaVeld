export function buildWhatsAppLink(message: string): string {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildAnimalWhatsAppLink(animalName: string, breed: string): string {
  const msg = `Hi AcaciaVelds, I'm interested in the ${breed} (${animalName}). Could you share more details and pricing?`;
  return buildWhatsAppLink(msg);
}
