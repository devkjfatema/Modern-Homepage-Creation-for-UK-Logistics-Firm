import React from 'react';
import { ArrowRightIcon, PhoneIcon, StarIcon } from 'lucide-react';
import { QuoteBar } from './QuoteBar';
import { contact, images } from '../data/site';
import type { VehicleId } from '../types/logistics';

interface HeroProps {
  vehicle: VehicleId;
  onVehicleChange: (id: VehicleId) => void;
}

export function Hero({ vehicle, onVehicleChange }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="relative bg-paper">
      <div className="relative overflow-hidden bg-ink">
        <img
          src={images.hero}
          alt="White delivery van travelling on a UK motorway at dawn"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
          fetchPriority="high" />
        
        <div className="absolute inset-0 bg-ink/65 lg:bg-ink/45" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 pb-44 pt-16 sm:px-6 sm:pt-20 lg:pb-52 lg:pt-28">
          <div className="max-w-[640px]">
            <h1
              id="hero-title"
              className="font-display text-[40px] font-extrabold leading-[1.02] text-white sm:text-[56px] lg:text-[68px]">
              
              Same-day transport from Manchester to{' '}
              <span className="text-signal-light">anywhere in the UK.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Dedicated vans, scheduled business runs and pallet delivery — direct from your door to theirs,
              with no depots in between.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-plum-dark">
                
                Book a delivery
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
                
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {contact.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) =>
                  <StarIcon key={i} className="h-4 w-4 fill-[#F5B83D] text-[#F5B83D]" />
                  )}
                </span>
                <span>Rated 5 stars by our customers</span>
              </span>
              <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden />
              <span>10,000+ jobs completed</span>
            </div>
          </div>
        </div>
      </div>

      <div id="quote" className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 sm:px-6 lg:-mt-36">
        <QuoteBar vehicle={vehicle} onVehicleChange={onVehicleChange} />
      </div>
    </section>);

}