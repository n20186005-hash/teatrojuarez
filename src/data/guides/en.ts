import type { Guide } from './types';

const UPDATED = '2026-11-04';

/** English mirrors for the six highest-value guides. Same slug as the Spanish page. */
export const guidesEn: Guide[] = [
  {
    slug: 'visitar-teatro-juarez',
    group: 'A',
    priority: 'P0',
    title: 'How to visit Teatro Juárez in Guanajuato',
    description:
      'Can you go inside Teatro Juárez? The difference between visiting the building and attending a show, what to expect from access, and how to confirm the day’s visit.',
    h1: 'How to visit Teatro Juárez in Guanajuato',
    lead:
      'Yes: Teatro Juárez is a working venue and, when programming allows, you can go inside to see it without attending a performance. Access depends on the day’s rehearsals, stage setups and events, so treat it as something to confirm on the day rather than a monument with guaranteed opening hours.',
    facts: [
      { label: 'Address', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Venue phone', value: '+52 473 732 2521' },
      { label: 'Access', value: 'Confirm on the day through official channels' },
      { label: 'Festival venue', value: 'Emblematic venue of the Festival Internacional Cervantino' },
    ],
    sections: [
      {
        heading: 'Visiting the building or attending a show',
        paragraphs: [
          'These are two different experiences with separate prices. A building visit lets you see the lobby, the auditorium and the decoration. A performance requires a ticket for a specific date and seating area. There is no single pass covering both.',
          'If your main interest is architecture and interiors, look for the building-visit option. If you want to see a show, check the programme first and then the conditions of that event.',
        ],
      },
      {
        heading: 'Why access changes from day to day',
        paragraphs: [
          'The theatre remains a venue for opera, concerts, dance and theatre, and it is a central space during the Festival Internacional Cervantino. Rehearsals, set building and private events can interrupt public access.',
          'That is why we do not publish a recurring visiting schedule: we could not verify one in force as of 4 November 2026, and the Google Maps listing we checked showed no hours. Publishing fixed times would invent certainty that does not exist.',
        ],
      },
      {
        heading: 'How to confirm the day’s visit',
        paragraphs: [
          'The phone number listed on the venue’s official record is +52 473 732 2521. You can also check the Cultura Guanajuato page and the venue’s page within the Cervantino Festival for scheduled activity.',
        ],
        list: [
          'Call or check the official channels on the morning of your visit.',
          'Find out whether a performance or setup is scheduled: it may reduce or close the visiting window.',
          'Ask whether access includes the auditorium or only certain areas.',
          'Confirm payment methods and the fares in force that day.',
        ],
      },
      {
        heading: 'How much time to allow',
        paragraphs: [
          'Editorial suggestion, not a venue figure: if access is open, 30 to 45 minutes is usually enough to see the lobby and auditorium and to stop at the decoration. Add time if architectural detail interests you.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I go inside Teatro Juárez without buying a show ticket?',
        a: 'When programming allows, yes: there is a building-visit option separate from performance tickets. Availability varies by day and must be confirmed with the venue.',
      },
      {
        q: 'Does Teatro Juárez have daily visiting hours?',
        a: 'We could not verify a recurring schedule in force as of 4 November 2026. Visiting access depends on rehearsals, stage setups and performances, so it is confirmed on the day through official channels.',
      },
      {
        q: 'How long does the visit take?',
        a: 'As an editorial reference, 30 to 45 minutes for the lobby and auditorium. That is this guide’s estimate, not an official venue figure.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
      {
        label: 'Sistema de Información Cultural · Teatro Juárez',
        href: 'https://sic.cultura.gob.mx/ficha.php?disciplina=&table=teatro&table_id=386',
        external: true,
      },
    ],
    related: ['teatro-juarez-por-dentro', 'horarios', 'boletos', 'como-llegar'],
    updated: UPDATED,
  },
  {
    slug: 'teatro-juarez-por-dentro',
    group: 'A',
    priority: 'P0',
    title: 'Inside Teatro Juárez: what you can see',
    description:
      'What to see inside Teatro Juárez: lobby, main auditorium, neo-Moorish decoration and the historic curtain. Which areas usually open to the public and which may be restricted.',
    h1: 'Inside Teatro Juárez: what you can see',
    lead:
      'The interior of Teatro Juárez surprises by contrast: the façade is classicist and severe, while the lobby and auditorium unfold a historicist decoration of Hispano-Muslim inspiration. That is what people come to see inside, whenever access is open that day.',
    facts: [
      { label: 'Style', value: 'Eclectic: classicist façade and a Moorish-inspired interior' },
      { label: 'Portico', value: 'Twelve columns and a balustrade with eight bronze muses' },
      { label: 'Architects', value: 'José Noriega (start of works) and Antonio Rivas Mercado (completion)' },
    ],
    sections: [
      {
        heading: 'The contrast between outside and inside',
        paragraphs: [
          'From the street a portico of twelve columns dominates, topped by a balustrade with eight bronze muses. Once you cross the threshold the language changes: arches, lacework and geometric motifs create a very different atmosphere.',
          'That tension between two languages is one reason the building is studied as an example of eclectic architecture from the turn of the twentieth century.',
        ],
      },
      {
        heading: 'What is usually included',
        paragraphs: [
          'The areas normally part of a visit are the lobby, the staircase and the main auditorium, with its decoration and historic furnishings.',
        ],
        list: [
          'Lobby and staircase: your first contact with the interior decoration.',
          'Main auditorium: arches, lacework and geometric motifs of Hispano-Muslim origin.',
          'Historic curtain: the decoration includes a curtain made by the French artist Labasta.',
          'Details of the historic furniture and woodwork, when visible.',
        ],
      },
      {
        heading: 'What may be restricted',
        paragraphs: [
          'Dressing rooms, technical areas, the stage and workspaces are not part of the public route and are usually closed. Parts of the auditorium may also close during setups or performances.',
          'We do not describe historic photographs as if they showed the current state: the decoration has been through interventions and real access depends on the day’s activity.',
        ],
      },
      {
        heading: 'Planning your interior visit',
        paragraphs: [
          'First confirm that the building is open that day and ask whether the auditorium is included. If photography interests you, check the camera conditions in advance; they can vary by event.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you see the main auditorium?',
        a: 'When access is open, the main auditorium is usually part of the route. During setups and performances it may be restricted, so ask on the day.',
      },
      {
        q: 'Can you visit the dressing rooms or the stage?',
        a: 'Dressing rooms and technical areas are not part of the usual public route. Any opening depends on special activities organised by the venue.',
      },
      {
        q: 'What is the style of the interior?',
        a: 'The façade is classicist and severe, while the lobby and auditorium carry a historicist decoration of Hispano-Muslim inspiration. That contrast is why the building is described as eclectic.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
      {
        label: 'Festival Internacional Cervantino · Teatro Juárez venue',
        href: 'https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es',
        external: true,
      },
    ],
    related: ['visitar-teatro-juarez', 'horarios', 'historia-teatro-juarez', 'festival-cervantino'],
    updated: UPDATED,
  },
  {
    slug: 'como-llegar',
    group: 'B',
    priority: 'P0',
    title: 'How to get to Teatro Juárez in Guanajuato',
    description:
      'Ways to reach Teatro Juárez in Guanajuato’s historic centre: on foot, by public transport, by car, and from the bus station or the airport.',
    h1: 'How to get to Teatro Juárez in Guanajuato',
    lead:
      'Teatro Juárez sits at De Sopena 10, next to Jardín de la Unión, in the heart of Guanajuato’s historic centre. The good news is that almost everything in the centre is walkable; the part to plan is where you leave your vehicle, because the historic area has narrow streets and restricted traffic.',
    facts: [
      { label: 'Address', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Location', value: 'Historic centre of Guanajuato, next to Jardín de la Unión' },
      { label: 'Access', value: 'Confirm on the day through official channels' },
    ],
    sections: [
      {
        heading: 'Where exactly it is',
        paragraphs: [
          'The venue is at De Sopena 10, Centro, 36000 Guanajuato, Gto. Its Plus code is 2P8W+5R and you can open the exact location in Google Maps to plan a route.',
          'It stands in the historic centre, beside Jardín de la Unión and opposite the San Diego complex, which makes it a good starting point for exploring on foot.',
        ],
      },
      {
        heading: 'Getting there on foot',
        paragraphs: [
          'If you are already in the centre, walking is usually the most practical option. Many streets are pedestrian or have very limited traffic, and alleys connect the main points.',
          'Mind the slopes: Guanajuato is a city of hills and stairs, and the final stretch to the door can be uphill. Allow extra time if you are going to a performance.',
        ],
      },
      {
        heading: 'Public transport and arrivals',
        paragraphs: [
          'The city has urban buses and a long-distance bus terminal on the outskirts. From there, and from the main road entrances, you reach the centre by public transport or taxi and complete the final stretch on foot.',
          'If you drive, the usual approach is to park on the edge of the centre and continue on foot; see the parking guide to understand how that area works.',
        ],
        list: [
          'On foot: the most direct option if you are already in the centre.',
          'Urban public transport to the centre, then the last stretch on foot.',
          'By car: park on the edge of the centre and walk in.',
          'Taxi or ride-hailing to the nearest permitted drop-off point.',
        ],
      },
      {
        heading: 'What to check before you set off',
        paragraphs: [
          'Times change with traffic, closures and cultural programming. We do not publish fixed durations because we cannot guarantee them; check the route on the map on the day.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you drive right up to the door?',
        a: 'The historic centre has restricted traffic and narrow streets. The usual approach is to park on the edge of the centre and walk the last stretch.',
      },
      {
        q: 'How long is the walk through the centre?',
        a: 'It depends on your starting point and the slopes. This is a city of hills, so allow margin, especially before a performance.',
      },
      {
        q: 'Where is Teatro Juárez located?',
        a: 'At De Sopena 10, Centro, 36000 Guanajuato, Gto., in the historic centre and next to Jardín de la Unión.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
      {
        label: 'Guanajuato Capital · municipal website',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['visitar-teatro-juarez', 'horarios', 'festival-cervantino', 'boletos'],
    updated: UPDATED,
  },
  {
    slug: 'historia-teatro-juarez',
    group: 'C',
    priority: 'P0',
    title: 'History of Teatro Juárez in Guanajuato',
    description:
      'The history of Teatro Juárez: construction began in 1873, it opened on 27 October 1903, and it became a cultural symbol of Guanajuato.',
    h1: 'History of Teatro Juárez',
    lead:
      'Teatro Juárez was not built all at once: it spent decades under construction. Work began in 1873 on land linked to the former convent of San Diego de Alcalá, and the theatre formally opened on 27 October 1903. That long build explains much of its eclectic character.',
    facts: [
      { label: 'Start of construction', value: '1873' },
      { label: 'Inauguration', value: '27 October 1903' },
      { label: 'Architects', value: 'José Noriega (start of works) and Antonio Rivas Mercado (completion)' },
    ],
    sections: [
      {
        heading: 'From convent land to a theatre project',
        paragraphs: [
          'The theatre was raised on ground linked to the former convent of San Diego de Alcalá, in an area that over time became one of the historic centre’s main nodes.',
          'The initial project is attributed to José María Noriega. Work began in 1873, but the process was long and the design changed over the years.',
        ],
      },
      {
        heading: 'A long project with several hands',
        paragraphs: [
          'Construction passed through several stages and several professionals, among them Antonio Rivas Mercado, who took up and transformed the project, and Alberto Malo in the final stage.',
          'That succession of contributions is key to understanding the building: it reflects no single style or single author, but an accumulation of decisions taken over three decades.',
        ],
      },
      {
        heading: 'The 1903 opening',
        paragraphs: [
          'The theatre formally opened on 27 October 1903. Its debut was a performance of Giuseppe Verdi’s Aida, an ambitious choice that announced the venue’s ambition as a major auditorium.',
        ],
      },
      {
        heading: 'A symbol still in use',
        paragraphs: [
          'Since opening, the building has served both as a performance hall and as a centrepiece of Guanajuato’s cultural landscape. Today it hosts opera, concerts, dance and theatre, and plays a leading role during the Festival Internacional Cervantino.',
        ],
      },
    ],
    faq: [
      {
        q: 'When did Teatro Juárez open?',
        a: 'On 27 October 1903. Construction, however, had begun in 1873, so it took about three decades to complete.',
      },
      {
        q: 'Who designed Teatro Juárez?',
        a: 'The initial project is attributed to José María Noriega, and the work was transformed and completed by others, including Antonio Rivas Mercado, with Alberto Malo in the final stage.',
      },
      {
        q: 'What was performed at the opening?',
        a: 'Its debut was a performance of Giuseppe Verdi’s Aida, an ambitious choice that announced the venue’s ambition as a major auditorium.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
      {
        label: 'Gobierno de Guanajuato · 120 years of Teatro Juárez',
        href: 'https://boletines.guanajuato.gob.mx/2023/10/27/cumple-120-anos-el-majestuoso-teatro-juarez-de-guanajuato/',
        external: true,
      },
    ],
    related: ['visitar-teatro-juarez', 'festival-cervantino', 'como-llegar', 'horarios'],
    updated: UPDATED,
  },
  {
    slug: 'que-ver-cerca',
    group: 'D',
    priority: 'P0',
    title: 'Things to see near Teatro Juárez in Guanajuato',
    description:
      'What to see around Teatro Juárez: Jardín de la Unión, Templo de San Diego, Plaza de la Paz and other historic-centre sights within walking distance.',
    h1: 'Things to see near Teatro Juárez',
    lead:
      'Teatro Juárez has a huge advantage: it sits in the middle of the historic centre. From its door, several of Guanajuato’s most visited sights are a few minutes away on foot. This page helps you choose what to see nearby depending on your time.',
    facts: [
      { label: 'Location', value: 'Historic centre of Guanajuato, next to Jardín de la Unión' },
      { label: 'Start point', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Access', value: 'Confirm on the day through official channels' },
    ],
    sections: [
      {
        heading: 'Right next door: Jardín de la Unión',
        paragraphs: [
          'The theatre faces Jardín de la Unión, a tree-lined square with benches and arcades that is one of the city’s main meeting points. It is the natural starting point for any walk.',
        ],
      },
      {
        heading: 'Minutes away: the San Diego complex',
        paragraphs: [
          'Beside the garden stands the Templo de San Diego, linked to the former convent of the same name. The relationship between the church, the garden and the theatre defines one of the centre’s most recognisable corners.',
        ],
      },
      {
        heading: 'Options by time available',
        paragraphs: [
          'The centre lets you string visits together without covering long distances, though there are slopes.',
        ],
        list: [
          'One hour: Jardín de la Unión and its immediate surroundings.',
          'Half a day: add Plaza de la Paz and a walk through the alleys.',
          'A full day: add the Pípila viewpoint and the Callejón del Beso.',
          'For architecture: the theatre itself and the historic buildings next to it.',
        ],
      },
      {
        heading: 'Avoiding yet another top-ten list',
        paragraphs: [
          'Instead of repeating a generic list, this guide offers concrete routes starting from the theatre: the historic-centre walk, the climb to the Pípila and the route to the Callejón del Beso.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is right next to Teatro Juárez?',
        a: 'Jardín de la Unión and, in the same setting, the Templo de San Diego. They are the most immediate sights when you leave the theatre.',
      },
      {
        q: 'Can you walk everywhere?',
        a: 'Yes, the historic centre is walkable, though there are slopes and stairs. Distances between central points are short, but the gradients add time.',
      },
      {
        q: 'What can you see in an hour near Teatro Juárez?',
        a: 'As a reference, one hour covers Jardín de la Unión and its immediate surroundings; longer visits can add Plaza de la Paz, the alleys, the Pípila viewpoint and the Callejón del Beso.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · municipal website',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['visitar-teatro-juarez', 'como-llegar', 'festival-cervantino', 'horarios'],
    updated: UPDATED,
  },
  {
    slug: 'festival-cervantino',
    group: 'F',
    priority: 'P0',
    title: 'Teatro Juárez and the Cervantino International Festival',
    description:
      'The link between Teatro Juárez and the Festival Internacional Cervantino: how to find performances at the venue, what to check and how to prepare.',
    h1: 'Teatro Juárez and the Cervantino International Festival',
    lead:
      'The Festival Internacional Cervantino (FIC) is one of Guanajuato’s major cultural events, and Teatro Juárez is one of its emblematic venues. If you plan to attend a festival performance, this page explains how to find the right event and what to check before buying.',
    facts: [
      { label: 'Festival venue', value: 'Emblematic venue of the Festival Internacional Cervantino' },
      { label: 'Venue phone', value: '+52 473 732 2521' },
      { label: 'Access', value: 'Confirm on the day through official channels' },
    ],
    sections: [
      {
        heading: 'The theatre’s role in the festival',
        paragraphs: [
          'Each year the FIC brings together performances across several disciplines in various venues around the city. Given its history and capacity, Teatro Juárez is one of the main stages and has its own page on the festival’s official site.',
          'That makes the theatre a reference point during the festival, with more visitors and a concentrated programme.',
        ],
      },
      {
        heading: 'How to find performances at the venue',
        paragraphs: [
          'The festival’s official site publishes listings by venue and by activity. Teatro Juárez has a venue page with its associated events.',
          'Always check the full date carefully.',
        ],
        list: [
          'Open the venue page on the festival’s official site.',
          'Verify the year and the full date of each activity.',
          'Confirm that the activity belongs to the current edition, not a previous one.',
          'Follow the purchase link provided by the event itself.',
        ],
        note:
          'A visible listing does not prove a performance is upcoming: official pages may stay online after the date. Always check the year and whether the edition is still running.',
      },
      {
        heading: 'Before buying and before going',
        paragraphs: [
          'The festival has its own box-office rules and access conditions. Review the official festival rules and the conditions of the specific event.',
        ],
        list: [
          'Discount conditions and whether they are still valid.',
          'Late-entry policy once a performance has started.',
          'Venue, time and seating area.',
          'How to get there and how early to be at the door.',
        ],
      },
      {
        heading: 'The venue versus the programme',
        paragraphs: [
          'Teatro Juárez is a permanent building; the programme changes. This guide describes the venue and its relationship with the festival, but it does not maintain a live list of performances and does not sell tickets. For what is on today, check the official channels.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Teatro Juárez a Cervantino venue?',
        a: 'Yes. Teatro Juárez is one of the emblematic venues of the Festival Internacional Cervantino and has a venue page on the festival’s official site.',
      },
      {
        q: 'How do I buy tickets for a festival performance?',
        a: 'Find the event listing on the festival’s official channels, check the date and edition, and follow the purchase link provided by the event. This guide does not sell tickets.',
      },
      {
        q: 'Does a listing mean a performance is still upcoming?',
        a: 'Not necessarily: a visible listing does not prove a performance is upcoming, because official pages may stay online after the date. Always check the year and whether the edition is still running.',
      },
    ],
    sources: [
      {
        label: 'Festival Internacional Cervantino · Teatro Juárez venue',
        href: 'https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es',
        external: true,
      },
      {
        label: 'Festival Internacional Cervantino · Box-office rules',
        href: 'https://festivalcervantino.gob.mx/20260720/reglamento-taquilla/',
        external: true,
      },
    ],
    related: ['como-llegar', 'visitar-teatro-juarez', 'horarios', 'boletos'],
    updated: UPDATED,
  },
];

export const guidesEnBySlug: Record<string, Guide> = Object.fromEntries(
  guidesEn.map((g) => [g.slug, g])
);
