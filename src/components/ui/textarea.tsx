import * as React from 'react';

import { cn } from '@/util';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[128px] border w-full text-rose-950 border-rose-900 bg-rose-100 ring-offset-rose-50 px-3 py- focus:outline-none focus:ring-1 focus:ring-rose-950 placeholder:text-rose-950/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
