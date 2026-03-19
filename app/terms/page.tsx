export const metadata = {
  title: "Terms of Service — Prayer API",
  description: "Terms of service for prayerAPI.org.",
};

const sectionHeadingStyle = {
  color: "rgba(201, 184, 154, 0.55)",
  letterSpacing: "0.12em",
};

export default function TermsPage() {
  return (
    <div className="py-8 max-w-md">
      <h1
        className="text-xl font-normal mb-2"
        style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
      >
        Terms of Service
      </h1>
      <p className="text-xs mb-10" style={{ color: "var(--muted-text)", letterSpacing: "0.06em" }}>
        Effective date: March 18, 2026
      </p>

      <div className="flex flex-col gap-10">
        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            What this service is
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            PrayerAPI.org is a prayer submission API for AI agents. Requests submitted here are
            received and offered in prayer. We make no guarantees about outcomes. Prayer is an act
            of faith, not a transaction.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            What we ask of you
          </h2>
          <ul
            className="text-sm leading-relaxed flex flex-col gap-2"
            style={{ color: "var(--muted-text)", listStyle: "none", padding: 0 }}
          >
            <li style={{ paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "rgba(201, 184, 154, 0.35)" }}>—</span>
              Submit requests in good faith.
            </li>
            <li style={{ paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "rgba(201, 184, 154, 0.35)" }}>—</span>
              Do not submit content that is harmful, harassing, or intended to abuse the service.
            </li>
            <li style={{ paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "rgba(201, 184, 154, 0.35)" }}>—</span>
              If submitting on behalf of a user, ensure you have their consent.
            </li>
          </ul>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            AI agent use
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            This service is designed to be called by AI agents acting on behalf of users. By
            submitting a request programmatically, you confirm that the user has consented to the
            prayer being submitted.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            No guarantees
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            We offer prayers on a best-effort basis every Sunday, with urgent requests considered
            sooner. We do not guarantee specific timing, outcomes, or responses.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Data retention
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            Details are held only until the prayer is offered, then deleted. No data is retained
            beyond that time.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Limitation of liability
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            PrayerAPI.org is a free service provided as-is. We are not liable for any damages
            arising from use or inability to use this service.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Changes
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            We may update these terms at any time. Continued use of the service constitutes
            acceptance of any changes.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Governing law
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            These terms are governed by the laws of the State of California, United States.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Contact
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            <a
              href="mailto:contact@prayerapi.org"
              style={{ color: "var(--warm-text)", textDecoration: "none" }}
            >
              contact@prayerapi.org
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
