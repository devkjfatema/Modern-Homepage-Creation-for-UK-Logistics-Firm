import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { PostcodeChecker } from './PostcodeChecker';
import { destinations, localAreas } from '../data/content';

export function Coverage() {
  return (
    <section id="coverage" aria-labelledby="coverage-title" className="bg-ink-2 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="coverage-title" className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            From Manchester to every corner of the UK.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Our base in Greater Manchester puts most of mainland Britain within a same-day drive. Further afield,
            we ship internationally.
          </p>

          <div className="mt-8">
            <p className="flex items-center gap-2 text-sm font-medium text-white/60">
              <MapPinIcon className="h-4 w-4" aria-hidden />
              Local collections across
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {localAreas.map((area) =>
              <li key={area} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/90">
                  {area}
                </li>
              )}
            </ul>
          </div>

          <PostcodeChecker />
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl bg-ink-3 ring-1 ring-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <p className="font-mono text-xs uppercase tracking-widest text-white/60">Departures · Manchester base</p>
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal-light">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-light" aria-hidden />
                Booking today
              </span>
            </div>
            <table className="w-full text-left">
              <caption className="sr-only">Approximate drive times from our Manchester base</caption>
              <thead>
                <tr className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                  <th scope="col" className="px-5 py-3 font-medium sm:px-6">Destination</th>
                  <th scope="col" className="px-3 py-3 text-right font-medium">Approx. drive</th>
                  <th scope="col" className="px-5 py-3 text-right font-medium sm:px-6">Service</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm sm:text-[15px]">
                {destinations.map((d) =>
                <tr key={d.city} className="border-t border-white/[0.06]">
                    <th scope="row" className="px-5 py-3 font-medium text-white sm:px-6">
                      {d.city}
                    </th>
                    <td className="px-3 py-3 text-right tabular-nums text-white/80">{d.time}</td>
                    <td
                    className={`px-5 py-3 text-right sm:px-6 ${
                    d.service === 'Same day' ? 'text-signal-light' : 'text-[#E9A6C8]'}`
                    }>
                    
                      {d.service}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-white/50">
            Drive times are indicative and depend on traffic, collection time and route.
          </p>
        </div>
      </div>
    </section>);

}