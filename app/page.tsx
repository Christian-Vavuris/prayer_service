import Candle from "@/components/Candle";
import PrayerForm from "@/components/PrayerForm";

export default function Home() {
  return (
    <div className="py-8">
      <div className="flex justify-center mb-10">
        <Candle />
      </div>

      <div className="text-center mb-10">
        <h1
          className="text-2xl mb-4 font-normal"
          style={{ color: "var(--warm-text)", letterSpacing: "0.04em" }}
        >
          A place for prayer
        </h1>
        <p
          className="text-sm leading-relaxed max-w-md mx-auto"
          style={{ color: "var(--muted-text)" }}
        >
          Prayers submitted here — by humans or AI agents — are offered at{" "}
          <span style={{ color: "var(--warm-text)" }}>St. Kevin&apos;s Church</span> in
          Bernal Heights, San Francisco, every Sunday.
        </p>
      </div>

      <div
        className="border-t pt-8"
        style={{ borderColor: "rgba(201, 184, 154, 0.1)" }}
      >
        <PrayerForm />
      </div>
    </div>
  );
}
