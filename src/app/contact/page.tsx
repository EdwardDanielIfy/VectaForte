import Reveal from "@/components/Reveal";
import { socialLinks } from "@/lib/config";

const channels = [
  {
    key: "whatsapp" as const,
    label: "WhatsApp",
    body: "Fastest way to reach us directly for an initial conversation.",
  },
  {
    key: "email" as const,
    label: "Email",
    body: "For detailed case information or document attachments.",
  },
  {
    key: "tiktok" as const,
    label: "TikTok",
    body: "Follow our tracing case analyses and security alerts.",
  },
  {
    key: "facebook" as const,
    label: "Facebook",
    body: "Official announcements and company updates.",
  },
  {
    key: "instagram" as const,
    label: "Instagram",
    body: "Follow for updates, or send a direct message.",
  },
  {
    key: "telegram" as const,
    label: "Telegram",
    body: "Alternative direct messaging channel.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-28">
      <Reveal>
        <span className="text-xs uppercase tracking-wider text-brass font-medium">
          Contact
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-3 text-balance">
          Reach us directly.
        </h1>
        <p className="mt-5 text-slate max-w-xl leading-relaxed">
          We keep contact simple and verifiable — reach out on any channel
          below. For a full case submission, use{" "}
          <a href="/start-a-case" className="text-ink border-b border-brass">
            Start a Case
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {channels.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.07}>
            <a
              href={socialLinks[c.key]}
              target={c.key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="block border border-ink/10 rounded-sm p-6 hover:border-brass/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-ink">
                  {c.label}
                </h2>
                <span className="text-brass opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {c.body}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
