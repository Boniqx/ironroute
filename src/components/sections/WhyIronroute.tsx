import React from 'react';
import { Section } from '@/components/ui/Section';
import { H2, H3, P, Label } from '@/components/ui/Typography';
import { BorderBox } from '@/components/ui/BorderBox';

const comparison = [
  {
    feature: 'Pricing',
    traditional: 'Hidden margins, complex surcharges, and "black box" quotes.',
    ironroute: '100% transparent. Direct carrier rates with a flat advisory fee.',
  },
  {
    feature: 'Communication',
    traditional: 'Automated ticketing systems and offshore call centers.',
    ironroute: 'Direct access to your dedicated logistics expert via phone/email.',
  },
  {
    feature: 'Technology',
    traditional: 'Bloated, expensive platforms you don’t actually need.',
    ironroute: 'Lightweight systems tailored to your existing team capacity.',
  },
  {
    feature: 'Alignment',
    traditional: 'Incentivized to push certain carriers for kickbacks.',
    ironroute: 'Independent advisory. Our only loyalty is to your bottom line.',
  },
];

export const WhyIronroute = () => {
  return (
    <Section id="why-ironroute" className="bg-foreground text-background">
      <div className="mb-16">
        <Label className="mb-4 block text-accent-yellow">Comparison</Label>
        <H2 className="text-background">Why Ironroute.</H2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-brutal-thick border-accent">
          <thead>
            <tr className="bg-accent-yellow text-foreground">
              <th className="p-6 text-left border-brutal border-accent font-mono text-sm uppercase">Feature</th>
              <th className="p-6 text-left border-brutal border-accent font-mono text-sm uppercase">Traditional Forwarders</th>
              <th className="p-6 text-left border-brutal border-accent font-mono text-sm uppercase bg-accent text-white">IRONROUTE</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, index) => (
              <tr key={index}>
                <td className="p-6 border-brutal border-accent font-bold uppercase tracking-tight text-sm md:text-base">{row.feature}</td>
                <td className="p-6 border-brutal border-accent text-sm md:text-base text-background/60">{row.traditional}</td>
                <td className="p-6 border-brutal border-accent text-sm md:text-base font-medium">{row.ironroute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};
