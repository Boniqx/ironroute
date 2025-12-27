import React from 'react';
import { Section } from '@/components/ui/Section';
import { H2, H3, P, Label } from '@/components/ui/Typography';
import { BorderBox } from '@/components/ui/BorderBox';

const services = [
  {
    title: 'Freight Procurement',
    description: 'Direct negotiation with carriers. No middlemen, no hidden margins. We find the most efficient routes and secure the best rates for your specific cargo volume.',
  },
  {
    title: 'Network Auditing',
    description: 'Comprehensive analysis of your current shipping data to identify leaks, overcharges, and inefficiencies in your existing supply chain.',
  },
  {
    title: 'Customs Advisory',
    description: 'Expert guidance through the maze of international trade compliance, duties, and documentation to prevent costly delays at the border.',
  },
  {
    title: 'Process Design',
    description: 'We build custom logistics workflows tailored to your team’s size and technical capacity. Functional systems, not complex software.',
  },
];

export const WhatWeDo = () => {
  return (
    <Section id="what-we-do">
      <div className="mb-16 max-w-2xl">
        <Label className="mb-4 block text-accent">Services & Expertise</Label>
        <H2>What we do.</H2>
        <P>
          We provide the high-level expertise of a global logistics department without the 
          overhead. Our focus is on tangible outcomes: lower costs, faster transit, and zero chaos.
        </P>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-primary border-brutal w-full">
        {services.map((service, index) => (
          <div key={index} className="bg-background p-8 md:p-12 hover:bg-zinc-50 transition-colors">
            <H3 className="mb-4">{service.title}</H3>
            <P className="text-foreground/80 text-base md:text-lg">
              {service.description}
            </P>
          </div>
        ))}
      </div>
    </Section>
  );
};
