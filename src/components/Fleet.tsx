import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { VanDiagram } from './VanDiagram';
import { fleet } from '../data/fleet';
import type { VehicleId } from '../types/logistics';

interface FleetProps {
  onQuote: (id: VehicleId) => void;
}

export function Fleet({ onQuote }: FleetProps) {
  const [active, setActive] = useState<VehicleId>('lwb');
  const vehicle = fleet.find((v) => v.id === active) ?? fleet[0];

  return (
    <section id="fleet" aria-labelledby="fleet-title" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 id="fleet-title" className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Pick the right van. See exactly what fits.
          </h2>
          <p className="max-w-md text-lg text-muted">
            Every vehicle is dedicated to your job alone. Load space is drawn to scale, so there’s no guesswork.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div role="tablist" aria-label="Vehicle type" className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
            {fleet.map((v) => {
              const selected = v.id === active;
              return (
                <button
                  key={v.id}
                  role="tab"
                  id={`tab-${v.id}`}
                  aria-selected={selected}
                  aria-controls="fleet-panel"
                  onClick={() => setActive(v.id)}
                  className={`rounded-xl border p-4 text-left transition-colors duration-150 sm:p-5 ${
                  selected ? 'border-ink bg-white' : 'border-line bg-transparent hover:border-ink/40 hover:bg-white/60'}`
                  }>
                  
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-lg font-bold">{v.name}</span>
                    <span className={`text-sm ${selected ? 'text-plum' : 'text-muted'}`}>
                      {v.payload.toLocaleString()} kg
                    </span>
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted">
                    {v.length} × {v.width} × {v.height} m
                  </span>
                </button>);

            })}
          </div>

          <div
            id="fleet-panel"
            role="tabpanel"
            aria-labelledby={`tab-${vehicle.id}`}
            className="flex flex-col rounded-2xl border border-line bg-white p-5 sm:p-8 lg:col-span-8">
            
            <VanDiagram vehicle={vehicle} />

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
              {[
              { label: 'Load length', value: `${vehicle.length} m` },
              { label: 'Load width', value: `${vehicle.width} m` },
              { label: 'Load height', value: `${vehicle.height} m` },
              { label: 'Max payload', value: `${vehicle.payload.toLocaleString()} kg` }].
              map((spec) =>
              <div key={spec.label}>
                  <dt className="text-[13px] text-muted">{spec.label}</dt>
                  <dd className="mt-0.5 font-mono text-lg font-semibold">{spec.value}</dd>
                </div>
              )}
            </dl>

            <div className="mt-6 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-semibold">{vehicle.fits}</p>
                <p className="mt-1 text-[15px] text-muted">{vehicle.bestFor}</p>
              </div>
              <button
                type="button"
                onClick={() => onQuote(vehicle.id)}
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-plum">
                
                Quote with this van
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}