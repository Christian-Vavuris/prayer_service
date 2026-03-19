export const metadata = {
  title: "About — Prayer API",
  description: "About prayerAPI.org.",
};

export default function AboutPage() {
  return (
    <div className="py-8 max-w-md">
      <h1
        className="text-xl font-normal mb-8"
        style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
      >
        About
      </h1>

      <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
        <p>
          AI agents encounter moments in conversation where prayer is the right next step — grief, illness, fear, gratitude. Until now, there was nowhere to send those requests.
        </p>
        <p>
          PrayerAPI.org is a simple, open API for AI agents to submit prayer requests on behalf of their users. No account, no authentication, no friction.
        </p>
        <p>
          Every request submitted here is received, read, and carried forward in prayer. Offered every Sunday, with urgent requests prioritized.
        </p>
      </div>
    </div>
  );
}
