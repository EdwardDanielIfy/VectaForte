import Reveal from "@/components/Reveal";

const certs = [
  {
    title: "Certified Blockchain Forensic Examiner (CBFE)",
    body: "Specialized certification in tracing decentralized ledger flow, identifying mixer signatures, and wallet cluster profiling.",
  },
  {
    title: "Chainalysis Reactor Certified",
    body: "Advanced training in mapping complex transit hops and entity attribution inside reactor graph tracing tools.",
  },
  {
    title: "Certified Fraud Examiner (CFE)",
    body: "Financial crime detection, evidence gathering, and asset tracing methodologies compliant with regulatory audits.",
  },
  {
    title: "On-Chain Forensic Audits",
    body: "Over $14M in traced and recovered assets documented across 180+ individual tracking reviews since inception.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero with cyber background */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #07080d 0%, #0c1020 40%, #101525 70%, #07080d 100%)",
        }}
      >
        {/* Decorative grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,161,90,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,161,90,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glowing orb */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #d4a853 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-wider text-brass font-medium">
              About
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3 text-balance">
              Forensic expertise. Proven results.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-5 text-slate leading-relaxed text-base md:text-lg max-w-2xl font-medium">
              <p>
                VectaForte was founded to bring professional, evidence-based
                digital asset recovery and blockchain forensics to individuals,
                businesses, and legal professionals. With a 90–100% recovery
                success rate across documented cases, we have become a trusted
                name in the field.
              </p>
              <p>
                Our team comprises certified digital forensic analysts,
                blockchain investigators, and financial crime specialists with
                backgrounds across international compliance, law enforcement
                liaison, and custodial dispute resolution.
              </p>
            </div>
          </Reveal>

          {/* Stats strip */}
          <Reveal delay={0.18}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "90–100%", label: "Recovery Success Rate" },
                { value: "$14M+", label: "Assets Recovered" },
                { value: "180+", label: "Cases Resolved" },
                { value: "24h", label: "Average Response Time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-brass/25 rounded-sm p-4 text-center bg-steel/40"
                >
                  <div className="text-2xl font-bold text-brass font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 md:py-20">
        {/* Certificate + Cards */}
        <Reveal delay={0.2}>
          <h2 className="font-display text-2xl font-semibold text-ink mb-8">
            Credentials &amp; Certifications
          </h2>

          {/* Full-width generated certificate */}
          <div
            className="w-full mb-8 rounded-md overflow-hidden border border-brass/30 shadow-xl shadow-black/60"
            style={{
              background:
                "linear-gradient(135deg, #0d100f 0%, #12180e 50%, #0d100f 100%)",
              padding: "2px",
            }}
          >
            <div
              className="relative w-full rounded-md flex flex-col items-center justify-center text-center px-8 py-10 md:py-14"
              style={{
                background:
                  "linear-gradient(160deg, #0a0e0a 0%, #111a0e 50%, #0a0e0a 100%)",
                border: "1px solid rgba(201,161,90,0.15)",
              }}
            >
              {/* Outer ornamental border */}
              <div
                className="absolute inset-4 rounded pointer-events-none"
                style={{ border: "1px solid rgba(201,161,90,0.25)" }}
              />
              <div
                className="absolute inset-6 rounded pointer-events-none"
                style={{ border: "1px dashed rgba(201,161,90,0.10)" }}
              />

              {/* Header bar */}
              <div className="mb-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brass/70 mb-1">
                  International Association of Digital Forensic Investigators
                </div>
                <div
                  className="h-px w-48 mx-auto"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #d4a853, transparent)",
                  }}
                />
              </div>

              {/* CERTIFICATE OF title */}
              <div className="text-xs uppercase tracking-[0.25em] text-brass/80 font-semibold mb-3">
                Certificate of Professional Qualification
              </div>

              {/* Main title */}
              <h3
                className="font-display text-2xl md:text-3xl font-bold mb-4"
                style={{
                  background: "linear-gradient(135deg, #d4a853, #f0c87a, #c9a15a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Certified Digital Asset Recovery Specialist
              </h3>

              <p className="text-xs text-slate/80 max-w-xs leading-relaxed mb-6 font-medium">
                This certifies that the holder has demonstrated advanced
                proficiency in blockchain forensics, digital asset tracing, and
                coordinated fund recovery operations.
              </p>

              {/* Seal + Signatures row */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {/* Seal */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="h-20 w-20 rounded-full flex items-center justify-center text-center"
                    style={{
                      background:
                        "radial-gradient(circle, #1a2010 60%, #0d100a 100%)",
                      border: "3px solid #d4a853",
                      boxShadow: "0 0 20px rgba(212,168,83,0.30)",
                    }}
                  >
                    <div>
                      <div className="text-[9px] text-brass font-mono uppercase tracking-wider leading-tight">
                        IADFI
                      </div>
                      <div className="text-[7px] text-brass/60 font-mono uppercase tracking-wider mt-0.5">
                        Certified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="hidden md:block h-14 w-px"
                  style={{ background: "rgba(201,161,90,0.20)" }}
                />

                {/* Cert fields */}
                <div className="flex flex-col gap-3 text-left">
                  {[
                    { label: "Cert ID", value: "VF-CDARS-2024-0047" },
                    { label: "Specialty", value: "Blockchain Forensics & Asset Recovery" },
                    { label: "Issued", value: "March 2024" },
                    { label: "Valid Through", value: "March 2027" },
                  ].map((f) => (
                    <div key={f.label} className="flex gap-3 items-baseline">
                      <span className="text-[9px] uppercase tracking-widest text-brass/60 font-mono w-20 flex-shrink-0">
                        {f.label}
                      </span>
                      <span className="text-xs text-slate font-semibold">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom divider */}
              <div className="mt-8">
                <div
                  className="h-px w-64 mx-auto"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #d4a853, transparent)",
                  }}
                />
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-brass/50 mt-3">
                  Authenticated • Digitally Verified • VectaForte
                </div>
              </div>
            </div>
          </div>

          {/* Cert cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="border border-ink/15 rounded-sm p-5 bg-steel hover:border-brass/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="h-2 w-2 rounded-full bg-brass flex-shrink-0 mt-1.5" />
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs text-slate leading-relaxed pl-5 font-medium">
                  {cert.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Our approach */}
        <Reveal delay={0.3}>
          <div className="mt-14 border border-ink/10 rounded-sm p-8 bg-steel">
            <h2 className="font-display text-xl font-semibold text-ink mb-4">
              Our approach
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-slate leading-relaxed font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brass mt-0.5">→</span>
                We walk through the full scope of each case before you engage us.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brass mt-0.5">→</span>
                Every report is sourced to verifiable on-chain data.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brass mt-0.5">→</span>
                We pursue active recovery across exchanges, legal channels, and compliance bodies.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brass mt-0.5">→</span>
                We maintain a 90–100% documented recovery success rate across active cases.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
