import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const base64 = process.env.GOOGLE_CREDENTIALS_BASE64;
  if (base64) {
    const credentials = JSON.parse(Buffer.from(base64, "base64").toString("utf8"));
    return new google.auth.GoogleAuth({ credentials, scopes: SCOPES });
  }
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: SCOPES,
  });
}

export async function appendPrayerToSheet(row: {
  id: string;
  created_at: string;
  for_whom: string;
  prayer: string;
  email?: string;
  relationship?: string;
  situation?: string;
  emotional_tone?: string;
  specific_asks?: string[];
  background?: string;
  share_consent: boolean;
}) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error("GOOGLE_SHEET_ID is not set");

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const values = [
    [
      row.created_at,
      row.id,
      row.for_whom,
      row.prayer,
      row.email ?? "",
      row.relationship ?? "",
      row.situation ?? "",
      row.emotional_tone ?? "",
      row.specific_asks?.join(", ") ?? "",
      row.background ?? "",
      row.share_consent ? "Yes" : "No",
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:K",
    valueInputOption: "RAW",
    requestBody: { values },
  });
}
