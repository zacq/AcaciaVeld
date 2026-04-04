import { NextRequest } from "next/server";
import { fetchAnimals } from "@/lib/airtable";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  try {
    const animals = await fetchAnimals({
      type: searchParams.get("type") ?? undefined,
      breed: searchParams.get("breed") ?? undefined,
      purpose: searchParams.get("purpose") ?? undefined,
      featured: searchParams.get("featured") === "true" ? true : undefined,
    });

    return Response.json(animals);
  } catch (err) {
    console.error("GET /api/animals", err);
    return Response.json({ error: "Failed to fetch animals" }, { status: 500 });
  }
}
