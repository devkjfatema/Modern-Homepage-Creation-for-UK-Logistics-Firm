import React from 'react';
import { images } from '../data/site';

interface LogoProps {
  inverted?: boolean;
}

export function Logo({ inverted = false }: LogoProps) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="HFU Enterprise — home">
      <img src={images.logo} alt="" className="h-8 w-auto" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[19px] font-black italic tracking-tight ${
          inverted ? 'text-white' : 'text-ink'}`
          }>
          
          HFU ENTERPRISE
        </span>
        <span
          className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] ${
          inverted ? 'text-white/60' : 'text-muted'}`
          }>
          
          Where speed meets reliability
        </span>
      </span>
    </a>);

}