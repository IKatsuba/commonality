import * as React from 'react';

import { cn } from '../utils/cn';

const Kbd = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'kbd'>) => {
  return (
    <kbd
      {...props}
      className={cn(
        'bg-accent text-accent-foreground min-w-5 inline-flex h-5 w-fit items-center justify-center rounded-md border px-1 font-sans text-xs font-semibold antialiased',
        className
      )}
    >
      {children}
    </kbd>
  );
};

export { Kbd };