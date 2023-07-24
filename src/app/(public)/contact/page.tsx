import Link from 'next/link';

import { P } from '@/components/ui/typography';

export default function Page() {
  return (
    <div className="mt-4">
      <P>
        We&apos;re working on adding a form, but for now you can send an email to{' '}
        <Link href="mailto:hello@hitchie.digital" className="border-b-2 border-dotted border-rose-950 italic hover:text-rose-900">
          hello@hitchie.digital
        </Link>
      </P>
    </div>
  );
}