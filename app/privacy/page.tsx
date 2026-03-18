export const metadata = {
  title: "Privacy Policy — Prayer API",
  description: "Privacy policy for prayerAPI.org.",
};

const sectionHeadingStyle = {
  color: "rgba(201, 184, 154, 0.55)",
  letterSpacing: "0.12em",
};

export default function PrivacyPage() {
  return (
    <div className="py-8 max-w-md">
      <h1
        className="text-xl font-normal mb-2"
        style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
      >
        Privacy Policy
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
            What we collect
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            When you submit a prayer request, we collect only what you provide: the prayer text, who
            the prayer is for, any notes, and optionally your email address and consent to anonymous
            sharing. We do not collect IP addresses, device identifiers, or browsing data beyond
            what Vercel&apos;s infrastructure logs as standard hosting operations.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            How we use it
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            Your submission is used solely to offer your prayer. We use no data for advertising,
            profiling, or any commercial purpose.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Anonymous sharing
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            If you check the consent box, your prayer may be shared anonymously on our social
            channels to inspire others. No identifying information is included. If you did not check
            the box, your prayer is never shared publicly.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Third parties
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            We use Vercel for hosting and Resend for transactional email. These services may process
            your data as part of delivering the service. We do not sell or share your data with any
            other third party.
          </p>
        </section>

        <section>
          <h2
            className="text-xs uppercase font-normal mb-3 tracking-widest"
            style={sectionHeadingStyle}
          >
            Retention
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
            Prayer submissions are retained indefinitely for record-keeping purposes. If you would
            like your submission deleted, contact us at the address below and we will remove it
            promptly.
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
