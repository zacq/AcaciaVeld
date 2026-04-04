export async function sendSMS(phone: string, message: string): Promise<boolean> {
  const username = process.env.AFRICAS_TALKING_USERNAME;
  const apiKey = process.env.AFRICAS_TALKING_API_KEY;
  const senderId = process.env.AFRICAS_TALKING_SENDER_ID ?? "AcaciaVelds";

  if (!username || !apiKey) return false;

  const res = await fetch("https://api.africastalking.com/version1/messaging", {
    method: "POST",
    headers: {
      apiKey,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({ username, to: phone, message, from: senderId }).toString(),
  });

  return res.ok;
}

export async function sendAdminAlert(message: string): Promise<boolean> {
  const adminPhone = process.env.ADMIN_PHONE;
  if (!adminPhone) return false;
  return sendSMS(adminPhone, message);
}
