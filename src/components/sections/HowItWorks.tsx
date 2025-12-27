import React from 'react';
import { Section } from '@/components/ui/Section';
import { H2, H3, P, Label } from '@/components/ui/Typography';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We audit your current logistics data, identifying hidden costs and structural bottlenecks in your current shipping route.',
  },
  {
    number: '02',
    title: 'Strategy Design',
    description: 'Our team designs a optimized freight plan, selecting carriers and routes based on actual performance data, not sales promises.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We manage the transition, coordinating with carriers and customs to ensure your first shipments under the new system are flawless.',
  },
  {
    number: '04',
    title: 'Ongoing Oversight',
    description: 'Regular spot-checks, rate audits, and performance reviews to ensure your logistics stay lean as your business scales.',
  },
];

export const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <div className="mb-24">
        <Label className="mb-4 block">The Method</Label>
        <H2>How it works.</H2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t-brutal border-l-brutal border-border-primary">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="p-8 md:p-10 border-r-brutal border-b-brutal border-border-primary flex flex-col gap-6"
          >
            <div className="text-4xl font-black font-mono text-accent-yellow [text-shadow:2px_2px_0_#000]">
              {step.number}
            </div>
            <div>
              <H3 className="text-xl md:text-2xl mb-4">{step.title}</H3>
              <P className="text-sm md:text-base leading-relaxed text-foreground/80">
                {step.description}
              </P>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
