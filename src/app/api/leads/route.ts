import { createLead, logSMS } from "@/lib/airtable";
import { sendSMS, sendAdminAlert } from "@/lib/sms";
import type { Lead } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json() as Lead;

    if (!body.name || !body.phone) {
      return Response.json({ error: "name and phone are required" }, { status: 400 });
    }

    // Create lead in Airtable
    const leadId = await createLead(body);

    // Confirmation SMS to buyer
    const confirmMsg = `Hi ${body.name}, we received your interest${body.interest ? ` in ${body.interest}` : ""}. We'll contact you shortly. — AcaciaVelds`;
    const smsSent = await sendSMS(body.phone, confirmMsg);

    if (smsSent) {
      await logSMS({
        lead_id: leadId,
        message_body: confirmMsg,
        direction: "Outbound",
        status: "Sent",
      });
    }

    // Admin alert
    const adminMsg = `New lead: ${body.name} | ${body.phone}${body.interest ? ` | ${body.interest}` : ""} | Source: ${body.source}`;
    await sendAdminAlert(adminMsg);

    return Response.json({ success: true, id: leadId });
  } catch (err) {
    console.error("POST /api/leads", err);
    return Response.json({ error: "Failed to submit lead" }, { status: 500 });
  }
}
