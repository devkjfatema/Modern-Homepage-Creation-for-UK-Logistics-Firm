export function normalisePostcode(value: string): string {
  return value.trim().toUpperCase().replace(/\s+/g, ' ');
}

export function isValidPostcode(value: string): boolean {
  return /^[A-Z]{1,2}\d[A-Z\d]?( ?\d[A-Z]{2})?$/.test(normalisePostcode(value));
}

export function isValidUkPhone(value: string): boolean {
  const digits = value.replace(/[\s()-]/g, '');
  return /^(\+44|0)\d{9,10}$/.test(digits);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const LOCAL_AREAS = ['M', 'SK', 'WA', 'BL', 'OL', 'WN'];
const REMOTE_AREAS = ['BT', 'HS', 'ZE', 'KW', 'IV', 'PA', 'GY', 'JE', 'IM'];

export type CoverageResult = 'local' | 'national' | 'remote';

export function checkCoverage(postcode: string): CoverageResult {
  const area = normalisePostcode(postcode).match(/^[A-Z]+/)?.[0] ?? '';
  if (LOCAL_AREAS.includes(area)) return 'local';
  if (REMOTE_AREAS.includes(area)) return 'remote';
  return 'national';
}