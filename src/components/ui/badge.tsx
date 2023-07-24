import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/util';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-rose-950 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-rose-950 text-rose-50',
        destructive:
          'border-transparent bg-rose-500 text-rose-50 hover:bg-rose-500/80',
        outline: 'text-rose-950',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
