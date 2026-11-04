import type { Guide, GuideGroup, GuideGroupMeta } from './types';
import { groupA } from './grupo-a';
import { groupB } from './grupo-b';
import { groupC } from './grupo-c';
import { groupD } from './grupo-d';
import { groupE } from './grupo-e';
import { groupF } from './grupo-f';

export type { Guide, GuideGroup, GuidePriority, GuideSection, GuideFaq, GuideSource } from './types';

export const groups: Record<GuideGroup, GuideGroupMeta> = {
  A: { es: 'Visita, boletos y funciones', en: 'Visits, tickets and performances' },
  B: { es: 'Cómo llegar y estacionamiento', en: 'Getting there and parking' },
  C: { es: 'Historia y arquitectura', en: 'History and architecture' },
  D: { es: 'Alrededores y rutas a pie', en: 'Nearby sights and walking routes' },
  E: { es: 'Itinerarios y necesidades especiales', en: 'Itineraries and special needs' },
  F: { es: 'Gastronomía, fotografía y festival', en: 'Food, photography and festival' }
};

export const groupOrder: GuideGroup[] = ['A', 'B', 'C', 'D', 'E', 'F'];

/** 36 guías en español. */
export const guides: Guide[] = [...groupA, ...groupB, ...groupC, ...groupD, ...groupE, ...groupF];

export const guidesBySlug: Record<string, Guide> = Object.fromEntries(
  guides.map((g) => [g.slug, g])
);

/** Guías en español agrupadas para el índice de la portada. */
export const guideGroups: { group: GuideGroup; meta: GuideGroupMeta; items: Guide[] }[] =
  groupOrder.map((group) => ({
    group,
    meta: groups[group],
    items: guides.filter((g) => g.group === group)
  }));
