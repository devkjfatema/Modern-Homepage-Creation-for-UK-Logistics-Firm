import React from 'react';
import { Logo } from './Logo';
import { featuredService, services } from '../data/services';
import { localAreas } from '../data/content';
import { contact, navLinks } from '../data/site';

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
            Same-day courier, business logistics and pallet delivery from Greater Manchester to the whole of the UK —
            and beyond.
          </p>
          <a
            href="#quote"
            className="mt-6 inline-flex rounded-full bg-plum px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-plum-dark">
            
            Get a quote
          </a>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {[featuredService, ...services].map((s) =>
            <li key={s.slug}>
                <a href="#services" className="transition-colors duration-150 hover:text-white">
                  {s.name}
                </a>
              </li>
            )}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {navLinks.map((l) =>
            <li key={l.href}>
                <a href={l.href} className="transition-colors duration-150 hover:text-white">
                  {l.label}
                </a>
              </li>
            )}
            <li>
              <a href="#contact" className="transition-colors duration-150 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <a href={contact.phoneHref} className="transition-colors duration-150 hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.mobileHref} className="transition-colors duration-150 hover:text-white">
                {contact.mobile}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="transition-colors duration-150 hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-white/50">Serving {localAreas.join(', ')} and the whole UK.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-[13px] text-white/50 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} HFU Enterprise Ltd. Registered in England & Wales.</p>
          <p className="flex gap-5">
            <a href="#top" className="hover:text-white">Privacy</a>
            <a href="#top" className="hover:text-white">Terms</a>
            <a href="#top" className="hover:text-white">Cookies</a>
          </p>
        </div>
      </div>
    </footer>);

}