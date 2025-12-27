import React from 'react';
import { Section } from '@/components/ui/Section';
import { Label } from '@/components/ui/Typography';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t-brutal-thick border-border-primary bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <div className="text-4xl font-black uppercase tracking-tighter mb-6">
            IRONROUTE
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed">
            Independent logistics advisory for SMBs shipping internationally. 
            Focused on clarity, cost control, and human expertise.
          </p>
        </div>
        
        <div className="md:col-span-3">
          <Label className="mb-6 block border-b border-border-primary pb-2">Navigation</Label>
          <ul className="flex flex-col gap-3">
            {['Services', 'About', 'Process', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-bold uppercase text-sm hover:underline hover:decoration-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <Label className="mb-6 block border-b border-border-primary pb-2">Contact</Label>
          <p className="font-bold text-sm mb-1 uppercase">Operations HQ</p>
          <p className="text-sm font-medium mb-4">Port of Miami, FL</p>
          <p className="text-sm font-bold underline decoration-2">inquiry@ironroute.com</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] uppercase font-bold text-foreground/40">
          © {currentYear} Ironroute Advisory Group. All rights reserved.
        </p>
        <p className="font-mono text-[10px] uppercase font-bold text-foreground/40">
          Made with functional intent.
        </p>
      </div>
    </footer>
  );
};
