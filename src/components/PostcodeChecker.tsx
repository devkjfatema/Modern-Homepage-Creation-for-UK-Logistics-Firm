import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { checkCoverage, isValidPostcode, normalisePostcode, type CoverageResult } from '../utils/validation';

const messages: Record<CoverageResult, (pc: string) => string> = {
  local: (pc) => `${pc} is local to our base — the fastest collection times we offer.`,
  national: (pc) => `Yes, we deliver to ${pc}. Same-day is available on most mainland routes.`,
  remote: (pc) => `We cover ${pc}. Call us and we’ll plan the best route and timing.`
};

export function PostcodeChecker() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<{type: CoverageResult;pc: string;} | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidPostcode(value)) {
      setError('Enter a UK postcode, e.g. LS1 or LS1 4DY');
      setResult(null);
      return;
    }
    setError('');
    const pc = normalisePostcode(value);
    setResult({ type: checkCoverage(pc), pc });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 border-t border-white/10 pt-8">
      <label htmlFor="coverage-pc" className="block font-semibold">
        Do you deliver to my postcode?
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="coverage-pc"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter postcode"
          aria-invalid={!!error}
          aria-describedby="coverage-result"
          className="h-12 min-w-0 flex-1 rounded-lg border border-white/20 bg-white/5 px-4 font-mono uppercase text-white placeholder:normal-case placeholder:text-white/40 focus:border-signal-light focus:outline-none focus:ring-2 focus:ring-signal-light/30" />
        
        <button
          type="submit"
          className="h-12 shrink-0 rounded-lg bg-white px-5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-signal-soft">
          
          Check
        </button>
      </div>
      <div id="coverage-result" aria-live="polite" className="min-h-[48px]">
        <AnimatePresence mode="wait">
          {error &&
          <motion.p
            key="err"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mt-3 text-sm text-[#E9A6C8]">
            
              {error}
            </motion.p>
          }
          {result &&
          <motion.p
            key={result.pc}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-3 text-sm text-white/85">
            
              {messages[result.type](result.pc)}{' '}
              <a href="#quote" className="font-semibold text-signal-light underline-offset-4 hover:underline">
                Get a price
              </a>
            </motion.p>
          }
        </AnimatePresence>
      </div>
    </form>);

}