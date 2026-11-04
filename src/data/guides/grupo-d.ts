import type { Guide } from './types';

const UPDATED = '2026-11-04';

export const groupD: Guide[] = [
  {
    slug: 'que-ver-cerca',
    group: 'D',
    priority: 'P0',
    hasEn: true,
    title: 'Qué ver cerca del Teatro Juárez de Guanajuato',
    description:
      'Qué visitar alrededor del Teatro Juárez: Jardín de la Unión, Templo de San Diego, Plaza de la Paz y otros puntos del centro histórico a poca distancia a pie.',
    h1: 'Qué ver cerca del Teatro Juárez',
    lead:
      'El Teatro Juárez tiene una ventaja enorme: está en el centro del centro histórico. Desde su puerta, varios de los puntos más visitados de Guanajuato quedan a pocos minutos a pie. Esta página te ayuda a elegir qué ver cerca según el tiempo que tengas.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Entorno', value: 'Zona del Jardín de la Unión, en el centro histórico' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'Justo al lado: el Jardín de la Unión',
        paragraphs: [
          'El teatro da al Jardín de la Unión, una plaza arbolada con bancos y soportales que funciona como uno de los principales puntos de encuentro de la ciudad. Es el punto de partida natural para cualquier recorrido.',
        ],
      },
      {
        heading: 'A pocos minutos: el conjunto de San Diego',
        paragraphs: [
          'Junto al jardín se encuentra el Templo de San Diego, vinculado al antiguo convento del mismo nombre. La relación entre el templo, el jardín y el teatro define uno de los rincones más reconocibles del centro.',
        ],
      },
      {
        heading: 'Opciones según tu tiempo',
        paragraphs: [
          'El centro permite encadenar visitas sin recorrer grandes distancias, aunque con pendientes.',
        ],
        list: [
          'Con una hora: Jardín de la Unión y su entorno inmediato.',
          'Con medio día: añadir Plaza de la Paz y un paseo por los callejones.',
          'Con un día completo: sumar el mirador del Pípila y el Callejón del Beso.',
          'Si te interesa la arquitectura: el propio teatro y los edificios históricos contiguos.',
        ],
      },
      {
        heading: 'Cómo evitar repetir el mismo listado',
        paragraphs: [
          'En lugar de otra lista de "los imprescindibles", esta guía propone rutas concretas con el teatro como punto de partida: la ruta por el centro histórico, el paseo al Pípila y el recorrido hasta el Callejón del Beso.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Qué hay justo al lado del Teatro Juárez?',
        a: 'El Jardín de la Unión y, en el mismo entorno, el Templo de San Diego. Son los puntos más inmediatos al salir del teatro.',
      },
      {
        q: '¿Se puede recorrer todo a pie?',
        a: 'Sí, el centro histórico se recorre a pie, aunque hay cuestas y escaleras. Las distancias entre puntos céntricos son cortas, pero el desnivel suma tiempo.',
      },
      {
        q: '¿Cuál es el punto de partida para ver los alrededores?',
        a: 'El Teatro Juárez, en De Sopena 10, en el centro. Desde su puerta, el Jardín de la Unión y el Templo de San Diego quedan a pocos pasos.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['jardin-de-la-union', 'templo-san-diego', 'ruta-centro-historico', 'plaza-de-la-paz'],
    updated: UPDATED,
  },
  {
    slug: 'jardin-de-la-union',
    group: 'D',
    priority: 'P0',
    title: 'Jardín de la Unión: qué ver junto al Teatro Juárez',
    description:
      'El Jardín de la Unión de Guanajuato: la plaza que da acceso al Teatro Juárez, su función como punto de encuentro y lo que se puede ver en su entorno.',
    h1: 'Jardín de la Unión: la plaza del Teatro Juárez',
    lead:
      'El Jardín de la Unión es la plaza que sirve de antesala al Teatro Juárez. Arbolada y con soportales, funciona como uno de los puntos de reunión más animados de Guanajuato y como referencia para orientarse en el centro.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Entorno', value: 'Zona del Jardín de la Unión, en el centro histórico' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'Una plaza de encuentro',
        paragraphs: [
          'Situado junto a la fachada del teatro, el jardín reúne bancos, árboles y soportales. Es un lugar de paso constante: punto de cita, descanso y escenario improvisado en las noches de actividad cultural.',
          'Su posición lo convierte en el mejor punto para empezar o terminar un recorrido por el centro.',
        ],
      },
      {
        heading: 'Qué se ve desde aquí',
        paragraphs: [
          'El jardín permite observar la fachada del Teatro Juárez con cierta distancia, algo útil para apreciar el pórtico y las esculturas de la balaustrada.',
        ],
        list: [
          'La fachada del Teatro Juárez, con sus columnas y sus musas de bronce.',
          'El Templo de San Diego, en el mismo conjunto.',
          'El ambiente de soportales y terrazas del entorno.',
          'El movimiento de la vida cultural del centro, especialmente al anochecer.',
        ],
      },
      {
        heading: 'Cuándo ir',
        paragraphs: [
          'El jardín es un espacio público abierto; su animación depende de la hora y de la programación cultural. Al atardecer y por la noche suele concentrar más gente, lo que también significa más movimiento y menos calma.',
          'En noches de función o durante el festival, la zona puede estar especialmente concurrida.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Dónde está el Jardín de la Unión?',
        a: 'Junto a la fachada del Teatro Juárez, en el centro histórico de Guanajuato. Es uno de los principales puntos de encuentro de la ciudad.',
      },
      {
        q: '¿Hay que pagar para visitar el Jardín de la Unión?',
        a: 'Es un espacio público y de acceso libre. Su animación depende de la hora y de la actividad cultural del momento.',
      },
      {
        q: '¿Es un buen punto de partida para recorrer el centro?',
        a: 'Sí. Su posición junto al Teatro Juárez, en De Sopena 10, lo convierte en el mejor punto para empezar o terminar un recorrido por el centro.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['que-ver-cerca', 'templo-san-diego', 'fotografia', 'ruta-centro-historico'],
    updated: UPDATED,
  },
  {
    slug: 'templo-san-diego',
    group: 'D',
    priority: 'P1',
    title: 'Templo de San Diego: historia y visita desde el Teatro Juárez',
    description:
      'El Templo de San Diego de Guanajuato: su vínculo con el antiguo convento y con el Teatro Juárez, y cómo visitarlo desde el Jardín de la Unión.',
    h1: 'Templo de San Diego, junto al Teatro Juárez',
    lead:
      'El Templo de San Diego forma parte del mismo conjunto urbano que el Teatro Juárez, en torno al Jardín de la Unión. Su historia está ligada al antiguo convento de San Diego de Alcalá, sobre cuyo entorno se levantó más tarde el teatro.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Entorno', value: 'Zona del Jardín de la Unión, en el centro histórico' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'Un vínculo histórico',
        paragraphs: [
          'El teatro se construyó sobre un solar vinculado al antiguo convento de San Diego de Alcalá. Esa relación explica la proximidad entre el templo, el jardín y el recinto escénico, que hoy comparten uno de los rincones más reconocibles del centro.',
        ],
      },
      {
        heading: 'Cómo visitarlo desde el teatro',
        paragraphs: [
          'Desde la puerta del Teatro Juárez, el templo está a muy pocos pasos, cruzando el entorno del Jardín de la Unión. Es una parada natural dentro de cualquier recorrido por el centro.',
        ],
        list: [
          'Sal del teatro y atraviesa el entorno del Jardín de la Unión.',
          'Observa la relación entre el templo, el jardín y la fachada del teatro.',
          'Comprueba el horario de culto o de visita antes de entrar.',
        ],
        note:
          'Es un templo en uso: los horarios pueden depender de las celebraciones religiosas. No publicamos horarios fijos porque no los hemos verificado; confírmalos en el lugar.',
      },
      {
        heading: 'Un punto para la fotografía',
        paragraphs: [
          'La combinación del templo, el jardín y el teatro ofrece varias composiciones. Al atardecer, la luz sobre la fachada del teatro y el entorno del templo resulta especialmente atractiva.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Dónde está el Templo de San Diego respecto al Teatro Juárez?',
        a: 'Está en el mismo entorno, junto al Jardín de la Unión, a pocos pasos de la fachada del teatro.',
      },
      {
        q: '¿Cuál es el horario del Templo de San Diego?',
        a: 'No hemos verificado un horario de visita vigente. Al ser un templo en uso, depende de las celebraciones religiosas; conviene comprobarlo en el lugar.',
      },
      {
        q: '¿Cómo se llega al Templo de San Diego desde el Teatro Juárez?',
        a: 'Está a muy pocos pasos, cruzando el entorno del Jardín de la Unión, dentro del mismo conjunto del centro en De Sopena 10.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
    ],
    related: ['jardin-de-la-union', 'que-ver-cerca', 'ruta-centro-historico', 'historia-teatro-juarez'],
    updated: UPDATED,
  },
  {
    slug: 'plaza-de-la-paz',
    group: 'D',
    priority: 'P1',
    title: 'Cómo visitar la Plaza de la Paz desde el Teatro Juárez',
    description:
      'Ruta del Teatro Juárez a la Plaza de la Paz, la plaza principal de Guanajuato, y qué se puede ver en su entorno.',
    h1: 'De la Plaza de la Paz al Teatro Juárez',
    lead:
      'La Plaza de la Paz es la plaza principal de Guanajuato y otro de los grandes nodos del centro. Desde el Teatro Juárez se llega caminando en pocos minutos, subiendo por las calles del casco histórico.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Entorno', value: 'Zona del Jardín de la Unión, en el centro histórico' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'La plaza principal',
        paragraphs: [
          'La Plaza de la Paz concentra buena parte de la vida cívica de la ciudad y está rodeada de edificios históricos, entre ellos la basílica. Es un buen contrapunto al ambiente escénico del Jardín de la Unión.',
        ],
      },
      {
        heading: 'Cómo hacer el recorrido',
        paragraphs: [
          'El trayecto entre el teatro y la plaza se hace a pie y forma parte natural del paseo por el centro. No hay una única ruta: los callejones permiten llegar por distintos caminos.',
        ],
        list: [
          'Sal del Teatro Juárez hacia el Jardín de la Unión.',
          'Sube por las calles del centro en dirección a la plaza.',
          'Detente en los puntos de interés que encuentres por el camino.',
          'Vuelve por un callejón distinto para variar el recorrido.',
        ],
      },
      {
        heading: 'Qué tener en cuenta',
        paragraphs: [
          'Hay pendientes y calles irregulares, y el tráfico peatonal aumenta al atardecer. Si vas a una función en el teatro, calcula el regreso con margen para no llegar con prisa.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto se tarda del Teatro Juárez a la Plaza de la Paz?',
        a: 'Es un recorrido a pie de pocos minutos, pero con pendientes. El tiempo depende de tu ritmo y de las paradas; conviene dejar margen antes de una función.',
      },
      {
        q: '¿Qué hay en la Plaza de la Paz?',
        a: 'Es la plaza principal de Guanajuato, rodeada de edificios históricos y con la basílica en su entorno. Es un punto central para recorrer el casco histórico.',
      },
      {
        q: '¿Se puede ir a pie de la Plaza de la Paz al Teatro Juárez?',
        a: 'Sí. El trayecto se hace a pie por las calles del centro histórico, aunque hay cuestas y calles irregulares.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['ruta-centro-historico', 'que-ver-cerca', 'jardin-de-la-union', 'caminando-centro-historico'],
    updated: UPDATED,
  },
  {
    slug: 'ruta-centro-historico',
    group: 'D',
    priority: 'P0',
    title: 'Ruta a pie por el centro histórico desde el Teatro Juárez',
    description:
      'Ruta a pie por el centro histórico de Guanajuato con el Teatro Juárez como punto de partida: Jardín de la Unión, San Diego, Plaza de la Paz y callejones.',
    h1: 'Ruta a pie por el centro histórico desde el Teatro Juárez',
    lead:
      'Esta ruta toma el Teatro Juárez como origen y encadena puntos céntricos en un recorrido ordenado, para no repetir camino. Las distancias son cortas, pero el desnivel de Guanajuato hace que convenga tomárselo con calma.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Radio', value: 'Todo el recorrido transcurre en el centro histórico de Guanajuato' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'Cómo está pensada la ruta',
        paragraphs: [
          'La idea es empezar en el teatro y avanzar hacia el interior del centro, dejando la vuelta como un paseo distinto. Es una ruta flexible: puedes detenerte o acortarla en cualquier punto.',
        ],
        list: [
          'Inicio: Teatro Juárez, en De Sopena 10.',
          'Primer tramo: Jardín de la Unión y su entorno.',
          'Segundo tramo: Templo de San Diego y edificios históricos contiguos.',
          'Tercer tramo: subida hacia la Plaza de la Paz.',
          'Cierre: regreso por un callejón distinto hasta el teatro.',
        ],
      },
      {
        heading: 'Tiempo y esfuerzo',
        paragraphs: [
          'El recorrido se completa en poco tiempo si no haces paradas largas, pero las cuestas y las escaleras suman esfuerzo. Con calzado cómodo y sin prisa, es un paseo cómodo incluso para un rato corto.',
          'Marcamos tiempos orientativos como sugerencia editorial, no como datos oficiales: cada persona camina a un ritmo distinto y el centro puede estar muy concurrido.',
        ],
      },
      {
        heading: 'Recomendaciones prácticas',
        paragraphs: [
          'Hidratación en días soleados, abrigo por la noche y atención al pavimento irregular. Si vas a una función, programa la ruta para terminar en el teatro con antelación.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto dura esta ruta por el centro?',
        a: 'Depende de las paradas. Como sugerencia editorial, permite entre una y dos horas sin detenerse demasiado, pero es una estimación, no un dato oficial.',
      },
      {
        q: '¿Es apta para personas con movilidad reducida?',
        a: 'Hay cuestas y escaleras. Conviene planear una ruta adaptada y confirmar los accesos; consulta también la página de accesibilidad de esta guía.',
      },
      {
        q: '¿Dónde empieza la ruta?',
        a: 'La ruta empieza en el Teatro Juárez, en De Sopena 10, en el centro histórico, y avanza hacia el interior del centro.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['jardin-de-la-union', 'templo-san-diego', 'plaza-de-la-paz', 'teatro-juarez-callejon-beso'],
    updated: UPDATED,
  },
  {
    slug: 'teatro-juarez-pipila',
    group: 'D',
    priority: 'P1',
    title: 'Del Teatro Juárez al Monumento al Pípila',
    description:
      'Cómo ir del Teatro Juárez al Monumento al Pípila, el mirador clásico de Guanajuato, y qué esperar del ascenso y de las vistas.',
    h1: 'Del Teatro Juárez al Monumento al Pípila',
    lead:
      'El Monumento al Pípila es el mirador más conocido de Guanajuato y ofrece una vista panorámica de la ciudad. Desde el Teatro Juárez se puede subir caminando o utilizando el funicular, según el punto de acceso y la disponibilidad del servicio.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Entorno', value: 'Zona del Jardín de la Unión, en el centro histórico' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'Qué es el Pípila',
        paragraphs: [
          'El monumento se alza sobre un cerro y conmemora a una figura popular de la historia local. Su valor práctico para el visitante es la panorámica: desde arriba se entiende la forma del valle y el trazado del centro.',
        ],
      },
      {
        heading: 'Cómo subir',
        paragraphs: [
          'Existen al menos dos vías habituales: subir caminando por las calles y escaleras del cerro, o usar el funicular si está en servicio. La opción a pie implica desnivel considerable.',
        ],
        list: [
          'A pie: implica subida y escaleras; requiere calzado adecuado.',
          'Funicular: servicio sujeto a horario y disponibilidad; confírmalo antes de contar con él.',
          'Transporte hasta un punto cercano y último tramo a pie.',
        ],
        note:
          'No publicamos horarios ni tarifas del funicular porque no los hemos verificado. Comprueba su funcionamiento el mismo día.',
      },
      {
        heading: 'Cuándo ir',
        paragraphs: [
          'El mirador es popular al atardecer. Eso significa más gente y, de noche, un descenso con poca luz en los tramos a pie. Si subes caminando, valora hacerlo con luz y bajar antes del anochecer o con precaución.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Se puede subir al Pípila caminando desde el Teatro Juárez?',
        a: 'Sí, aunque implica subida y escaleras. También existe la opción del funicular, sujeto a horario y disponibilidad que debes confirmar el mismo día.',
      },
      {
        q: '¿Cuánto se tarda en subir al Pípila?',
        a: 'Varía según la ruta y el ritmo, y no publicamos una duración fija. Conviene reservar tiempo y evitar el descenso a pie con poca luz.',
      },
      {
        q: '¿Se puede usar el funicular para subir al Pípila?',
        a: 'Sí, existe la opción del funicular, pero está sujeto a horario y disponibilidad; confírmalo antes de contar con él. También se puede subir a pie.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['que-ver-cerca', 'ruta-centro-historico', 'fotografia', 'itinerario-medio-dia'],
    updated: UPDATED,
  },
  {
    slug: 'teatro-juarez-callejon-beso',
    group: 'D',
    priority: 'P1',
    title: 'Del Teatro Juárez al Callejón del Beso',
    description:
      'Cómo ir del Teatro Juárez al Callejón del Beso, uno de los pasajes más famosos de Guanajuato, y qué esperar de la visita.',
    h1: 'Del Teatro Juárez al Callejón del Beso',
    lead:
      'El Callejón del Beso es uno de los rincones más conocidos de Guanajuato: un pasaje muy estrecho en el que dos balcones casi se tocan. Desde el Teatro Juárez se llega caminando por el centro, subiendo por los callejones.',
    facts: [
      { label: 'Punto de partida', value: 'Teatro Juárez, De Sopena 10, Centro' },
      { label: 'Radio', value: 'Todo el recorrido transcurre en el centro histórico de Guanajuato' },
      { label: 'Terreno', value: 'El centro tiene cuestas, escaleras y callejones estrechos' },
      { label: 'Advertencia', value: 'Los horarios y condiciones de los lugares cercanos cambian; confírmalos antes de ir' },
    ],
    sections: [
      {
        heading: 'Qué es el Callejón del Beso',
        paragraphs: [
          'Se trata de un callejón especialmente angosto, famoso por la cercanía de dos balcones enfrentados. Es un punto muy visitado y, por su estrechez, se llena con facilidad.',
          'El interés principal es la propia configuración del pasaje y la atmósfera del entorno, más que un recorrido largo.',
        ],
      },
      {
        heading: 'Cómo llegar desde el teatro',
        paragraphs: [
          'El trayecto se hace a pie, ascendiendo por los callejones del centro. No hay una única ruta y los pasajes se cruzan entre sí, así que conviene orientarse con el mapa.',
        ],
        list: [
          'Sal del Teatro Juárez hacia el centro histórico.',
          'Asciende por los callejones en dirección al pasaje.',
          'Consulta el mapa si dudas: hay varios cruces posibles.',
          'Evita las horas de mayor afluencia si quieres verlo con calma.',
        ],
      },
      {
        heading: 'Qué tener en cuenta',
        paragraphs: [
          'Es un punto turístico muy concurrido, con escaleras y desniveles en el acceso. Si vas con prisa hacia una función, calcula el tiempo de regreso con margen.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto se tarda del Teatro Juárez al Callejón del Beso?',
        a: 'Es un recorrido a pie por el centro, con subida por callejones. El tiempo depende de tu ritmo y de la afluencia; conviene dejarlo como paseo, no como trayecto cronometrado.',
      },
      {
        q: '¿Hay que pagar para ver el Callejón del Beso?',
        a: 'El callejón es un pasaje público del centro histórico. Cualquier servicio adicional en el entorno es independiente y de terceros.',
      },
      {
        q: '¿Cómo se llega al Callejón del Beso desde el Teatro Juárez?',
        a: 'Se llega a pie, subiendo por los callejones del centro histórico desde el Teatro Juárez, en De Sopena 10. Conviene orientarse con el mapa.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['ruta-centro-historico', 'que-ver-cerca', 'teatro-juarez-pipila', 'plaza-de-la-paz'],
    updated: UPDATED,
  },
];
