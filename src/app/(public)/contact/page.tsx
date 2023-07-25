import Link from 'next/link';

import { H2, HR, P } from '@/components/ui/typography';

import ContactForm from './ContactForm';

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <H2>Let&apos;s Work Together</H2>
      <ContactForm />
      <HR />
      <P>
        Or send us an email to{' '}
        <Link href="mailto:hello@hitchie.digital" className="border-b-2 border-dotted border-rose-950 italic hover:text-rose-900">
          hello@hitchie.digital
        </Link>
      </P>
    </div>
  );
}