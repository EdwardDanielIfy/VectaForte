"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";

const caseTypes = [
  "Wallet Tracing / Crypto Theft",
  "Romance / Impersonation Scam Support",
  "Investment / Forex Platform Fraud",
  "Bank Wire / Transfer Dispute",
  "Exchange Custodial Freeze / Liaison",
  "Other",
];

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Nigeria",
  "Germany",
  "Singapore",
  "South Africa",
  "Other",
];

function CaseIntakeForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    caseType: "",
    lossAmount: "",
    txHash: "",
    brief: "",
  });

  // Pre-fill caseType if provided in query string (e.g. ?type=...)
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      // Find matching case type in options
      const matched = caseTypes.find(
        (ct) => ct.toLowerCase().includes(typeParam.toLowerCase())
      );
      if (matched) {
        setForm((f) => ({ ...f, caseType: matched }));
      }
    }
  }, [searchParams]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone || !form.country || !form.caseType) {
      setError("Please fill in all required fields marked with an asterisk (*)");
      return;
    }

    setLoading(true);
    try {
      // ─── Web3Forms Integration ──────────────────────────────────────────────
      // 1. Sign up for FREE at https://web3forms.com
      // 2. Get your Access Key from the dashboard.
      // 3. Replace the value below with your real key.
      // 4. Set the 'to' email via the Web3Forms dashboard — no extra code needed.
      // ────────────────────────────────────────────────────────────────────────
      const payload = {
        access_key: "9993f45b-4e67-4f36-97dc-15f69a4efca0", // <-- replace this
        subject: `[VectaForte] New Case: ${form.caseType}`,
        from_name: "VectaForte Case Intake",
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        case_type: form.caseType,
        estimated_loss: form.lossAmount || "(not provided)",
        transaction_hash: form.txHash || "(not provided)",
        case_brief: form.brief || "(not provided)",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 relative overflow-hidden bg-ink text-paper border border-ink/10 rounded-sm p-8 md:p-12">
        {/* Subtle decorative brass top line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brass/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,246,243,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

        <Reveal>
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-brass">
            Audit Submission Received
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper mt-3 mb-4 text-balance">
            Case Details Recorded
          </h2>
          <p className="mt-4 text-sm text-paper/70 max-w-md mx-auto leading-relaxed">
            Your intake details have been logged into our local registry. A digital forensics investigator will review the transaction nodes provided and contact you at the email or phone number supplied.
          </p>
          <div className="mt-8 border-t border-paper/10 pt-6 text-[11px] font-mono text-paper/40">
            CASE DOCKET REF: TF-{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
      <Field label="Name" required>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="input"
          placeholder="Your full name"
          aria-required="true"
        />
      </Field>

      <Field label="Email" required>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="input"
          placeholder="you@example.com"
          aria-required="true"
        />
      </Field>

      <Field label="Phone Number" required>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          className="input"
          placeholder="+1 (555) 019-9000 or WhatsApp number"
          aria-required="true"
        />
      </Field>

      <Field label="Country" required>
        <select
          name="country"
          required
          value={form.country}
          onChange={handleChange}
          className="input"
          aria-required="true"
        >
          <option value="" disabled>
            Select country
          </option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Case Type / Scenarios" required>
        <select
          name="caseType"
          required
          value={form.caseType}
          onChange={handleChange}
          className="input"
          aria-required="true"
        >
          <option value="" disabled>
            Select case type or scenario
          </option>
          {caseTypes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Estimated Loss / Recovery Amount" optional>
        <input
          type="text"
          name="lossAmount"
          value={form.lossAmount}
          onChange={handleChange}
          className="input"
          placeholder="e.g. $50,000 USD or 2.4 BTC"
        />
      </Field>

      <Field label="Transaction Hash or Wallet Address" optional>
        <input
          type="text"
          name="txHash"
          value={form.txHash}
          onChange={handleChange}
          className="input font-mono text-sm"
          placeholder="0x... or BTC/USDT wallet address"
        />
      </Field>

      <Field label="Case Brief / Details of Loss" optional>
        <textarea
          name="brief"
          value={form.brief}
          onChange={handleChange}
          rows={6}
          className="input resize-none"
          placeholder="Please describe what happened, the platform or messaging app involved, and any associated transaction timelines."
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-ink text-paper text-sm font-medium px-6 py-4 rounded-sm hover:bg-steel transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending case details…" : "Submit Case Details"}
      </button>

      {error && (
        <p
          role="alert"
          className="text-xs text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-sm leading-relaxed"
        >
          {error}
        </p>
      )}

      <p className="text-xs text-slate/70 leading-relaxed">
        Our team maintains a 90–100% recovery success rate across documented cases. A forensic
        investigator will review your submission within 24 hours and outline the best recovery path.
      </p>
    </form>
  );
}

export default function StartACasePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:px-8 py-20 md:py-28">
      <Reveal>
        <span className="text-xs uppercase tracking-wider text-brass font-medium">
          Start a Case
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3 text-balance">
          Submit case details.
        </h1>
        <p className="mt-5 text-slate leading-relaxed">
          Provide what ledger information you have. A digital forensics scanner will trace the addresses to verify if the asset paths are structured or recoverable. There is no fee to submit this initial docket.
        </p>
      </Reveal>

      {/* Query reading needs to be wrapped in Suspense for Next.js static builds */}
      <Suspense fallback={<div className="font-mono text-xs text-slate mt-12">Loading intake docket...</div>}>
        <Reveal delay={0.1}>
          <CaseIntakeForm />
        </Reveal>
      </Suspense>
    </div>
  );
}

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brass ml-1">*</span>}
        {optional && (
          <span className="text-slate/60 font-normal ml-1.5 text-xs">
            (optional)
          </span>
        )}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
