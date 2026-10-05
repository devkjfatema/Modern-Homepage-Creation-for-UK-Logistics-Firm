import type { Service } from '../types/logistics';

export const featuredService: Service = {
  slug: 'same-day-courier',
  name: 'Same-day courier',
  summary:
  'A dedicated van and driver, straight from collection to drop. No depots, no sorting, no hand-offs — just your goods, delivered today.',
  tag: 'Most booked'
};

export const services: Service[] = [
{
  slug: 'scheduled-delivery',
  name: 'Scheduled deliveries',
  summary: 'Recurring runs built around your business — daily, weekly or to your own rota.',
  tag: 'For businesses'
},
{
  slug: 'express-overnight',
  name: 'Express & overnight',
  summary: 'Urgent consignments moved overnight and delivered when you need them most.',
  tag: 'Next morning'
},
{
  slug: 'pallet-delivery',
  name: 'Pallet delivery',
  summary: 'Secure, cost-effective transport from a single pallet to bulk loads.',
  tag: 'Up to 1,000 kg'
},
{
  slug: 'warehousing-fulfilment',
  name: 'Warehousing & fulfilment',
  summary: 'Safe storage with pick, pack and dispatch to keep your stock moving.',
  tag: 'Store & ship'
},
{
  slug: 'international-shipping',
  name: 'International shipping',
  summary: 'Cross-border logistics and customs handled for smooth delivery worldwide.',
  tag: 'Worldwide'
}];