'use server';

import db from '@/util/db';

import { ContactFormSchema } from './ContactForm';

export default async function ContactFormHandler(data: ContactFormSchema) {
  const content = { function: 'ContactFormHandler', data: data };
  console.log(JSON.stringify(content, null, 2));

  await db.contactForm.create({
    data: {
      name: data.name,
      email: data.email,
      companyName: data.company.name,
      companySize: data.company.size,
      notes: data.notes,
      projectTypes: data.services.projectTypes,
      engineeringTypes: data.services.engineeringTypes,
      otherServices: data.services.otherTypes,
    },
  });

  return { ok: true };
}
