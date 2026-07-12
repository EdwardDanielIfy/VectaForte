"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/config";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start-a-case"
              className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-sm hover:bg-steel transition-colors"
            >
              Start a Case Review
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-paper border-b border-ink/10"
          >
            <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-slate hover:text-ink transition-colors py-3 border-b border-ink/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/start-a-case"
                onClick={() => setMenuOpen(false)}
                className="mt-3 text-center text-sm font-medium bg-ink text-paper px-4 py-3 rounded-sm"
              >
                Start a Case Review
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
