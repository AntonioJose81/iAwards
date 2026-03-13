import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Packages } from '../components/Packages';
import { NfcExperience } from '../components/NfcExperience';
import { Materials } from '../components/Materials';
import { ShowcaseBanner } from '../components/ShowcaseBanner';
import { Gallery } from '../components/Gallery';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <NfcExperience />
        <Materials />
        <ShowcaseBanner />
        <Gallery />
        <HowItWorks />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
