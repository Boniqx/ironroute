import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => (
  <Component className={cn('text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-foreground', className)}>
    {children}
  </Component>
);

export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => (
  <Component className={cn('text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-foreground', className)}>
    {children}
  </Component>
);

export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => (
  <Component className={cn('text-2xl md:text-4xl font-bold uppercase tracking-tight mb-4 text-foreground', className)}>
    {children}
  </Component>
);

export const Label = ({ children, className, as: Component = 'span' }: TypographyProps) => (
  <Component className={cn('font-mono text-xs uppercase tracking-widest font-bold text-foreground/60', className)}>
    {children}
  </Component>
);

export const P = ({ children, className, as: Component = 'p' }: TypographyProps) => (
  <Component className={cn('text-lg md:text-xl font-medium leading-relaxed text-foreground', className)}>
    {children}
  </Component>
);
