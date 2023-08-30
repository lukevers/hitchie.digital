'use server';

import { WebClient } from '@slack/web-api';

import db from '@/util/db';

import { ContactFormSchema } from './ContactForm';

export default async function ContactFormHandler(data: ContactFormSchema) {
  const content = { function: 'ContactFormHandler', data: data };
  const stringifiedContent = JSON.stringify(content, null, 2);
  console.log(stringifiedContent);

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

  try {
    const client = new WebClient(`${process.env.SLACK_CONTACT_FORM_BOT_TOKEN}`);

    await client.chat.postMessage({
      channel: `${process.env.SLACK_CONTACT_FORM_CHANNEL_ID}`,
      text: `\`\`\`${stringifiedContent}\`\`\``,
    });
  } catch (e) {
    console.error(e);
  }

  return { ok: true };
}
