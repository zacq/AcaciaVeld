import type { Animal, Lead, SMSLog } from "@/types";
import { MOCK_ANIMALS } from "@/lib/mock-data";

const BASE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;
const HEADERS = {
  Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  "Content-Type": "application/json",
};

const USE_MOCK = !process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_API_KEY;

// ── Raw Airtable record → Animal ─────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapAnimal(record: any): Animal {
  const f = record.fields;
  return {
    id: record.id,
    name: f["Name"] ?? "",
    breed: f["Breed"] ?? "",
    type: f["Type"] ?? "Sheep",
    purpose: f["Purpose"] ?? [],
    age_months: f["Age (months)"] ?? 0,
    price: f["Price"],
    price_visible: f["Price Visible"] ?? false,
    tags: f["Tags"] ?? [],
    description: f["Description"] ?? "",
    genetics_notes: f["Genetics Notes"] ?? "",
    images: (f["Images"] ?? []).map((img: { url: string }) => img.url),
    status: f["Status"] ?? "Available",
    featured: f["Featured"] ?? false,
    slug: f["Slug"] ?? slugify(f["Name"] ?? record.id),
  };
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ── Fetch all available animals (with optional filters) ──────────────────────
export async function fetchAnimals(params?: {
  type?: string;
  breed?: string;
  purpose?: string;
  featured?: boolean;
}): Promise<Animal[]> {
  if (USE_MOCK) {
    let results = MOCK_ANIMALS.filter((a) => a.status === "Available" || a.status === "Reserved");
    if (params?.type) results = results.filter((a) => a.type === params.type);
    if (params?.breed) results = results.filter((a) => a.breed === params.breed);
    if (params?.purpose) results = results.filter((a) => a.purpose.includes(params.purpose as Animal["purpose"][number]));
    if (params?.featured) results = results.filter((a) => a.featured);
    return results;
  }

  const formulas: string[] = [`{Status}="Available"`];
  if (params?.type) formulas.push(`{Type}="${params.type}"`);
  if (params?.breed) formulas.push(`{Breed}="${params.breed}"`);
  if (params?.purpose) formulas.push(`FIND("${params.purpose}",ARRAYJOIN({Purpose},","))>0`);
  if (params?.featured) formulas.push(`{Featured}=TRUE()`);

  const filter = formulas.length > 1 ? `AND(${formulas.join(",")})` : formulas[0];

  const url = new URL(`${BASE_URL}/Livestock%20Assets`);
  url.searchParams.set("filterByFormula", filter);
  url.searchParams.set("sort[0][field]", "Name");
  url.searchParams.set("sort[0][direction]", "asc");

  const res = await fetch(url.toString(), { headers: HEADERS, next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Airtable fetchAnimals error: ${res.status}`);
  const data = await res.json();
  return (data.records ?? []).map(mapAnimal);
}

// ── Fetch single animal by slug ──────────────────────────────────────────────
export async function fetchAnimalBySlug(slug: string): Promise<Animal | null> {
  if (USE_MOCK) {
    return MOCK_ANIMALS.find((a) => a.slug === slug) ?? null;
  }

  const url = new URL(`${BASE_URL}/Livestock%20Assets`);
  url.searchParams.set("filterByFormula", `{Slug}="${slug}"`);
  url.searchParams.set("maxRecords", "1");

  const res = await fetch(url.toString(), { headers: HEADERS, next: { revalidate: 300 } });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.records?.length) return null;
  return mapAnimal(data.records[0]);
}

// ── Create lead ──────────────────────────────────────────────────────────────
export async function createLead(lead: Lead): Promise<string> {
  if (USE_MOCK) {
    console.log("[MOCK] Lead captured:", lead);
    return "mock-lead-id";
  }

  const res = await fetch(`${BASE_URL}/Leads`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      fields: {
        Name: lead.name,
        Phone: lead.phone,
        Email: lead.email ?? "",
        Interest: lead.interest ?? "",
        Message: lead.message ?? "",
        Source: lead.source,
        Status: "New",
      },
    }),
  });
  if (!res.ok) throw new Error(`Airtable createLead error: ${res.status}`);
  const data = await res.json();
  return data.id;
}

// ── Log SMS ──────────────────────────────────────────────────────────────────
export async function logSMS(entry: SMSLog): Promise<void> {
  await fetch(`${BASE_URL}/SMS%20Logs`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      fields: {
        "Lead ID": entry.lead_id,
        "Message Body": entry.message_body,
        Direction: entry.direction,
        Status: entry.status,
      },
    }),
  });
}
