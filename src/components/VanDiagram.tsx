import React from 'react';
import { motion } from 'framer-motion';
import type { Vehicle } from '../types/logistics';

const SCALE = 100;
const GROUND = 214;
const CAB_W = 92;
const VIEW_W = 600;

export function VanDiagram({ vehicle }: {vehicle: Vehicle;}) {
  const L = vehicle.length * SCALE;
  const H = vehicle.height * SCALE;
  const x0 = (VIEW_W - (L + CAB_W)) / 2;
  const floor = GROUND - 18;
  const top = floor - H;
  const cx = x0 + L;
  const cabH = Math.min(H + 6, 128);
  const palletCount = Math.min(vehicle.pallets, Math.floor((L - 8) / 80));
  const goodsH = Math.min(H - 34, 70);

  const cab = `M${cx} ${floor} V${floor - cabH} H${cx + 38} L${cx + 76} ${floor - cabH * 0.5} L${cx + CAB_W} ${
  floor - cabH * 0.42} V${
  floor} Z`;
  const windowPath = `M${cx + 8} ${floor - cabH + 8} H${cx + 34} L${cx + 62} ${floor - cabH * 0.56} H${cx + 8} Z`;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 270`}
      className="h-auto w-full"
      role="img"
      aria-label={`${vehicle.name} side profile: load space ${vehicle.length} metres long by ${vehicle.height} metres high, drawn to scale`}>
      
      <line x1="16" x2={VIEW_W - 16} y1={GROUND} y2={GROUND} className="stroke-line" strokeWidth="2" />

      <motion.g
        key={vehicle.id}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
        
        {/* Dimension: length */}
        <g className="stroke-muted" strokeWidth="1.25">
          <line x1={x0} x2={x0 + L} y1={top - 18} y2={top - 18} />
          <line x1={x0} x2={x0} y1={top - 24} y2={top - 12} />
          <line x1={x0 + L} x2={x0 + L} y1={top - 24} y2={top - 12} />
        </g>
        <text x={x0 + L / 2} y={top - 26} textAnchor="middle" className="fill-ink font-mono text-[12px] font-semibold">
          {vehicle.length.toFixed(1)} m
        </text>

        {/* Dimension: height */}
        <g className="stroke-muted" strokeWidth="1.25">
          <line x1={x0 - 14} x2={x0 - 14} y1={top} y2={floor} />
          <line x1={x0 - 20} x2={x0 - 8} y1={top} y2={top} />
          <line x1={x0 - 20} x2={x0 - 8} y1={floor} y2={floor} />
        </g>
        <text x={x0 - 24} y={(top + floor) / 2 + 4} textAnchor="end" className="fill-ink font-mono text-[12px] font-semibold">
          {vehicle.height.toFixed(2).replace(/0$/, '')} m
        </text>

        {/* Cargo box */}
        <rect x={x0} y={top} width={L} height={H} rx="6" className="fill-white stroke-ink" strokeWidth="2" />

        {/* Pallets */}
        {Array.from({ length: palletCount }).map((_, i) => {
          const px = x0 + 8 + i * 80;
          return (
            <g key={i}>
              <rect
                x={px}
                y={floor - 12 - goodsH}
                width="72"
                height={goodsH}
                rx="2"
                className="fill-signal-soft stroke-signal"
                strokeWidth="1.25"
                strokeDasharray="4 3" />
              
              <rect x={px} y={floor - 12} width="72" height="8" className="fill-signal" />
            </g>);

        })}

        {/* Cab */}
        <path d={cab} className="fill-ink" />
        <path d={windowPath} className="fill-signal-light" opacity="0.9" />

        {/* Wheels */}
        {[x0 + Math.max(L * 0.22, 34), cx + 52].map((wx) =>
        <g key={wx}>
            <circle cx={wx} cy={GROUND - 17} r="17" className="fill-ink" />
            <circle cx={wx} cy={GROUND - 17} r="6" className="fill-paper" />
          </g>
        )}
      </motion.g>

      {/* Scale ruler */}
      <g transform={`translate(${(VIEW_W - (4 * SCALE + CAB_W)) / 2}, ${GROUND + 26})`}>
        <line x1="0" x2={4 * SCALE} y1="0" y2="0" className="stroke-muted" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map((m) =>
        <g key={m} transform={`translate(${m * SCALE}, 0)`}>
            <line y1="-4" y2="4" className="stroke-muted" strokeWidth="1" />
            <text y="20" textAnchor="middle" className="fill-muted font-mono text-[11px]">
              {m}m
            </text>
          </g>
        )}
      </g>
    </svg>);

}