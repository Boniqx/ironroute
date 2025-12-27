import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  noBorder?: boolean;
}

export const Section = ({
  children,
  className,
  containerClassName,
  id,
  noBorder = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full bg-background',
        !noBorder && 'border-b-brutal border-b-border-primary',
        className
      )}
    >
      <div className={cn('max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-24', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
