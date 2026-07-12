import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Digital Asset Recovery",
    body: "We actively coordinate and recover lost corporate assets, intellectual property, and high-value digital property. Through a combination of forensic tracking, exchange liaison, and administrative reclaims, we assist clients in restoring ownership of compromised digital assets.",
    includes: [
      "Active fund recovery coordination",
      "Exchange freeze & funds retrieval",
      "Compliance-backed asset reclaim requests",
      "Escalation to legal counsel or law enforcement",
    ],
    image: "/images/service-recovery.png",
  },
  {
    title: "Crypto Currency Recovery",
    body: "We specialize in recovering stolen cryptocurrency, tokens, and NFTs lost to phishing, drainer scripts, or wallet exploitation. We trace transaction trails to exchanges, coordinate freeze actions, and cooperate with security teams to secure your assets.",
    includes: [
      "Crypto drainer tracking & analysis",
      "Exchange freeze action liaison",
      "Hacked wallet security & recovery support",
      "Compromised seed phrase audit",
    ],
    image: "/images/service-crypto.png",
  },
  {
    title: "Wallet & Asset Tracing",
    body: "We trace transactions across multiple blockchains (BTC, ETH, Solana, BSC, Tron) to follow funds from inception through mixers, cluster hop wallets, and exchange endpoints. We construct highly detailed visual and tabular path maps.",
    includes: [
      "Multi-chain wallet flows analysis",
      "Hop-by-hop ledger tracking maps",
      "Mixer and smart contract attribution",
      "Exchange payout account tracking",
    ],
    image: "/images/service-tracing.png",
  },
  {
    title: "Fraud & Broker Investigation",
    body: "We investigate fraudulent brokers, unlicensed trading pools, binary options platforms, and DeFi rug pulls. We audit platform legitimacy and map out withdrawal routes to construct civil and commercial recovery evidence packs.",
    includes: [
      "Broker legitimacy & registration audits",
      "Fake platform transaction tracing",
      "Platform wallet attribution",
      "Scam operator behavior attribution",
    ],
    image: "/images/service-broker.png",
  },
  {
    title: "Investment Scam Recovery",
    body: "We coordinate recovery packages for victims of high-yield Ponzis, crypto investment clubs, and fake mining pools. We package visual traces and submit compliance audit requests to freeze and retrieve funds held by custodial exchanges.",
    includes: [
      "Yield platform audit packages",
      "Custodial exchange liaison requests",
      "Compliance freeze coordinates",
      "Case presentation packages for law enforcement",
    ],
    image: "/images/service-investment.png",
  },
  {
    title: "Wire Transfer Recovery",
    body: "We investigate fiat-to-crypto conversion trails in bank wire intercept and business email compromise cases. We build wire recall reports and coordinate with commercial banks to reclaim funds at exit and exchange routes.",
    includes: [
      "Fiat-to-crypto path tracking",
      "Bank wire recall package drafting",
      "Coordinated financial institution liaison",
      "Intermediate payment processor routing logs",
    ],
    image: "/images/service-fiat.png",
  },
  {
    title: "Blockchain Forensic Analysis",
    body: "We conduct deep-dive digital forensic assessments for financial compliance, corporate disputes, and litigation support. All investigations yield reproducible, structured, court-admissible forensic packages.",
    includes: [
      "Court-admissible blockchain trace reports",
      "Chain-of-custody documentation checks",
      "Regulatory compliance ready formatting",
      "Expert witness case preparation support",
    ],
    image: "/images/service-documentation.png",
  },
  {
    title: "Recovery Consultation & Intake",
    body: "We provide comprehensive pre-case reviews and feasibility assessments. Our auditors inspect transaction records, identify recovery routes, and map out the legal and technological feasibility before launch.",
    includes: [
      "Case intake transaction verification",
      "Recovery feasibility checklist audit",
      "Liaison path viability rating",
      "Investigation strategy consultation",
    ],
    image: "/images/service-liaison.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
      <Reveal>
        <span className="text-xs uppercase tracking-wider text-brass font-medium">
          Services
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3 max-w-2xl text-balance">
          We trace, document, and recover.
        </h1>
        <p className="mt-5 text-slate max-w-xl leading-relaxed font-medium">
          From active digital asset recovery to court-ready forensic documentation — every service is designed to produce verifiable, actionable results for individuals, businesses, and legal professionals.
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="border border-ink/10 rounded-sm p-8 md:p-10 bg-steel hover:border-brass/40 transition-colors">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-5 mb-4">
                    <img
                      className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover border border-brass/25 shadow-md flex-shrink-0"
                      src={s.image}
                      alt={s.title}
                    />
                    <div>
                      <div className="text-xs font-mono text-brass mb-1">
                        0{i + 1}
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-ink">
                        {s.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-base text-slate leading-relaxed font-medium">
                    {s.body}
                  </p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-ink/10 pt-6 md:pt-0 md:pl-8">
                  <div className="text-xs uppercase tracking-wider text-brass/80 mb-4 font-semibold">
                    Includes
                  </div>
                  <ul className="flex flex-col gap-3">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-slate flex items-start gap-2.5 font-medium leading-snug"
                      >
                        <span className="text-brass mt-1.5 h-1.5 w-1.5 rounded-full bg-brass flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-16 text-center">
          <p className="text-slate font-medium mb-6 max-w-lg mx-auto leading-relaxed">
            Ready to start recovery? Our team reviews every submission within 24 hours.
          </p>
          <Link
            href="/start-a-case"
            className="inline-block bg-brass text-[#07080d] text-sm font-bold px-8 py-4 rounded-sm hover:bg-brass/90 transition-colors"
          >
            Start a Case Review →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
