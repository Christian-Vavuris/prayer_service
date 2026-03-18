import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";
import { ensureTable, insertPrayer } from "@/lib/db";
import { appendPrayerToSheet } from "@/lib/sheets";

export const maxDuration = 60;

function buildServer(): McpServer {
  const server = new McpServer({
    name: "prayer-api",
    version: "1.0.0",
  });

  server.tool(
    "submit_prayer",
    "Submit a prayer request on behalf of a user. A human being will read this request and offer it in prayer. Prayers are offered every Sunday. If the request is urgent, note it in emotional_tone or notes and it will be offered sooner. No account or authentication required.",
    {
      prayer: z.string().describe("What you'd like prayed"),
      for_whom: z.string().describe("Who the prayer is for"),
      relationship: z
        .string()
        .optional()
        .describe("Your relationship to the person"),
      situation: z
        .string()
        .optional()
        .describe("What is happening right now"),
      emotional_tone: z
        .string()
        .optional()
        .describe("e.g. urgent, hopeful, grieving, anxious, grateful"),
      specific_asks: z
        .array(z.string())
        .optional()
        .describe("Specific outcomes to pray for"),
      background: z
        .string()
        .optional()
        .describe("Any relevant history or context"),
      email: z
        .string()
        .optional()
        .describe(
          "If provided, a confirmation is sent when the prayer is offered"
        ),
      share_consent: z
        .boolean()
        .describe("Whether the prayer may be shared anonymously"),
    },
    async ({
      prayer,
      for_whom,
      relationship,
      situation,
      emotional_tone,
      specific_asks,
      background,
      email,
      share_consent,
    }) => {
      try {
        await ensureTable();

        const { id, created_at } = await insertPrayer({
          prayer,
          for_whom,
          relationship,
          situation,
          emotional_tone,
          specific_asks,
          background,
          email,
          share_consent,
        });

        try {
          await appendPrayerToSheet({
            id,
            created_at: new Date(created_at).toISOString(),
            for_whom,
            prayer,
            email,
            relationship,
            situation,
            emotional_tone,
            specific_asks,
            background,
            share_consent,
          });
        } catch (sheetErr) {
          console.error("Google Sheets append failed:", sheetErr);
        }

        const urgencyNote = emotional_tone?.toLowerCase().includes("urgent")
          ? " — or sooner given the urgency"
          : "";

        return {
          content: [
            {
              type: "text" as const,
              text: `Prayer received. It will be offered on Sunday${urgencyNote}.\n\nID: ${id}\nTimestamp: ${new Date(created_at).toISOString()}`,
            },
          ],
        };
      } catch (err) {
        console.error("MCP prayer submission error:", err);
        return {
          content: [
            {
              type: "text" as const,
              text: "Failed to submit the prayer request. Please try again.",
            },
          ],
          isError: true,
        };
      }
    }
  );

  return server;
}

async function handleRequest(req: Request): Promise<Response> {
  // Stateless: fresh server + transport per request (Vercel serverless compatible)
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  const server = buildServer();
  await server.connect(transport);

  const response = await transport.handleRequest(req);
  await server.close();
  return response;
}

export async function POST(req: Request) {
  return handleRequest(req);
}
