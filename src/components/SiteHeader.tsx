import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MailIcon, MenuIcon, MessageCircleIcon, PhoneIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { contact, navLinks } from '../data/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id="top" className="hidden bg-ink text-white/75 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px]">
          <p>Manchester-based · Same-day across the UK · International shipping</p>
          <div className="flex items-center gap-6">
            <a href={contact.emailHref} className="flex items-center gap-1.5 transition-colors duration-150 hover:text-white">
              <MailIcon className="h-3.5 w-3.5" aria-hidden />
              {contact.email}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-150 hover:text-white">
              
              <MessageCircleIcon className="h-3.5 w-3.5" aria-hidden />
              WhatsApp {contact.mobile}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="text-[15px] font-medium text-ink/80 transition-colors duration-150 hover:text-plum">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href={contact.phoneHref} className="hidden items-center gap-2.5 pr-2 xl:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-soft text-signal-dark">
                <PhoneIcon className="h-4 w-4" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-muted">Speak to the team</span>
                <span className="block whitespace-nowrap text-[15px] font-semibold">{contact.phone}</span>
              </span>
            </a>
            <a
              href="#quote"
              className="hidden whitespace-nowrap rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-plum-dark sm:inline-flex">
              
              Get a quote
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden">
              
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open &&
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden">
            
              <ul className="divide-y divide-line">
                {navLinks.map((link) =>
              <li key={link.href}>
                    <a href={link.href} onClick={() => setOpen(false)} className="block py-3.5 text-base font-medium">
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                href={contact.phoneHref}
                className="rounded-full border border-line py-3 text-center text-sm font-semibold">
                
                  Call us
                </a>
                <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="rounded-full bg-plum py-3 text-center text-sm font-semibold text-white">
                
                  Get a quote
                </a>
              </div>
            </motion.nav>
          }
        </AnimatePresence>
      </header>
    </>);

}