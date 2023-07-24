import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Blockquote, H2, HR, Mark, P  } from '@/components/ui/typography';

const technologies = [
  'Axe',
  'APIs',
  'AWS',
  'Bash',
  'CloudFormation',
  'CI/CD',
  'Contentful',
  'CSS',
  'DataDog',
  'Docker',
  'Fastly',
  'Figma',
  'Git',
  'GitHub',
  'Go',
  'Google Tag Manager',
  'GraphQL',
  'HTML',
  'JIRA',
  'Kafka',
  'Laravel',
  'Linear',
  'Linux',
  'MySQL',
  'Next.js',
  'Node.js',
  'PHP',
  'PostgreSQL',
  'Prisma',
  'React',
  'Redis',
  'REST',
  'Ruby',
  'Ruby on Rails',
  'Serverless',
  'Shopify',
  'Tailwind',
  'Terraform',
  'Typescript',
  'Vercel',
].map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default function Page() {
  return (
    <main className="flex h-full w-full flex-col gap-4 overflow-auto bg-rose-100 p-8 text-rose-950">
      <nav>
        <ul className="flex gap-2 p-2">
          <li><Link href="/dashboard"><Button variant="outline" size="sm">Customer Dashboard</Button></Link></li>
          <li><Button variant="default" size="sm">Contact Us</Button></li>
        </ul>
      </nav>
      <div className="flex max-w-5xl flex-col gap-4">
        <h1 className="text-8xl font-extrabold tracking-tight lg:text-9xl">
          Hitchie Digital
        </h1>
        <Blockquote>
          <P>
            Hitchie Digital is a full service software engineering agency.
          </P>
        </Blockquote>
        <H2>SERVICES</H2>
        <ol className="ml-4 list-decimal leading-8">
          <li>
            The hands-on-coding engineering services that we offer include <Mark>Full Stack</Mark> &amp; <Mark>Backend</Mark> &amp; <Mark>Frontend</Mark> &amp; <Mark>DevOps</Mark>.
          </li>
          <li>
            Everything from a <Mark>MVP</Mark> to <Mark>0-to-1</Mark> to <Mark>Feature Development</Mark> in your existing codebase.
          </li>
          <li>
            <Mark>Coaching</Mark> ICs and EMs.
          </li>
        </ol>
        <HR />
        <H2>TECHNOLOGIES</H2>
        <P>
          We believe in using the right tools for the job (most of the time that means the existing technology stack that your engineers are already using). Some of the technologies we work with frequently, in no specific order:
        </P>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              variant={index % 2 === 0 ? 'default' : 'outline'}
              key={index}>
              {tech}
            </Badge>
          ))}
        </div>
        <P>
          <Link href="" className="border-b-2 border-dotted border-rose-950 italic hover:text-rose-900">
            Not sure what you need? Let&apos;s talk about it.
          </Link>
        </P>
      </div>
    </main>
  );
}
