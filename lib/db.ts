import { sql } from "@vercel/postgres";

export async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS prayers (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      prayer        TEXT NOT NULL,
      for_whom      TEXT NOT NULL,
      relationship  TEXT,
      situation     TEXT,
      emotional_tone TEXT,
      specific_asks TEXT[],
      background    TEXT,
      email         TEXT,
      share_consent BOOLEAN NOT NULL DEFAULT false,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

export async function insertPrayer(data: {
  prayer: string;
  for_whom: string;
  relationship?: string;
  situation?: string;
  emotional_tone?: string;
  specific_asks?: string[];
  background?: string;
  email?: string;
  share_consent: boolean;
}): Promise<{ id: string; created_at: string }> {
  const result = await sql`
    INSERT INTO prayers (
      prayer, for_whom, relationship, situation, emotional_tone,
      specific_asks, background, email, share_consent
    )
    VALUES (
      ${data.prayer},
      ${data.for_whom},
      ${data.relationship ?? null},
      ${data.situation ?? null},
      ${data.emotional_tone ?? null},
      ${data.specific_asks ? `{${data.specific_asks.map(s => `"${s.replace(/"/g, '\\"')}"`).join(',')}}` : null},
      ${data.background ?? null},
      ${data.email ?? null},
      ${data.share_consent}
    )
    RETURNING id, created_at
  `;
  const row = result.rows[0];
  return { id: row.id, created_at: row.created_at };
}
