import React from 'react';
import { Section } from '@/components/ui/Section';
import { H2, P } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export const FinalCTA = () => {
  return (
    <Section id="cta" className="bg-accent-yellow">
      <div className="flex flex-col items-center text-center gap-8 py-12">
        <H2 className="max-w-4xl mx-auto">
          Ready to strip the complexity from your supply chain?
        </H2>
        <P className="max-w-2xl mx-auto font-bold uppercase tracking-tight">
          Schedule a no-obligation diagnostics call with a senior logistics advisor.
        </P>
        <div className="mt-4">
          <Button variant="primary" size="xl" className="bg-foreground text-background hover:bg-zinc-800 border-foreground">
            Request a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
};
