import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type PageData = CollectionEntry<'pages'>['data'] & { id: string };
type PageTemplate = PageData['template'];
type OrderedCollection = 'team' | 'sponsors' | 'milestones' | 'photos' | 'outreach';

export async function getPage(id: string): Promise<PageData>;
export async function getPage<T extends PageTemplate>(
  id: string,
  template: T,
): Promise<Extract<PageData, { template: T }>>;
export async function getPage(id: string, template?: PageTemplate) {
  const entry = await getEntry('pages', id);
  if (!entry) throw new Error('Missing page content for ' + id);
  if (template && entry.data.template !== template) {
    throw new Error('Expected the ' + template + ' template for ' + id);
  }
  return { ...entry.data, id: entry.id };
}

export function pagePath(id: string) {
  return id === 'index' ? '/' : '/' + id;
}

export async function getSite() {
  const entry = await getEntry('site', 'settings');
  if (!entry) throw new Error('Missing site settings');
  return entry.data;
}

export async function getOrdered<C extends OrderedCollection>(collection: C) {
  const entries: CollectionEntry<C>[] = await getCollection(collection);
  return entries.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id))
    .map<CollectionEntry<C>['data']>(entry => entry.data);
}
