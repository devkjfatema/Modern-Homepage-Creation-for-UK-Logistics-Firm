import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faqs } from '../data/content';
import { contact } from '../data/site';

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="font-display text-4xl font-extrabold leading-[1.05]">
            Questions, answered.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Can’t see yours? Call{' '}
            <a href={contact.phoneHref} className="font-semibold text-signal-dark underline-offset-4 hover:underline">
              {contact.phone}
            </a>{' '}
            or email{' '}
            <a href={contact.emailHref} className="font-semibold text-signal-dark underline-offset-4 hover:underline">
              {contact.email}
            </a>
            .
          </p>
        </div>

        <ul className="border-t border-line lg:col-span-8">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.question} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left">
                    
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <PlusIcon
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ease-out ${
                      isOpen ? 'rotate-45' : ''}`
                      }
                      aria-hidden />
                    
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    id={`faq-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden">
                    
                      <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">{faq.answer}</p>
                    </motion.div>
                  }
                </AnimatePresence>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}