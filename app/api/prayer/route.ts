import { NextRequest, NextResponse } from "next/server";
import { ensureTable, insertPrayer } from "@/lib/db";
import { sendConfirmationEmail } from "@/lib/email";
import { appendPrayerToSheet } from "@/lib/sheets";

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
  const forWhom = typeof data.for_whom === "string" ? data.for_whom.trim() : "";
  const relationship = typeof data.relationship === "string" ? data.relationship.trim() : undefined;
  const situation = typeof data.situation === "string" ? data.situation.trim() : undefined;
  const emotionalTone = typeof data.emotional_tone === "string" ? data.emotional_tone.trim() : undefined;
  const specificAsks = Array.isArray(data.specific_asks)
    ? (data.specific_asks as unknown[]).filter((s): s is string => typeof s === "string").map((s) => s.trim())
    : undefined;
  const background = typeof data.background === "string" ? data.background.trim() : undefined;
  const email = typeof data.email === "string" ? data.email.trim() : undefined;
  const shareConsent = Boolean(data.share_consent);

  if (!prayer) {
    return NextResponse.json({ error: "Field 'prayer' is required" }, { status: 422 });
  }
  if (!forWhom) {
    return NextResponse.json({ error: "Field 'for_whom' is required" }, { status: 422 });
  }

  try {
    await ensureTable();

    const { id, created_at } = await insertPrayer({
      prayer,
      for_whom: forWhom,
      relationship: relationship || undefined,
      situation: situation || undefined,
      emotional_tone: emotionalTone || undefined,
      specific_asks: specificAsks?.length ? specificAsks : undefined,
      background: background || undefined,
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

    try {
      await appendPrayerToSheet({
        id,
        created_at: new Date(created_at).toISOString(),
        for_whom: forWhom,
        prayer,
        email,
        relationship,
        situation,
        emotional_tone: emotionalTone,
        specific_asks: specificAsks,
        background,
        share_consent: shareConsent,
      });
    } catch (sheetErr) {
      console.error("Google Sheets append failed:", sheetErr);
      // Non-fatal — prayer is still saved
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
