import Link from "next/link";
import TracePath from "@/components/TracePath";
import Reveal from "@/components/Reveal";
import TerminalWidget from "@/components/TerminalWidget";
import { siteConfig } from "@/lib/config";

const services = [
  {
    title: "Wallet & Transaction Tracing",
    body: "Blockchain analysis to follow the movement of funds across wallets, chains, and mixers, producing a documented transaction trail.",
  },
  {
    title: "Exchange Liaison Support",
    body: "Preparing and submitting the documentation exchanges require to act on a flagged account, including transaction evidence and formal requests.",
  },
  {
    title: "Case Documentation",
    body: "Structured forensic reports suitable for law enforcement, regulators, or legal counsel — every finding sourced and reproducible.",
  },
];

const process = [
  { n: "01", title: "Intake", body: "You share the case details and any known wallet addresses or transaction hashes." },
  { n: "02", title: "Blockchain Analysis", body: "We trace the transaction flow across relevant chains and exchanges." },
  { n: "03", title: "Documentation", body: "Findings are compiled into a structured report with sourced evidence." },
  { n: "04", title: "Handoff", body: "Your report is prepared for the exchange, legal counsel, or authority best placed to act." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-block text-xs uppercase tracking-wider text-brass font-medium mb-5">
                  Blockchain Forensics
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-ink text-balance">
                  We trace, document, and recover lost assets.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-base md:text-lg text-slate leading-relaxed max-w-md font-medium">
                  {siteConfig.name} provides active digital asset recovery,
                  blockchain tracing, exchange liaison, and forensic case
                  documentation for individuals, businesses, and legal counsel.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/start-a-case"
                    className="bg-brass text-[#07080d] text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-brass/90 transition-colors"
                  >
                    Start a Case Review
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="border border-ink/20 text-ink text-sm font-medium px-6 py-3.5 rounded-sm hover:border-ink/40 transition-colors"
                  >
                    How It Works
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="relative">
              <TracePath />
            </div>
          </div>
        </div>
      </section>

      {/* Live Forensics Scan Monitor Ticker */}
      <section className="border-b border-ink/10 bg-steel/40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <Reveal>
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-brass">
                  Scanner Network
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mt-3 text-balance">
                  Decentralized Ledger Forensic Trace Node.
                </h2>
                <p className="mt-4 text-xs md:text-sm text-slate leading-relaxed">
                  Our live scan console displays simulated node parsing audits, tracking wallet clusters, attribution queries, and transaction hop tracking.
                </p>
                <div className="mt-6 flex flex-col gap-2.5 text-[11px] font-mono text-slate/80">
                  <span className="flex items-center gap-1.5">— Clustered Ledger: 140K+ KYC Identifiers</span>
                  <span className="flex items-center gap-1.5">— Success Rate: 94%+ Proof Verification</span>
                  <span className="flex items-center gap-1.5">— Focus: Corporate Forensics & Civil Audits</span>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-2">
              <Reveal delay={0.1}>
                <TerminalWidget />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
        <Reveal>
          <span className="text-xs uppercase tracking-wider text-brass font-medium">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-xl text-balance">
            Forensic work, scoped precisely.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full bg-steel border border-ink/10 rounded-sm p-7 hover:border-brass/40 transition-colors">
                <div className="text-xs font-mono text-brass mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/services"
            className="inline-block mt-8 text-sm font-medium text-ink border-b border-brass hover:text-slate transition-colors"
          >
            View all services →
          </Link>
        </Reveal>
      </section>

      {/* Forensic Case Applications / Asset Tracing Scenarios */}
      <section className="border-t border-ink/10 bg-steel/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-wider text-brass font-medium">
              Case Scenarios
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-xl text-balance">
              Forensic tracing applied to your case.
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate leading-relaxed max-w-2xl">
              We compile and structure on-chain evidence across several complex recovery tracking scenarios.
              Our reports are designed specifically to support legal actions, exchange freeze compliance, and police investigations.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "Lost Cryptocurrency & Wallet Exploits",
                desc: "Tracing digital assets drained from hardware or custodial wallets due to unauthorized private key compromises, phishing, or contract approvals.",
                typeCode: "Wallet Tracing / Crypto Theft",
                svg: (
                  <svg className="h-10 w-10 text-brass mb-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="50" height="50" rx="3" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <circle cx="50" cy="35" r="4" fill="currentColor" />
                    <circle cx="50" cy="65" r="4" fill="currentColor" />
                    <line x1="50" y1="35" x2="70" y2="48" stroke="#c9a15a" strokeWidth="2.5" />
                    <circle cx="70" cy="48" r="5" fill="#c9a15a" />
                    <path d="M30 48 H50" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                  </svg>
                )
              },
              {
                title: "Investment & Forex Platform Schemes",
                desc: "Reconstructing transaction trails and mapping transit hops for funds deposited into fake trading brokers, mining scams, or rugged protocols.",
                typeCode: "Investment / Forex Platform Fraud",
                svg: (
                  <svg className="h-10 w-10 text-brass mb-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 70 L40 50 L60 60 L80 35" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <circle cx="20" cy="70" r="3.5" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="40" cy="50" r="3.5" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="60" cy="60" r="3.5" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="80" cy="35" r="4" fill="currentColor" />
                    <path d="M80 35 L80 65 L60 75" stroke="#c9a15a" strokeWidth="2.5" strokeDasharray="3 3" />
                    <circle cx="60" cy="75" r="5" fill="#c9a15a" />
                  </svg>
                )
              },
              {
                title: "Romance & Impersonation Scams",
                desc: "Analyzing the flow of funds transmitted to actors on messaging or dating applications, tracing the blockchain paths to active withdrawal nodes.",
                typeCode: "Romance / Impersonation Scam Support",
                svg: (
                  <svg className="h-10 w-10 text-brass mb-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="40" r="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                    <circle cx="65" cy="40" r="7" stroke="#c9a15a" strokeWidth="2.5" />
                    <path d="M35 47 L45 52" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                    <path d="M65 47 L55 52" stroke="#c9a15a" strokeWidth="2.5" />
                    <circle cx="50" cy="55" r="5" fill="#c9a15a" />
                  </svg>
                )
              },
              {
                title: "Bank Transfer & Wire Disputes",
                desc: "Tracking fiat-to-crypto entry portals, documenting transactions where stolen capital was converted to blockchain assets to assist recovery claims.",
                typeCode: "Bank Wire / Transfer Dispute",
                svg: (
                  <svg className="h-10 w-10 text-brass mb-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="65" width="50" height="8" fill="currentColor" fillOpacity="0.2" />
                    <rect x="30" y="38" width="6" height="27" fill="currentColor" fillOpacity="0.2" />
                    <rect x="47" y="38" width="6" height="27" fill="currentColor" fillOpacity="0.2" />
                    <rect x="64" y="38" width="6" height="27" fill="currentColor" fillOpacity="0.2" />
                    <path d="M20 38 L50 22 L80 38 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M50 25 L82 50" stroke="#c9a15a" strokeWidth="2.5" />
                    <circle cx="82" cy="50" r="4.5" fill="#c9a15a" />
                  </svg>
                )
              },
            ].map((app, i) => (
              <Reveal key={app.title} delay={i * 0.08}>
                <div className="h-full bg-steel border border-ink/10 rounded-sm p-6 hover:border-brass/30 transition-colors flex flex-col justify-between">
                  <div>
                    {app.svg}
                    <h3 className="font-display text-base font-semibold text-ink mb-2">
                       {app.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed mb-6">
                      {app.desc}
                    </p>
                  </div>
                  <Link
                    href={`/start-a-case?type=${encodeURIComponent(app.typeCode)}`}
                    className="text-xs font-mono font-medium text-brass hover:text-ink transition-colors mt-auto inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    Initiate Case Outline &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Reviews / Testimonials Section */}
      <section className="bg-ink-soft text-paper relative overflow-hidden border-t border-paper/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,246,243,0.015)_1px,transparent_1px)] bg-[size:100%_12px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Reveal>
            <span className="text-xs uppercase tracking-wider text-brass font-medium">
              Forensic Case Reviews
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-xl text-balance">
              Attributed tracking results from our clients.
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate leading-relaxed max-w-xl">
              We focus on delivering high-integrity tracing charts and compliance evidence. Read reviews from clients who deployed our forensic reports during cases.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "Marcus K.",
                role: "Wallet Hack Audit",
                img: "/images/testifier-1.png",
                text: "After 2.5 BTC was drained, VectaForte mapped the hops through 12 addresses directly to Binance. Their forensic documentation successfully froze the target exchange accounts."
              },
              {
                name: "Elena S.",
                role: "Platform Fraud Trace log",
                img: "/images/testifier-2.png",
                text: "A fake trading pool locked my life savings. VectaForte reconstructed the token paths and proved the funds went straight into offshore mixers. Their audited logs are backing my civil claim."
              },
              {
                name: "David T.",
                role: "Romance Scam Claimant",
                img: "/images/testifier-3.png",
                text: "Scammers took $85k over six months. VectaForte mapped the withdrawal nodes in Southeast Asia, giving cyber-crime units the transactional proof needed to initiate cross-jurisdictional reclaims."
              },
              {
                name: "Samantha L.",
                role: "Invoice Wire Intercept",
                img: "/images/testifier-4.png",
                text: "An intercept scam routed client wire payments to a crypto portal. VectaForte tracked the conversions within 24 hours, giving us the legal backing necessary to assert immediate asset freeze requests."
              },
              {
                name: "Jonathan W.",
                role: "Custodial Exchange Liaison",
                img: "/images/testifier-5.png",
                text: "Our exchange account was frozen due to a compliance false alarm. VectaForte compiled a structural clean source-of-funds report within 48 hours, and the exchange cleared our balance restriction instantly."
              },
              {
                name: "Amara N.",
                role: "Investment Pool Dispute",
                img: "/images/testifier-6.png",
                text: "We suspected an offshore DeFi manager of skimming returns. VectaForte audited the smart contract logs and mapped the secret withdrawal routes to unlinked private cold storage wallets. Clear evidence."
              },
              {
                name: "Robert H.",
                role: "Cross-Border Fraud Legal counsel",
                img: "/images/testifier-7.png",
                text: "During a commercial fraud case, we needed to prove a wire transfer entered the blockchain node system. VectaForte tracked the entry transaction hashes to an off-ramp bank. The court fully admitted this report."
              }
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="h-full bg-steel border border-ink/10 rounded-sm p-6 flex flex-col justify-between hover:bg-steel-light transition-all shadow-md hover:shadow-brass/5">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, starIdx) => (
                        <svg key={starIdx} className="h-3.25 w-3.25 text-brass fill-current" viewBox="0 0 24 24">
                          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-slate italic leading-relaxed mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  
                  {/* Testifier profile details */}
                  <div className="flex items-center gap-3 border-t border-ink/10 pt-4 mt-auto">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="h-10 w-10.5 rounded-full object-cover grayscale brightness-95 border border-[#c9a15a]/20"
                    />
                    <div>
                      <div className="text-[12px] font-semibold text-ink font-display">
                        {t.name}
                      </div>
                      <div className="text-[9px] text-brass uppercase tracking-wider font-mono mt-0.5">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="border-y border-ink/10 bg-[#0a0b12]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-wider text-brass font-medium">
              Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-xl text-balance">
              A defined sequence, start to finish.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="font-mono text-2xl text-brass/70 mb-3">
                    {step.n}
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {step.body}
                  </p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-3 left-[calc(100%+1rem)] w-[calc(2rem-1rem)] h-px bg-ink/15" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
        <Reveal>
          <div className="border border-brass/25 rounded-md p-8 md:p-12 bg-[#0d0f19] shadow-lg shadow-black/40 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-4">
                Recovery is our goal. Evidence is our method.
              </h3>
              <p className="text-sm text-slate leading-relaxed font-medium">
                We pursue active fund recovery through exchange liaison, legal escalation, and compliance-backed freeze requests. Where recovery isn&apos;t possible, we deliver forensic-grade documentation for law enforcement and court proceedings.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Active digital asset recovery",
                "Exchange freeze & retrieval coordination",
                "Court-admissible forensic reports",
                "Law enforcement & regulator handoff"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brass flex-shrink-0" />
                  <span className="text-sm text-slate font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
