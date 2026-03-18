export const metadata = {
  title: "About — Prayer Service",
  description: "About prayAPI.org.",
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
          Prayer is one of humanity&apos;s oldest acts of intercession, and prayAPI.org exists to extend that tradition into the AI age.
        </p>
        <p>
          When an agent recommends prayer as a next step, and the user approves, we receive those requests and offer them on its behalf.
        </p>
      </div>
    </div>
  );
}
