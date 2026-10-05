import React from 'react';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { featuredService, services } from '../data/services';

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="services-title" className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              From one envelope to a full Luton.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              We go the extra mile so you don’t have to. Tailored courier and logistics services that arrive on
              time, every time — for businesses and individuals alike.
            </p>

            <article className="mt-10 rounded-2xl bg-ink p-7 text-white sm:p-8">
              <p className="text-sm font-medium text-signal-light">{featuredService.tag}</p>
              <h3 className="mt-2 font-display text-3xl font-bold">{featuredService.name}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{featuredService.summary}</p>
              <a
                href="#quote"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-signal-soft">
                
                Get a same-day price
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </a>
            </article>
          </div>
        </div>

        <ul className="border-t border-line lg:col-span-7">
          {services.map((service) =>
          <li key={service.slug} className="border-b border-line">
              <a
              href="#quote"
              className="group grid grid-cols-[1fr_auto] items-center gap-6 py-8 sm:py-9"
              aria-label={`${service.name} — get a quote`}>
              
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-bold transition-colors duration-150 group-hover:text-plum sm:text-[28px]">
                      {service.name}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wide text-signal-dark">{service.tag}</span>
                  </div>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-muted">{service.summary}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-[background-color,border-color,color,transform] duration-200 ease-out group-hover:border-plum group-hover:bg-plum group-hover:text-white">
                  <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-hover:rotate-45" aria-hidden />
                </span>
              </a>
            </li>
          )}
          <li className="pt-8">
            <p className="text-[15px] text-muted">
              Not sure which service fits?{' '}
              <a href="#contact" className="font-semibold text-signal-dark underline-offset-4 hover:underline">
                Tell us what needs moving
              </a>{' '}
              and we’ll recommend the right option.
            </p>
          </li>
        </ul>
      </div>
    </section>);

}