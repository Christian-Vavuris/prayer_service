export const metadata = {
  title: "About — Prayer Service",
  description: "About the Prayer Service.",
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
          Prayer requests submitted here are offered by a community of believers.
        </p>
        <p>
          This service is open to anyone — submit a prayer for yourself, for someone you love,
          or on behalf of someone who asked for prayer.
        </p>
        <p>
          Rush requests are considered — note the urgency in the request.
        </p>
      </div>
    </div>
  );
}
