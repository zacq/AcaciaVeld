export type AnimalType = "Sheep" | "Goat" | "Cattle" | "Horse";
export type AnimalPurpose = "Breeding" | "Meat" | "Dairy";
export type AnimalStatus = "Available" | "Reserved" | "Sold";

export interface Animal {
  id: string;
  name: string;
  breed: string;
  type: AnimalType;
  purpose: AnimalPurpose[];
  age_months: number;
  price?: number;
  price_visible: boolean;
  tags: string[];
  description: string;
  genetics_notes: string;
  images: string[];
  status: AnimalStatus;
  featured: boolean;
  slug: string;
}

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  interest?: string; // animal name or breed
  message?: string;
  source: "Catalogue" | "Chat" | "Hero CTA" | "Detail Page" | "Breed Page";
}

export interface SMSLog {
  lead_id: string;
  message_body: string;
  direction: "Outbound" | "Inbound";
  status: "Sent" | "Delivered" | "Failed";
}
