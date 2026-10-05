import type { Vehicle } from '../types/logistics';

export const fleet: Vehicle[] = [
{
  id: 'small',
  name: 'Small Van',
  length: 1.0,
  width: 1.2,
  height: 1.0,
  payload: 350,
  pallets: 1,
  fits: 'Documents, parcels and a handful of boxes',
  bestFor: 'Urgent documents, samples and small same-day consignments.'
},
{
  id: 'swb',
  name: 'SWB Van',
  length: 2.2,
  width: 1.2,
  height: 1.2,
  payload: 800,
  pallets: 2,
  fits: 'Around 40 medium boxes or 2 pallets',
  bestFor: 'Trade supplies, e-commerce batches and multi-drop runs.'
},
{
  id: 'lwb',
  name: 'LWB Van',
  length: 4.0,
  width: 1.3,
  height: 1.8,
  payload: 1000,
  pallets: 4,
  fits: 'Up to 4 pallets, long lengths or a small office',
  bestFor: 'Pallet work, scheduled business routes and longer items.'
},
{
  id: 'luton',
  name: 'Luton Van',
  length: 4.0,
  width: 2.0,
  height: 1.95,
  payload: 1000,
  pallets: 6,
  fits: 'Up to 6 pallets, furniture and bulky goods',
  bestFor: 'Bulky, high-volume loads, exhibitions and home moves.'
}];