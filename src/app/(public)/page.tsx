import Link from 'next/link';

import { Blockquote, H2, HR, Mark, P  } from '@/components/ui/typography';

import Tech from './Tech';
import technologies from './technologies';

export default function Page() {
  return (
    <>
      <Blockquote>
        <P>
          Hitchie Digital is a full service software engineering agency.
        </P>
      </Blockquote>
      <H2>Services</H2>
      <ol className="ml-4 flex list-decimal flex-col gap-2 leading-8">
        <li>
          The hands-on-coding engineering services that we offer include <Mark>Full Stack</Mark> &amp; <Mark>Backend</Mark> &amp; <Mark>Frontend</Mark> &amp; <Mark>DevOps</Mark> &amp; <Mark>Infrastructure</Mark>.
        </li>
        <li>
          Everything from a <Mark>MVP</Mark> to <Mark>0-to-1</Mark> to <Mark>Feature Development</Mark> in your existing codebase.
        </li>
        <li>
          <Mark>Mentoring</Mark> and <Mark>Coaching</Mark> ICs and EMs.
        </li>
        <li>
          Short and long-term <Mark>Fractional CTO</Mark> and <Mark>Technical Advising</Mark>.
        </li>
      </ol>
      <HR />
      <H2>Technologies</H2>
      <P>
          We believe in using the right tools for the job (most of the time that means the existing technology stack that your engineers are already using). Some of the technologies we work with frequently:
      </P>
      <Tech technologies={technologies} />
      <P>
        <Link href="/contact" className="border-b-2 border-dotted border-rose-950 italic hover:text-rose-900">
            Not sure what you need? Let&apos;s talk about it.
        </Link>
      </P>
    </>
  );
}
