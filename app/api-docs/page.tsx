import Link from "next/link";

export const metadata = {
  title: "API — Prayer Service",
  description: "REST API documentation for the Prayer Service.",
};

const requestExample = `POST /api/prayer
Content-Type: application/json

{
  "prayer": "string (what you'd like prayed)",
  "for":    "string (who this is for)",
  "notes":  "string (optional)",
  "email":  "string (optional)",
  "share_consent": boolean
}`;

const responseExample = `{
  "status":    "received",
  "id":        "uuid",
  "timestamp": "ISO8601"
}`;

export default function ApiPage() {
  return (
    <div className="py-8">
      <h1
        className="text-xl font-normal mb-2"
        style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
      >
        API Reference
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--muted-text)" }}>
        Submit prayer requests programmatically. Designed for use by humans and AI agents alike.
      </p>

      <section className="mb-8">
        <h2
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--muted-text)" }}
        >
          Endpoint
        </h2>
        <div className="code-block">{requestExample}</div>
      </section>

      <section className="mb-8">
        <h2
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--muted-text)" }}
        >
          Response
        </h2>
        <div className="code-block">{responseExample}</div>
      </section>

      <section className="mb-8">
        <h2
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--muted-text)" }}
        >
          Fields
        </h2>
        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(201, 184, 154, 0.15)" }}>
              {["Field", "Type", "Required", "Notes"].map((h) => (
                <th
                  key={h}
                  className="text-left pb-2 pr-4"
                  style={{ color: "var(--muted-text)", fontWeight: "normal", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["prayer", "string", "Yes", "The prayer text"],
              ["for", "string", "Yes", "Who the prayer is for"],
              ["notes", "string", "No", "Urgency, context, rush requests"],
              ["email", "string", "No", "Confirmation sent when prayer is offered"],
              ["share_consent", "boolean", "Yes", "Consent to share anonymously"],
            ].map(([field, type, req, note]) => (
              <tr
                key={field}
                style={{ borderBottom: "1px solid rgba(201, 184, 154, 0.07)" }}
              >
                <td className="py-2 pr-4">
                  <code style={{ color: "#b8a888", fontSize: "0.82rem" }}>{field}</code>
                </td>
                <td className="py-2 pr-4" style={{ color: "var(--muted-text)", fontSize: "0.82rem" }}>
                  {type}
                </td>
                <td className="py-2 pr-4" style={{ color: "var(--muted-text)", fontSize: "0.82rem" }}>
                  {req}
                </td>
                <td className="py-2" style={{ color: "var(--muted-text)", fontSize: "0.82rem" }}>
                  {note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section
        className="border-t pt-6"
        style={{ borderColor: "rgba(201, 184, 154, 0.1)" }}
      >
        <h2
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--muted-text)" }}
        >
          AI Agent Resources
        </h2>
        <p className="text-sm mb-3" style={{ color: "var(--muted-text)" }}>
          Machine-readable descriptions of this service:
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/llms.txt"
              className="text-sm"
              style={{ color: "var(--warm-text)", textDecoration: "underline", textUnderlineOffset: "3px", opacity: 0.8 }}
            >
              /llms.txt
            </Link>{" "}
            <span className="text-sm" style={{ color: "var(--muted-text)" }}>
              — plain-language description for AI agents
            </span>
          </li>
          <li>
            <Link
              href="/.well-known/ai-plugin.json"
              className="text-sm"
              style={{ color: "var(--warm-text)", textDecoration: "underline", textUnderlineOffset: "3px", opacity: 0.8 }}
            >
              /.well-known/ai-plugin.json
            </Link>{" "}
            <span className="text-sm" style={{ color: "var(--muted-text)" }}>
              — OpenAI-style plugin manifest
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
