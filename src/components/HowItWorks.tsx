import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../data/content';

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 id="how-title" className="max-w-xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Quote to doorstep in four stops.
          </h2>
          <p className="max-w-md text-lg text-white/70">
            No depots, no sorting hubs. One driver carries your goods from collection to delivery.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[9px] top-2 h-[calc(100%-16px)] w-px bg-white/15 md:left-0 md:right-0 md:top-[9px] md:h-px md:w-full" aria-hidden />
          <motion.div
            className="absolute left-0 right-0 top-[9px] hidden h-px origin-left bg-signal-light md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            aria-hidden />
          
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) =>
            <li key={step.title} className="relative pl-10 md:pl-0 md:pt-12">
              <span
                className={`absolute left-0 top-0 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 ${
                i === steps.length - 1 ? 'border-plum bg-plum' : 'border-signal-light bg-ink'}`
                }
                aria-hidden />
              
              <p className="font-mono text-xs uppercase tracking-wider text-signal-light">{step.meta}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{step.text}</p>
            </li>
            )}
          </ol>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
          <a
            href="#quote"
            className="rounded-full bg-plum px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-plum-dark">
            
            Start with a quote
          </a>
          <span className="text-sm text-white/60">Most quotes are returned within 15 minutes.</span>
        </div>
      </div>
    </section>);

}