# Teatro Juárez · Guanajuato

Independent Spanish/English visitor guide built with static Astro7.3.2, TypeScript6.0.3, Tailwind4.3.3, Node24.21.0 and pnpm12.3.4. Exact package versions retained; complete application lockfile committed.

Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`. Native build scripts are limited to esbuild and workerd through pnpm allowBuilds; no global permission or ignored-script fallback.

Cloudflare project teatrojuarez uses `npm run build` and default `npx wrangler deploy`. Assets remain static; the small Worker canonicalizes HTTP/www while retaining path/query and returns explicit noindex404 responses. No domain or security settings are changed by source. Verify the intended deployment and domains separately.

Existing content families: Spanish/English home, hours, tickets, programme; Spanish legal and visual credits pages. Independent guide, no ticket sales or bookings. Prices distinguish building visits from performances and are attributed dated catalogue observations rather than availability promises.

Sources checked29October2026:
- https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/
- https://sic.cultura.gob.mx/ficha.php?disciplina=&table=teatro&table_id=386
- https://pagosenlinea.guanajuato.gob.mx/catalogo?tema=T027
- https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es

Visuals: original abstract stage SVG, CC0, not a theatre photograph or depiction. See served /creditos/ for scope/source. Former photographs removed; no clearance claim for underlying artworks.
