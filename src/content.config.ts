import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
const localPath = z.string().regex(/^\/(?!\/)[\w./%~-]*$/);
const webUrl = z.url({ protocol: /^https$/ });
const link = z.union([localPath, webUrl]);
const image = localPath.refine(path => path.startsWith('/images/'), 'Use a path under /images/');
const order = z.number().int().positive();
const teamGroups = z.enum(['executives', 'management', 'subteamLeads']);
const sponsorGroups = z.enum(['platinum', 'gold', 'silver', 'bronze', 'software']);

const intro = z.object({
  heading: text,
  eyebrow: text.optional(),
  summary: text,
});

const plainPage = z.object({
  title: text,
  intro: intro.optional(),
  copy: z.record(z.string(), text).default({}),
  links: z.record(z.string(), link).default({}),
});

const pageTemplates = z.discriminatedUnion('template', [
  z.object({ template: z.literal('standard') }),
  z.object({
    template: z.literal('home'),
    details: z.object({
      stats: z.array(z.tuple([text, text])).min(1),
      projects: z.array(z.object({
        title: text, subtitle: text, desc: text, image, link, label: text,
      })),
      whyUs: z.array(z.object({ title: text, desc: text })),
      newsletters: z.array(z.object({ title: text, file: localPath })),
      faqs: z.array(z.object({ q: text, a: text })),
    }),
  }),
  z.object({
    template: z.literal('team'),
    details: z.object({
      groups: z.record(teamGroups, text),
      memorial: z.object({
        name: text, title: text, role: text, program: text, img: image, description: text,
      }),
    }),
  }),
  z.object({
    template: z.literal('subsystem'),
    details: z.object({
      teamPhoto: image,
      teamPhotoAlt: text,
      teamHeading: text,
      subteamMembers: text,
      modules: z.array(z.object({ title: text, badge: text, img: image, desc: text })),
    }),
  }),
  z.object({
    template: z.literal('software'),
    details: z.object({ teamRoster: text }),
  }),
  z.object({
    template: z.literal('sponsorships'),
    details: z.object({
      tiers: z.array(z.object({ name: text, amount: text, perks: z.array(text) })),
    }),
  }),
]);

const navLink = z.object({ label: text, path: localPath, isCta: z.boolean().optional() });

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/data/pages' }),
    schema: plainPage.and(pageTemplates),
  }),
  site: defineCollection({
    loader: file('src/data/site.json'),
    schema: z.object({
      name: text,
      tagline: text,
      institution: text,
      email: z.email(),
      address: text,
      logo: image,
      socials: z.object({
        instagram: webUrl, linkedin: webUrl, github: webUrl, youtube: webUrl,
      }),
      donations: z.object({ individual: webUrl, corporate: webUrl, code: text }),
      landAcknowledgment: text,
      nav: z.array(z.union([
        navLink,
        z.object({ label: text, children: z.array(navLink).min(1) }),
      ])),
      header: z.object({ affiliation: text, menuLabel: text, navigationLabel: text, skipLink: text }),
      footer: z.object({
        brandName: text,
        socialLabels: z.object({ instagram: text, linkedin: text, github: text, youtube: text }),
        linkGroups: z.array(z.object({ heading: text, links: z.array(navLink) })),
        mentorsHeading: text,
        mentors: z.array(z.object({ name: text, organization: text })),
        copyright: text,
        allRightsReserved: text,
      }),
      seo: z.object({ description: text, socialDescription: text }),
    }),
  }),
  team: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/data/team' }),
    schema: z.object({
      name: text,
      role: text,
      program: text.optional(),
      img: image.optional(),
      group: teamGroups,
      order,
    }),
  }),
  sponsors: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/data/sponsors' }),
    schema: z.object({
      name: text,
      tier: text,
      logo: image,
      desc: text.optional(),
      group: sponsorGroups,
      order,
    }),
  }),
  milestones: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/data/milestones' }),
    schema: z.object({ year: text, title: text, desc: text, order }),
  }),
  photos: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/data/photos' }),
    schema: z.object({ src: image, alt: text, order }),
  }),
  outreach: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/data/outreach' }),
    schema: z.object({ title: text, subtitle: text, desc: text, img1: image, img2: image, order }),
  }),
};
