import type { Destination, Faq, Step, Testimonial } from '../types/logistics';

export const steps: Step[] = [
{
  title: 'Request a quote',
  text: 'Tell us what’s moving, from where and when — online, by phone or on WhatsApp.',
  meta: '2 min'
},
{
  title: 'Confirm your booking',
  text: 'We come back with a fixed, upfront price. Approve it and your van is assigned.',
  meta: 'Within 15 min'
},
{
  title: 'Collection',
  text: 'A dedicated, professional driver collects directly from your door or warehouse.',
  meta: 'Same day'
},
{
  title: 'Delivery',
  text: 'Delivered direct to the recipient, with real-time updates from pickup to drop.',
  meta: 'Tracked'
}];


export const localAreas = ['Manchester', 'Salford', 'Stockport', 'Trafford', 'Didsbury', 'Chorlton'];

export const destinations: Destination[] = [
{ city: 'Liverpool', time: '0h 55', service: 'Same day' },
{ city: 'Leeds', time: '1h 05', service: 'Same day' },
{ city: 'Sheffield', time: '1h 15', service: 'Same day' },
{ city: 'Birmingham', time: '1h 50', service: 'Same day' },
{ city: 'Newcastle', time: '2h 50', service: 'Same day' },
{ city: 'Bristol', time: '3h 10', service: 'Same day' },
{ city: 'Cardiff', time: '3h 20', service: 'Same day' },
{ city: 'Glasgow', time: '3h 40', service: 'Same day' },
{ city: 'London', time: '3h 50', service: 'Same day' },
{ city: 'Southampton', time: '4h 00', service: 'Same day' },
{ city: 'Aberdeen', time: '5h 50', service: 'Overnight' },
{ city: 'Europe & worldwide', time: '—', service: 'On request' }];


export const featuredTestimonial: Testimonial = {
  quote:
  'I can’t thank them enough for their reliability. From overnight shipments to scheduled deliveries, they’ve consistently exceeded our expectations. Highly recommend!',
  name: 'Muhammed Aihtsham Amjid',
  context: 'Scheduled & overnight deliveries'
};

export const testimonials: Testimonial[] = [
{
  quote:
  'Their international shipping service is unparalleled. We’ve expanded to new markets with their help, and their team handles customs and logistics seamlessly.',
  name: 'Trevor Angus',
  context: 'International shipping'
},
{
  quote:
  'We’ve used their warehouse storage and fulfilment for months and it’s been a game-changer. Inventory is always organised and orders go out promptly.',
  name: 'Karen Louise',
  context: 'Warehousing & fulfilment'
},
{
  quote: 'Thank you for your excellent service. We look forward to working with you again in the future.',
  name: 'Karen Burnham',
  context: 'Whiteley Couriers'
},
{
  quote: 'Amazing service, nice guys, will definitely use again. 5 stars!',
  name: 'Claire Evans',
  context: 'Same-day delivery'
}];


export const faqs: Faq[] = [
{
  question: 'What areas do you cover?',
  answer:
  'We’re based in Manchester and deliver locally, nationally and internationally. Whether it’s a same-day run across the city or a shipment abroad, we’ll plan the right service for it.'
},
{
  question: 'How quickly can you deliver my package?',
  answer:
  'Same-day delivery is available for urgent shipments across most of the UK, alongside express and overnight options. Exact timings depend on the service and destination — your quote will confirm them.'
},
{
  question: 'What types of items can you move?',
  answer:
  'Parcels, documents, pallets, bulky goods and bulk loads. Some restricted items can’t be carried — get in touch and we’ll confirm whether your item is eligible.'
},
{
  question: 'Can you handle regular deliveries for my business?',
  answer:
  'Yes. We set up scheduled and dedicated routes that fit around your operation, collecting directly from your premises or warehouse and delivering straight to your customers.'
},
{
  question: 'How do I get a quote?',
  answer:
  'Use the quick quote form, call 0161 509 6152 or message us on WhatsApp. We aim to reply with a fixed price within 15 minutes.'
}];