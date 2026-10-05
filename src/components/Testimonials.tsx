import React from 'react';
import { StarIcon } from 'lucide-react';
import { featuredTestimonial, testimonials } from '../data/content';
import { images } from '../data/site';

function Stars({ size = 'h-4 w-4' }: {size?: string;}) {
  return (
    <span className="flex" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) =>
      <StarIcon key={i} className={`${size} fill-[#F5B83D] text-[#F5B83D]`} aria-hidden />
      )}
    </span>);

}

export function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 id="reviews-title" className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Trusted on every run.
          </h2>
          <div className="flex items-center gap-3">
            <Stars size="h-5 w-5" />
            <span className="text-[15px] text-muted">5.0 from our customers</span>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <figure className="grid overflow-hidden rounded-2xl bg-white ring-1 ring-line sm:grid-cols-[0.9fr_1.1fr] lg:col-span-7">
            <img
              src={images.handover}
              alt="HFU Enterprise driver handing a parcel to a business owner"
              className="h-64 w-full object-cover sm:h-full"
              loading="lazy" />
            
            <div className="flex flex-col p-7 sm:p-9">
              <Stars />
              <blockquote className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-[26px]">
                “{featuredTestimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <p className="font-semibold">{featuredTestimonial.name}</p>
                <p className="text-sm text-muted">{featuredTestimonial.context}</p>
              </figcaption>
            </div>
          </figure>

          <ul className="divide-y divide-line lg:col-span-5">
            {testimonials.map((t) =>
            <li key={t.name} className="py-6 first:pt-0 last:pb-0">
                <figure>
                  <blockquote className="text-[15px] leading-relaxed text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-3 flex items-center gap-3">
                    <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-soft text-xs font-semibold text-signal-dark"
                    aria-hidden>
                    
                      {t.name.
                    split(' ').
                    map((n) => n[0]).
                    slice(0, 2).
                    join('')}
                    </span>
                    <span className="text-sm">
                      <span className="font-semibold">{t.name}</span>
                      <span className="text-muted"> · {t.context}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}