'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { socialLinks } from '@/lib/config';

const quickActions = [
  {
    key: 'whatsapp' as const,
    label: 'WhatsApp Us',
    href: socialLinks.whatsapp,
  },
  {
    key: 'email' as const,
    label: 'Email Us',
    href: socialLinks.email,
  },
];

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6.5 18.5 4 20V6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v6.5A2.75 2.75 0 0 1 17.25 16H8.5l-2 2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 8.5h8M8 11.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex flex-col items-end gap-2"
          >
            {quickActions.map((action) => (
              <motion.a
                key={action.key}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-3 text-sm font-medium text-ink shadow-[0_14px_35px_rgba(15,23,42,0.12)]"
              >
                <span className="text-brass">
                  {action.key === 'whatsapp' ? <ChatIcon /> : <ChatIcon />}
                </span>
                <span>{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Toggle contact options"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-paper shadow-[0_16px_35px_rgba(15,23,42,0.2)] transition-all duration-200 hover:bg-ink/90"
      >
        <span className="flex h-5 w-5 items-center justify-center">
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </span>
        <span>{isOpen ? 'Close' : 'Contact Us'}</span>
      </button>
    </div>
  );
}
