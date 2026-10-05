import React from 'react';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { contact } from '../data/site';

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[auto_auto_1fr] gap-2 border-t border-line bg-white p-2.5 md:hidden">
      <a
        href={contact.phoneHref}
        aria-label={`Call ${contact.phone}`}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink">
        
        <PhoneIcon className="h-5 w-5" aria-hidden />
      </a>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message us on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink">
        
        <MessageCircleIcon className="h-5 w-5" aria-hidden />
      </a>
      <a href="#quote" className="flex h-11 items-center justify-center rounded-full bg-plum text-[15px] font-semibold text-white">
        Get a quote in 15 mins
      </a>
    </div>);

}