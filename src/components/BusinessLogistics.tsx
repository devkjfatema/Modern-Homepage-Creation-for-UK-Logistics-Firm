import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { contact, images } from '../data/site';

const capabilities = [
{
  title: 'Dedicated & scheduled runs',
  text: 'Recurring routes and dedicated vehicles that slot into your existing operation.'
},
{
  title: 'Direct from your warehouse',
  text: 'We collect from your premises and deliver straight to your customers — no middleman.'
},
{
  title: 'Real-time tracking & updates',
  text: 'Know where every consignment is, from collection through to final drop.'
},
{
  title: 'Storage & fulfilment',
  text: 'Hold stock with us and we’ll pick, pack and dispatch orders as they come in.'
}];


export function BusinessLogistics() {
  return (
    <section id="business" aria-labelledby="business-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src={images.warehouse}
            alt="Pallets being loaded into a Luton van at a warehouse loading bay"
            className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[3/2] lg:aspect-[4/5]"
            loading="lazy" />
          
          <figure className="absolute bottom-4 left-4 right-4 rounded-xl bg-white p-5 shadow-lg sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
            <blockquote className="text-[15px] leading-relaxed text-ink">
              “Thank you for your excellent service. We look forward to working with you again.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted">
              <span className="font-semibold text-ink">Karen Burnham</span> · Whiteley Couriers
            </figcaption>
          </figure>
        </div>

        <div>
          <p className="text-sm font-semibold text-plum">For businesses</p>
          <h2 id="business-title" className="mt-3 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Your own delivery team, without running one.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Our couriers handle time-sensitive and bulk deliveries for businesses across the UK. Skip the vans,
            drivers and overheads — keep the control.
          </p>

          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {capabilities.map((c) =>
            <div key={c.title} className="border-t border-line py-5">
                <dt className="font-semibold">{c.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{c.text}</dd>
              </div>
            )}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-plum-dark">
              
              Set up a business account
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </a>
            <a href={contact.phoneHref} className="text-[15px] font-semibold text-signal-dark underline-offset-4 hover:underline">
              Discuss regular transport
            </a>
          </div>
        </div>
      </div>
    </section>);

}