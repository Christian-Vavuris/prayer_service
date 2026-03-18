import { NextRequest, NextResponse } from "next/server";
import { ensureTable, insertPrayer } from "@/lib/db";
import { sendConfirmationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  const prayer = typeof data.prayer === "string" ? data.prayer.trim() : "";
  const forWhom = typeof data.for === "string" ? data.for.trim() : "";
  const notes = typeof data.notes === "string" ? data.notes.trim() : undefined;
  const email = typeof data.email === "string" ? data.email.trim() : undefined;
  const shareConsent = Boolean(data.share_consent);

  if (!prayer) {
    return NextResponse.json({ error: "Field 'prayer' is required" }, { status: 422 });
  }

  try {
    await ensureTable();

    const { id, created_at } = await insertPrayer({
      prayer,
      for_whom: forWhom,
      notes: notes || undefined,
      email: email || undefined,
      share_consent: shareConsent,
    });

    if (email) {
      try {
        await sendConfirmationEmail(email, forWhom);
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
        // Non-fatal — prayer is still saved
      }
    }

    return NextResponse.json(
      { status: "received", id, timestamp: new Date(created_at).toISOString() },
      { status: 201 }
    );
  } catch (err) {
    console.error("Prayer submission error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
