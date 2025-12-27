import React from 'react';
import { Button } from '@/components/ui/Button';
import { H1, P } from '@/components/ui/Typography';
import { Section } from '@/components/ui/Section';

export const Hero = () => {
  return (
    <Section className="relative overflow-hidden" noBorder>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <H1>
            Freight coordination <br />
            <span className="text-secondary tracking-[-0.05em] block sm:inline">without the chaos.</span>
          </H1>
          <P className="max-w-2xl text-foreground text-xl md:text-2xl">
            Independent logistics advisory for small-to-medium businesses shipping internationally. 
            We replace bloated enterprise software with clarity, cost control, and human expertise.
          </P>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-4">
            <Button variant="primary" size="xl">
              Request a Consultation
            </Button>
            <a 
              href="#what-we-do" 
              className="font-mono text-lg font-bold uppercase underline underline-offset-8 decoration-2 hover:text-accent transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-4 hidden lg:block">
           <div className="brutal-border-thick bg-accent-yellow p-8 brutal-shadow h-full flex flex-col justify-between min-h-[400px]">
              <div className="font-mono text-sm font-bold uppercase tracking-widest border-b-2 border-foreground pb-4 mb-4">
                Operational Status: Ready
              </div>
              <div className="text-4xl font-black uppercase tracking-tighter leading-none italic">
                Independent. <br />
                Direct. <br />
                Human.
              </div>
              <div className="mt-8 pt-4 border-t-2 border-foreground font-mono text-xs font-bold leading-tight">
                ESTABLISHED 2024 <br />
                GLOBAL COVERAGE <br />
                ZERO BLOAT POLICY
              </div>
           </div>
        </div>
      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-border-primary/20 -z-10" />
      <div className="absolute top-0 left-0 w-px h-full bg-border-primary/20 -z-10" />
    </Section>
  );
};
