import { Hero } from '@/components/sections/Hero';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyIronroute } from '@/components/sections/WhyIronroute';
import { Metrics } from '@/components/sections/Metrics';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Page border wrapper for the desktop-first grid feel */}
      <div className="max-w-7xl mx-auto border-x-brutal border-x-border-primary min-h-screen flex flex-col">
        <header className="border-b-brutal border-b-border-primary p-6 md:p-12 flex justify-between items-center bg-background sticky top-0 z-50">
          <div className="text-3xl font-black uppercase tracking-tighter">
            IRONROUTE
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            {['Services', 'Process', 'Comparison'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="font-bold uppercase text-xs tracking-widest hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="brutal-border bg-accent-yellow px-4 py-2 font-bold uppercase text-xs brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Consultation
            </button>
          </nav>
          {/* Mobile Menu Button - Placeholder */}
          <button className="md:hidden brutal-border p-2 bg-accent-yellow">
            <div className="w-6 h-1 bg-foreground mb-1"></div>
            <div className="w-6 h-1 bg-foreground mb-1"></div>
            <div className="w-6 h-1 bg-foreground"></div>
          </button>
        </header>

        <Hero />
        <WhatWeDo />
        <WhoItsFor />
        <HowItWorks />
        <WhyIronroute />
        <Metrics />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
