import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircle2Icon, ChevronDownIcon, Loader2Icon } from 'lucide-react';
import { fleet } from '../data/fleet';
import { contact } from '../data/site';
import { isValidPostcode, isValidUkPhone, normalisePostcode } from '../utils/validation';
import type { VehicleId } from '../types/logistics';

interface QuoteBarProps {
  vehicle: VehicleId;
  onVehicleChange: (id: VehicleId) => void;
}

type Status = 'idle' | 'submitting' | 'success';
type FieldErrors = Partial<Record<'from' | 'to' | 'phone', string>>;

const inputBase =
'h-12 w-full rounded-lg border bg-white px-3.5 text-[15px] text-ink placeholder:text-muted/70 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-signal/30';

export function QuoteBar({ vehicle, onVehicleChange }: QuoteBarProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const selected = fleet.find((v) => v.id === vehicle) ?? fleet[1];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: FieldErrors = {};
    if (!isValidPostcode(from)) next.from = 'Enter a valid collection postcode';
    if (!isValidPostcode(to)) next.to = 'Enter a valid delivery postcode';
    if (!isValidUkPhone(phone)) next.phone = 'Enter a UK phone number so we can send your price';
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  }

  function reset() {
    setFrom('');
    setTo('');
    setPhone('');
    setStatus('idle');
  }

  const fieldClass = (key: keyof FieldErrors) =>
  `${inputBase} ${errors[key] ? 'border-plum' : 'border-line focus:border-signal'}`;

  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_24px_60px_-24px_rgba(14,26,38,0.45)] ring-1 ring-ink/5 sm:p-7">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ?
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
          role="status">
          
            <div className="flex items-start gap-4">
              <CheckCircle2Icon className="mt-0.5 h-7 w-7 shrink-0 text-signal" aria-hidden />
              <div>
                <p className="font-display text-xl font-bold">Request received — your price is on its way.</p>
                <p className="mt-1 text-[15px] text-muted">
                  We’ll call or text <span className="font-medium text-ink">{phone}</span> within 15 minutes with a
                  fixed price for{' '}
                  <span className="font-mono text-sm text-ink">
                    {normalisePostcode(from)} → {normalisePostcode(to)}
                  </span>{' '}
                  in a {selected.name}.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 gap-3">
              <a
              href="#contact"
              className="rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors duration-150 hover:border-ink">
              
                Add job details
              </a>
              <button
              type="button"
              onClick={reset}
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ink-2">
              
                New quote
              </button>
            </div>
          </motion.div> :

        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          aria-labelledby="quote-title">
          
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="quote-title" className="font-display text-xl font-bold sm:text-2xl">
                Get a fixed price in 15 minutes
              </h2>
              <p className="text-sm text-muted">
                Prefer to talk?{' '}
                <a href={contact.phoneHref} className="font-semibold text-signal-dark underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr_1.15fr_auto] lg:items-end">
              <div>
                <label htmlFor="q-from" className="mb-1.5 block text-[13px] font-medium text-muted">
                  Collection postcode
                </label>
                <input
                id="q-from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. M1 2AB"
                autoComplete="postal-code"
                aria-invalid={!!errors.from}
                className={`${fieldClass('from')} font-mono uppercase placeholder:normal-case`} />
              
              </div>
              <div>
                <label htmlFor="q-to" className="mb-1.5 block text-[13px] font-medium text-muted">
                  Delivery postcode
                </label>
                <input
                id="q-to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. LS1 4DY"
                aria-invalid={!!errors.to}
                className={`${fieldClass('to')} font-mono uppercase placeholder:normal-case`} />
              
              </div>
              <div>
                <label htmlFor="q-vehicle" className="mb-1.5 block text-[13px] font-medium text-muted">
                  Vehicle
                </label>
                <div className="relative">
                  <select
                  id="q-vehicle"
                  value={vehicle}
                  onChange={(e) => onVehicleChange(e.target.value as VehicleId)}
                  className={`${inputBase} appearance-none border-line pr-10 focus:border-signal`}>
                  
                    {fleet.map((v) =>
                  <option key={v.id} value={v.id}>
                        {v.name} · up to {v.payload.toLocaleString()} kg
                      </option>
                  )}
                  </select>
                  <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  aria-hidden />
                
                </div>
              </div>
              <div>
                <label htmlFor="q-phone" className="mb-1.5 block text-[13px] font-medium text-muted">
                  Your phone number
                </label>
                <input
                id="q-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07…"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                className={fieldClass('phone')} />
              
              </div>
              <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-plum px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-plum-dark disabled:opacity-80 sm:col-span-2 lg:col-span-1">
              
                {status === 'submitting' ?
              <>
                    <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </> :

              <>
                    Get my price
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </>
              }
              </button>
            </div>

            {Object.keys(errors).length > 0 &&
          <ul className="mt-3 space-y-0.5 text-sm text-plum" role="alert">
                {Object.values(errors).map((msg) =>
            <li key={msg}>{msg}</li>
            )}
              </ul>
          }

            <p className="mt-4 text-[13px] text-muted">
              Selected: <span className="font-medium text-ink">{selected.name}</span> — load space{' '}
              <span className="font-mono text-xs">
                {selected.length} × {selected.width} × {selected.height} m
              </span>
              . No obligation, no account needed.
            </p>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}