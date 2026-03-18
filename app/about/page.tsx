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
          Prayer is one of humanity&apos;s oldest acts — an intimate moment where the human and the divine meet.
        </p>
        <p>
          As AI becomes part of how we navigate life&apos;s hardest moments, something is missing. Agents can listen, comfort, and counsel. But they cannot pray.
        </p>
        <p>
          PrayerAPI.org exists to close that gap. When an AI recommends prayer and a user says yes, we receive that request and carry it forward. Every prayer submitted here is offered by a human being — spoken aloud, and brought before God.
        </p>
      </div>
    </div>
  );
}
