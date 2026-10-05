import React from 'react';
import { BadgePoundSterlingIcon, MapPinnedIcon, ShieldCheckIcon, UserCheckIcon } from 'lucide-react';

const stats = [
{ value: '7+', label: 'Years on the road' },
{ value: '4', label: 'Van sizes, 350–1,000 kg' },
{ value: '6', label: 'Services, one team' },
{ value: 'UK+', label: 'National & worldwide' }];


const credentials = [
{ icon: ShieldCheckIcon, label: 'Goods-in-transit insured' },
{ icon: UserCheckIcon, label: 'Vetted, professional drivers' },
{ icon: MapPinnedIcon, label: 'Real-time tracking & updates' },
{ icon: BadgePoundSterlingIcon, label: 'Fixed, upfront pricing' }];


export function ProofStrip() {
  return (
    <section aria-label="Why customers trust HFU Enterprise" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="flex items-end gap-4 lg:col-span-4">
            <span className="font-display text-6xl font-black leading-none text-ink sm:text-7xl">10K+</span>
            <span className="pb-1 text-[15px] leading-snug text-muted">
              jobs successfully
              <br />
              completed
            </span>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4 lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {stats.map((s) =>
            <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-signal-dark">{s.value}</dd>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            )}
          </dl>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-4 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map(({ icon: Icon, label }) =>
          <li key={label} className="flex items-center gap-3 text-[15px] font-medium text-ink">
              <Icon className="h-5 w-5 shrink-0 text-plum" aria-hidden />
              {label}
            </li>
          )}
        </ul>
      </div>
    </section>);

}