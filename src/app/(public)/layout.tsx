import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Layout(props: { children: React.ReactNode}) {
  return (
    <main className="flex h-full w-full flex-col gap-4 overflow-auto bg-rose-100 p-8 text-rose-950">
      <nav>
        <ul className="flex gap-2 p-2">
          <li><Button variant="outline" size="sm" disabled>Customer Dashboard</Button></li>
          <li><Link href="/contact"><Button variant="default" size="sm">Contact Us</Button></Link></li>
        </ul>
      </nav>
      <div className="flex max-w-5xl flex-col gap-4">
        <Link href="/">
          <h1 className="text-8xl font-extrabold tracking-tight lg:text-9xl">
          Hitchie Digital
          </h1>
        </Link>
        {props.children}
      </div>
    </main>
  );
}
