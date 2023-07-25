'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Blockquote } from '@/components/ui/typography';

import ContactFormHandler from './ContactFormHandler';

const projectTypes = [
  {
    id: 'mvp',
    label: 'MVP',
  },
  {
    id: '0-to-1',
    label: '0-to-1',
  },
  {
    id: 'feature-development',
    label: 'Feature Development',
  },
  {
    id: 'other-unsure',
    label: 'Other / Unsure',
  },
] as const;

const engineeringTypes = [
  {
    id: 'full-stack',
    label: 'Full Stack Engineering',
  },
  {
    id: 'backend',
    label: 'Back End Engineering',
  },
  {
    id: 'frontend',
    label: 'Front End Engineering',
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
  },
  {
    id: 'devops',
    label: 'DevOps',
  },
  {
    id: 'other-unsure',
    label: 'Other / Unsure',
  },
] as const;

const otherTypes = [
  {
    id: 'mentoring-coaching',
    label: 'Mentoring & Coaching',
  },
  {
    id: 'technical-advising',
    label: 'Technical Advising',
  },
  {
    id: 'cto',
    label: 'Fractional CTO',
  },
  {
    id: 'other',
    label: 'Other',
  },
] as const;

export type ContactFormSchema = z.infer<typeof zFormSchema>;
const zFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.object({
    name: z.string().min(2),
    size: z.string(),
  }),
  notes: z.string(),
  services: z.object({
    projectTypes: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'Please select at least one service',
    }),
    engineeringTypes: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'Please select at least one service',
    }),
    otherTypes: z.array(z.string()),
  }),
});

export default function ContactForm() {
  const [response, setResponse] = React.useState<Awaited<ReturnType<typeof ContactFormHandler>> | undefined>(undefined);
  const [resets, setResets] = React.useState<number>(0);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(zFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: {
        name: '',
        size: undefined,
      },
      notes: '',
      services: {
        projectTypes: [],
        engineeringTypes: [],
        otherTypes: [],
      },
    },
  });

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
    setResponse(await ContactFormHandler(data));
  };

  const onReset = () => {
    form.reset();
    setResets(resets+1);
  };

  if (response?.ok) {
    return (
      <Blockquote>Submitted! We&apos;ll be in contact soon.</Blockquote>
    );
  }

  const canSubmit = form.formState.isDirty && !form.formState.isSubmitting && (!form.formState.isSubmitSuccessful || !response?.ok);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:max-w-md">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Willie Nelson" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="hello@hitchie.digital" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Hitchie Digital" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company.size"
            render={({ field }) => 
              <FormItem key={`ff-company-size-${resets}`}>
                <FormLabel>Company Size</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger label="Company size">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value=">10">Less than 10</SelectItem>
                      <SelectItem value="10-25">10-25</SelectItem>
                      <SelectItem value="25-50">25-50</SelectItem>
                      <SelectItem value="50-100">50-100</SelectItem>
                      <SelectItem value="100-250">100-250</SelectItem>
                      <SelectItem value="250-500">250-500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>We can offer discounted rates to early stage startups.</FormDescription>
                <FormMessage/>
              </FormItem>
            }
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any additional information" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full max-w-full flex-col gap-4">
          <FormField
            control={form.control}
            name="services.projectTypes"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Project Types</FormLabel>
                </div>
                {projectTypes.map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="services.projectTypes"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, service.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== service.id
                                    )
                                  );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="services.engineeringTypes"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Software Engineering</FormLabel>
                </div>
                {engineeringTypes.map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="services.engineeringTypes"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, service.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== service.id
                                    )
                                  );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="services.otherTypes"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Other Services</FormLabel>
                </div>
                {otherTypes.map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="services.otherTypes"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, service.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== service.id
                                    )
                                  );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row-reverse gap-2">
            <Button variant="default" type="submit" disabled={!canSubmit}>Submit</Button>
            <Button variant="ghost" type="reset" onClick={onReset} disabled={!form.formState.isDirty}>Reset</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
