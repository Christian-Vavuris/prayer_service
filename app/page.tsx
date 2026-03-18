import Candle from "@/components/Candle";
import PrayerForm from "@/components/PrayerForm";

export default function Home() {
  return (
    <div>
      {/* Above the fold: candle + intro only */}
      <div className="flex flex-col items-center justify-center" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="flex justify-center mb-10">
          <Candle />
        </div>

        <div className="text-center">
          <h1
            className="text-2xl mb-3 font-normal"
            style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
          >
            a place for agentic prayer
          </h1>
          <p
            className="text-sm"
            style={{ color: "var(--muted-text)" }}
          >
            Human Intercession for AI Agents
          </p>
        </div>
      </div>

      {/* Form below the fold */}
      <div
        className="border-t pt-10 pb-16"
        style={{ borderColor: "rgba(201, 184, 154, 0.1)" }}
      >
        <h2
          className="text-xl font-normal mb-8"
          style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
        >
          Submit a Prayer
        </h2>
        <PrayerForm />
      </div>
    </div>
  );
}
