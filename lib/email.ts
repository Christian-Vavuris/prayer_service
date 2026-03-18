import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

export async function sendConfirmationEmail(to: string, prayerFor: string) {
  const resend = getResend();
  const from = process.env.RESEND_FROM_EMAIL ?? "prayer@example.com";

  await resend.emails.send({
    from,
    to,
    subject: "Your prayer has been received",
    html: `
      <div style="font-family: Georgia, serif; color: #c9b89a; background: #0a0a0a; padding: 40px; max-width: 480px;">
        <p style="font-size: 18px; margin-bottom: 16px;">Your prayer has been received.</p>
        <p style="color: #7a6a56; font-size: 14px; line-height: 1.7; margin-bottom: 16px;">
          A prayer for <strong style="color: #c9b89a;">${escapeHtml(prayerFor)}</strong> will be offered
          at St. Kevin&rsquo;s Church in Bernal Heights, San Francisco, this Sunday.
        </p>
        <p style="color: #7a6a56; font-size: 13px;">
          If you marked your request as urgent, it has been noted.
        </p>
      </div>
    `,
  });
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
