import { sendSMS, sendAdminAlert } from "@/lib/sms";

interface SMSPayload {
  phone: string;
  message: string;
  adminAlert?: string;
}

export async function POST(request: Request) {
  try {
    const body: SMSPayload = await request.json();

    if (!body.phone || !body.message) {
      return Response.json({ error: "phone and message are required" }, { status: 400 });
    }

    const ok = await sendSMS(body.phone, body.message);

    if (body.adminAlert) {
      await sendAdminAlert(body.adminAlert);
    }

    return Response.json({ success: ok });
  } catch (err) {
    console.error("POST /api/sms", err);
    return Response.json({ error: "SMS dispatch failed" }, { status: 500 });
  }
}
