import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
}

interface PageHeadingProps {
  title: string;
  description: React.ReactNode;
  cta?: React.ReactNode;
  icon?: React.ReactNode;
}

export function PageHeading(props: PageHeadingProps) {
  return (
    <div className="mb-4 flex items-center justify-between py-2">
      <div className="flex flex-col gap-1.5 tracking-wide">
        <h1 className="flex items-center gap-1.5 text-2xl font-semibold uppercase text-rose-950">
          {props.icon}
          {props.title}
        </h1>
        <span className="text-xs text-rose-950">{props.description}</span>
      </div>
      <div>{props.cta}</div>
    </div>
  );
}


export function H1(props: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

export function H2(props: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}

export function H3(props: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}

export function H4(props: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

export function P(props: TypographyProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {props.children}
    </p>
  );
}

export function Blockquote(props: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  );
}

export function InlineCode(props: TypographyProps) {
  return (
    <code className="relative rounded bg-rose-50 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {props.children}
    </code>
  );
}