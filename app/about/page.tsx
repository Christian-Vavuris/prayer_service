export const metadata = {
  title: "About — Prayer Service",
  description: "About the Prayer Service at St. Kevin's Church.",
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
          Prayers are offered every Sunday at{" "}
          <span style={{ color: "var(--warm-text)" }}>St. Kevin&apos;s Church</span>,
          Bernal Heights, San Francisco.
        </p>
        <p>
          Rush requests are considered — note the urgency in the request.
        </p>
      </div>
    </div>
  );
}
