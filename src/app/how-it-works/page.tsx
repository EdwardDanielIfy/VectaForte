import Link from "next/link";
import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Intake",
    body: "You submit your case details: what happened, when, and any wallet addresses, transaction hashes, or exchange names you already have. No dollar figure required upfront — we assess based on what's traceable, not what's at stake.",
  },
  {
    n: "02",
    title: "Blockchain Analysis",
    body: "We trace the transaction flow across the relevant blockchain(s), following the movement of funds through wallets, mixers, and exchanges using public ledger data and analysis tooling.",
  },
  {
    n: "03",
    title: "Documentation & Reporting",
    body: "Findings are compiled into a structured report. Every claim in the report is sourced to a specific transaction or on-chain event, so it can be independently verified by anyone who reviews it.",
  },
  {
    n: "04",
    title: "Handoff",
    body: "Your report is prepared for whoever is best placed to act on it — the exchange holding the funds, your legal counsel, or the relevant law enforcement or regulatory body. We support that handoff; we don't control what happens after.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-28">
      <Reveal>
        <span className="text-xs uppercase tracking-wider text-brass font-medium">
          How It Works
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3 text-balance">
          A defined process, no surprises.
        </h1>
        <p className="mt-5 text-slate max-w-xl leading-relaxed">
          Four stages, in order. Here&apos;s what actually happens at each
          one.
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.1}>
            <div className="flex gap-6 md:gap-10 py-8 border-t border-ink/10 first:border-t-0">
              <div className="font-mono text-3xl md:text-4xl text-brass/60 flex-shrink-0 w-16">
                {step.n}
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-ink mb-2.5">
                  {step.title}
                </h2>
                <p className="text-sm md:text-base text-slate leading-relaxed max-w-xl">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-8 border border-ink/10 rounded-sm p-8 bg-steel/[0.03]">
          <p className="text-sm text-slate leading-relaxed">
            <span className="text-ink font-medium">A note on fees: </span>
            we don&apos;t charge based on a percentage of funds under
            investigation, and we won&apos;t ask for payment before a case
            has been reviewed. If our process differs from this at any point,
            ask us to explain why.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-14 text-center">
          <Link
            href="/start-a-case"
            className="inline-block bg-ink text-paper text-sm font-medium px-8 py-4 rounded-sm hover:bg-steel transition-colors"
          >
            Start a Case Review
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
