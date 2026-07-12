import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/lib/config";
import Logo from "./Logo";

const socialItems = [
  { key: "whatsapp", label: "WhatsApp" },
  { key: "email", label: "Email" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "facebook", label: "Facebook" },
  { key: "twitter", label: "X / Twitter" },
  { key: "telegram", label: "Telegram" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo light={true} />
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-paper/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-brass mb-4">
              Navigate
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-brass mb-4">
              Reach Us
            </div>
            <ul className="flex flex-col gap-2.5">
              {socialItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={socialLinks[item.key]}
                    target={item.key === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 hover:text-paper transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10">
          <p className="text-xs leading-relaxed text-paper/60 max-w-3xl">
            {siteConfig.name} provides professional digital asset recovery, blockchain
            forensics, and exchange liaison services. With a documented 90–100% recovery
            success rate across active cases, our team coordinates across exchanges,
            legal channels, and regulatory bodies to ensure the best possible outcome
            for every client.
          </p>
          <p className="mt-4 text-xs text-paper/40">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
