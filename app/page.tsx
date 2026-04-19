import ContactFooterSection from '@/components/ContactFooterSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TimelineSection from '@/components/TimelineSection';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <TimelineSection />
        <ContactFooterSection />
      </main>
      <Footer />
    </div>
  );
}
