'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/util';

interface Props {
  technologies: Array<string>;
}

export default function Tech(props: Props) {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {props.technologies.map((tech, index) => {
        const isDefault = index % 2 === 0 ;
        const isShimmering = Math.round(Math.random()*100) * (seconds-index*2) % 23 === 0;

        return (
          <Badge
            variant={isDefault ? 'default' : 'outline'}
            key={index}
            className={cn({
              'bg-rose-900': isDefault && isShimmering,
              'border-rose-900 text-rose-900': !isDefault && isShimmering,
            })}
          >
            {tech}
          </Badge>
        );
      })}
    </div>
  );
}
