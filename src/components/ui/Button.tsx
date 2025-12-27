import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', shadow = true, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-white hover:bg-[#EA580C]',
      secondary: 'bg-accent-yellow text-foreground hover:bg-[#EAB308]',
      outline: 'bg-background text-foreground hover:bg-zinc-100',
      ghost: 'bg-transparent border-transparent shadow-none hover:bg-zinc-100',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'brutal-border font-bold uppercase transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none',
          shadow && variant !== 'ghost' && 'brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
