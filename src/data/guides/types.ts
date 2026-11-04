export type GuideGroup = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type GuidePriority = 'P0' | 'P1' | 'P2';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  note?: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

/** Fila del bloque «Información práctica». Solo datos verificables y etiquetados. */
export interface GuideFact {
  label: string;
  value: string;
}

export interface GuideSource {
  label: string;
  href: string;
  external?: boolean;
}

export interface Guide {
  /** Ruta relativa sin barra final, p. ej. "visitar-teatro-juarez". */
  slug: string;
  group: GuideGroup;
  priority: GuidePriority;
  /** Título SEO (<title>). */
  title: string;
  /** Meta description. */
  description: string;
  /** Encabezado H1 visible. */
  h1: string;
  /** Respuesta directa que abre el artículo. */
  lead: string;
  /** Resumen práctico de datos verificables que se muestra antes del cuerpo. */
  facts?: GuideFact[];
  sections: GuideSection[];
  faq: GuideFaq[];
  sources: GuideSource[];
  /** Slugs relacionados para enlazado interno. */
  related: string[];
  /** Fecha de última verificación (ISO). */
  updated: string;
  /** ¿Existe espejo en inglés en /en/<slug>/? */
  hasEn?: boolean;
}

export interface GuideGroupMeta {
  es: string;
  en: string;
}
