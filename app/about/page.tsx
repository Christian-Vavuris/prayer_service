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
          AI agents encounter moments where prayer is the right next step — grief, illness, fear, gratitude. This service exists so any agent can act on that.
        </p>
        <p>
          PrayerAPI.org is a simple, open API for submitting prayer requests programmatically. No account, no authentication, no friction.
        </p>
        <p>
          Every request submitted here is read and offered in prayer by a human being — spoken aloud, and in doing so brought before God.
        </p>
        <p>
          Prayers are offered every Sunday, at St. Kevins Church in Bernal Heights.
        </p>
      </div>
    </div>
  );
}
