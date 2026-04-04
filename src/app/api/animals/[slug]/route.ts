import { fetchAnimalBySlug } from "@/lib/airtable";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const animal = await fetchAnimalBySlug(slug);
    if (!animal) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }
    return Response.json(animal);
  } catch (err) {
    console.error(`GET /api/animals/${slug}`, err);
    return Response.json({ error: "Failed to fetch animal" }, { status: 500 });
  }
}
