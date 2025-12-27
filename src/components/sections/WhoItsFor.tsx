import React from 'react';
import { Section } from '@/components/ui/Section';
import { H2, H3, P, Label } from '@/components/ui/Typography';
import { BorderBox } from '@/components/ui/BorderBox';

const clients = [
  {
    type: 'Importers',
    details: 'Small businesses scaling beyond their first few containers who need professional oversight of their global arrivals.',
  },
  {
    type: 'E-commerce Brands',
    details: 'Fast-growing retailers requiring streamlined international fulfillment and transparent landed cost calculations.',
  },
  {
    type: 'Manufacturers',
    details: 'Companies shipping raw materials or finished goods who require strict scheduling and reliable equipment availability.',
  },
  {
    type: 'Distributors',
    details: 'Wholesalers managing complex multi-modal shipments across diverse regions and regulatory environments.',
  },
];

export const WhoItsFor = () => {
  return (
    <Section id="who-its-for" className="bg-zinc-100">
      <div className="mb-16">
        <Label className="mb-4 block">Client Profiles</Label>
        <H2>Who it’s for.</H2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <BorderBox key={index} className="p-8 h-full flex flex-col" variant="thin" shadow="sm">
            <H3 className="text-xl md:text-2xl mb-4 italic">{client.type}</H3>
            <div className="h-px bg-border-primary/20 w-full mb-6" />
            <P className="text-sm md:text-base leading-relaxed">
              {client.details}
            </P>
          </BorderBox>
        ))}
      </div>
    </Section>
  );
};
