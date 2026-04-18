import ContactFooterSection from '@/components/ContactFooterSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TimelineSection from '@/components/TimelineSection';
import WhatIBuildSection from '@/components/WhatIBuildSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-shell">
          <Hero />
        </div>
        <TimelineSection />
        <WhatIBuildSection />
        <ContactFooterSection />
      </main>
    </>
  );
}
