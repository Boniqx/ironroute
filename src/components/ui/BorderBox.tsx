import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BorderBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'thin' | 'thick';
  shadow?: 'none' | 'sm' | 'md';
  as?: React.ElementType;
}

export const BorderBox = ({
  children,
  className,
  variant = 'thin',
  shadow = 'none',
  as: Component = 'div',
}: BorderBoxProps) => {
  return (
    <Component
      className={cn(
        variant === 'thin' ? 'brutal-border' : 'brutal-border-thick',
        shadow === 'sm' && 'brutal-shadow-sm',
        shadow === 'md' && 'brutal-shadow',
        'bg-background overflow-hidden',
        className
      )}
    >
      {children}
    </Component>
  );
};
