import React from 'react';
import { Section } from '@/components/ui/Section';
import { H2, H3, P, Label } from '@/components/ui/Typography';

const metrics = [
  { label: 'Shipments Coordinated', value: '1,200+' },
  { label: 'Customs Clearance Rate', value: '99.8%' },
  { label: 'Regions Covered', value: '42' },
  { label: 'Years of Expertise', value: '15+' },
];

export const Metrics = () => {
  return (
    <Section id="metrics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-accent">
              {metric.value}
            </div>
            <Label className="text-xs md:text-sm">{metric.label}</Label>
            <div className="h-1 bg-border-primary w-full mt-4" />
          </div>
        ))}
      </div>
    </Section>
  );
};
