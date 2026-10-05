import React, { useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Hero } from '../components/Hero';
import { ProofStrip } from '../components/ProofStrip';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { Fleet } from '../components/Fleet';
import { BusinessLogistics } from '../components/BusinessLogistics';
import { Coverage } from '../components/Coverage';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { EnquirySection } from '../components/EnquirySection';
import { SiteFooter } from '../components/SiteFooter';
import { MobileActionBar } from '../components/MobileActionBar';
import type { VehicleId } from '../types/logistics';

export function Home() {
  const [vehicle, setVehicle] = useState<VehicleId>('swb');

  function quoteWithVehicle(id: VehicleId) {
    setVehicle(id);
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div className="min-h-screen w-full bg-paper pb-16 font-sans text-ink md:pb-0">
      <SiteHeader />
      <main>
        <Hero vehicle={vehicle} onVehicleChange={setVehicle} />
        <ProofStrip />
        <Services />
        <HowItWorks />
        <Fleet onQuote={quoteWithVehicle} />
        <BusinessLogistics />
        <Coverage />
        <Testimonials />
        <FaqSection />
        <EnquirySection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </div>);

}