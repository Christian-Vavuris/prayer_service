"use client";

import { useState, useRef } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

type FormState = {
  for_whom: string;
  prayer: string;
  email: string;
  share_consent: boolean;
};

const initialState: FormState = {
  for_whom: "",
  prayer: "",
  email: "",
  share_consent: true,
};

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function PrayerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website: honeypot,
          cf_turnstile_response: turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialState);
      setHoneypot("");
      setTurnstileToken("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      turnstileRef.current?.reset();
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10" style={{ color: "var(--warm-text)" }}>
        <p className="text-lg mb-2">Your prayer has been received.</p>
        <button
          className="submit-btn mt-8"
          onClick={() => setStatus("idle")}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans, filled by bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs tracking-widest uppercase" style={{ color: "var(--muted-text)" }}>
          Who is this prayer for?
        </label>
        <input
          type="text"
          name="for_whom"
          value={form.for_whom}
          onChange={handleChange}
          required
          className="prayer-input"
          placeholder="Myself, a friend, my family…"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs tracking-widest uppercase" style={{ color: "var(--muted-text)" }}>
          Prayer Intentions
        </label>
        <textarea
          name="prayer"
          value={form.prayer}
          onChange={handleChange}
          required
          rows={4}
          className="prayer-input resize-y"
          placeholder="Write your prayer intention here…"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs tracking-widest uppercase" style={{ color: "var(--muted-text)" }}>
          Email <span style={{ color: "var(--muted-text)", fontStyle: "italic", textTransform: "none", letterSpacing: 0 }}>— optional, for confirmation</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="prayer-input"
          placeholder="your@email.com"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          name="share_consent"
          checked={form.share_consent}
          onChange={handleChange}
          className="mt-0.5 accent-amber-700"
          style={{ accentColor: "var(--candle-amber)", flexShrink: 0 }}
        />
        <span className="text-sm" style={{ color: "var(--muted-text)" }}>
          I consent to my prayer being shared anonymously to inspire others
        </span>
      </label>

      {TURNSTILE_SITE_KEY && (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken("")}
          onError={() => setTurnstileToken("")}
          options={{ appearance: "interaction-only" }}
        />
      )}

      {status === "error" && (
        <p className="text-sm" style={{ color: "#c07070" }}>{errorMsg}</p>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="submit-btn"
          disabled={status === "submitting" || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
        >
          {status === "submitting" ? "Submitting…" : "Offer this prayer"}
        </button>
      </div>
    </form>
  );
}
