import type { Guide } from './types';

const UPDATED = '2026-11-04';

export const groupA: Guide[] = [
  {
    slug: 'visitar-teatro-juarez',
    group: 'A',
    priority: 'P0',
    hasEn: true,
    title: 'Cómo visitar el Teatro Juárez de Guanajuato',
    description:
      '¿Se puede entrar al Teatro Juárez? Diferencia entre visitar el edificio y asistir a una función, qué esperar del acceso y cómo confirmar la visita del día.',
    h1: 'Cómo visitar el Teatro Juárez de Guanajuato',
    lead:
      'Sí: el Teatro Juárez es un recinto en activo y, cuando la programación lo permite, se puede entrar a conocerlo sin asistir a una función. El acceso depende de los ensayos, los montajes y los eventos del día, así que conviene tratarlo como una visita que se confirma sobre la marcha y no como un monumento con horario fijo garantizado.',
    facts: [
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
      { label: 'Sede', value: 'Festival Internacional Cervantino' },
      { label: 'Acceso', value: 'Confírmalo el día de la visita por los canales oficiales' },
    ],
    sections: [
      {
        heading: 'Visitar el edificio o asistir a una función',
        paragraphs: [
          'Son dos experiencias distintas y se pagan por separado. La visita al edificio permite conocer el vestíbulo, la sala y la decoración; una función, en cambio, requiere un boleto para una fecha y una localidad concretas. No existe un pase único que cubra ambos supuestos.',
          'Si tu interés principal es la arquitectura y el interior, busca la modalidad de visita. Si quieres ver un espectáculo, revisa primero la cartelera y después las condiciones del evento.',
        ],
      },
      {
        heading: 'Por qué el acceso cambia de un día a otro',
        paragraphs: [
          'El teatro sigue funcionando como sede de ópera, conciertos, danza y teatro, además de ser un espacio central del Festival Internacional Cervantino. Los ensayos, el montaje de escenografía y los eventos privados pueden interrumpir el paso del público.',
          'Por eso no publicamos un horario de visitas recurrente: no hemos podido verificar uno vigente al 4 de noviembre de 2026, y la ficha de Google Maps consultada no mostraba horarios. Publicar una franja fija sería inventar certeza que no existe.',
        ],
        note:
          'Regla de oro: confirma el acceso el mismo día, antes de desplazarte, con los canales oficiales del recinto.',
      },
      {
        heading: 'Cómo confirmar la visita del día',
        paragraphs: [
          'El teléfono listado en la ficha oficial del recinto es +52 473 732 2521. También puedes revisar la página de Cultura Guanajuato y la del recinto dentro del Festival Cervantino para ver si hay actividad programada.',
        ],
        list: [
          'Llama o consulta los canales oficiales la misma mañana de tu visita.',
          'Comprueba si hay función o montaje: reduce o elimina la ventana de visita.',
          'Pregunta si el acceso incluye la sala o solo áreas concretas.',
          'Confirma el método de pago y las tarifas vigentes ese día.',
        ],
      },
      {
        heading: 'Cuánto tiempo conviene reservar',
        paragraphs: [
          'Sugerencia editorial (no un dato del recinto): si el acceso está abierto, entre 30 y 45 minutos suelen bastar para recorrer el vestíbulo y la sala y detenerse en la decoración. Añade tiempo si te interesan los detalles arquitectónicos.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Puedo entrar al Teatro Juárez sin comprar un boleto de función?',
        a: 'Cuando la programación lo permite, sí: existe una modalidad de visita al edificio, independiente de las entradas para espectáculos. La disponibilidad varía por día y debe confirmarse con el recinto.',
      },
      {
        q: '¿El Teatro Juárez tiene horario de visitas todos los días?',
        a: 'No hemos verificado un horario recurrente vigente al 4 de noviembre de 2026. El acceso para visitas depende de ensayos, montajes y funciones, por lo que se confirma el mismo día con los canales oficiales.',
      },
      {
        q: '¿Cuánto tiempo necesito para la visita?',
        a: 'Como referencia editorial, entre 30 y 45 minutos para el vestíbulo y la sala. Es una estimación de esta guía, no un dato oficial del recinto.',
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
    related: ['teatro-juarez-por-dentro', 'precio-entrada', 'como-llegar', 'horarios'],
    updated: UPDATED,
  },
  {
    slug: 'teatro-juarez-por-dentro',
    group: 'A',
    priority: 'P0',
    hasEn: true,
    title: 'Teatro Juárez por dentro: qué se puede visitar',
    description:
      'Qué ver dentro del Teatro Juárez: vestíbulo, sala principal, decoración neomudéjar y telón histórico. Qué zonas suelen abrirse al público y cuáles pueden estar restringidas.',
    h1: 'Teatro Juárez por dentro: qué se puede ver',
    lead:
      'El interior del Teatro Juárez sorprende por el contraste: la fachada es clasicista y severa, mientras el vestíbulo y la sala despliegan una decoración historicista de inspiración hispanomusulmana. Eso es lo que se busca ver por dentro, siempre que el acceso esté abierto ese día.',
    facts: [
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
      { label: 'Pórtico', value: 'Doce columnas y balaustrada con ocho musas de bronce' },
      { label: 'Telón', value: 'Telón del artista francés Labasta' },
      { label: 'Arquitectos', value: 'José Noriega (inicio de las obras) y Antonio Rivas Mercado (conclusión)' },
    ],
    sections: [
      {
        heading: 'El contraste entre fuera y dentro',
        paragraphs: [
          'Desde la calle domina un pórtico de doce columnas y una balaustrada coronada por ocho musas de bronce. Al cruzar el umbral, el lenguaje cambia: arcos, lacerías y motivos geométricos construyen un ambiente muy distinto.',
          'Esa tensión entre dos lenguajes es una de las razones por las que el edificio se estudia como ejemplo de arquitectura ecléctica de finales del siglo XIX y principios del XX.',
        ],
      },
      {
        heading: 'Qué suele poder verse',
        paragraphs: [
          'Las zonas que habitualmente forman parte del recorrido de visita son el vestíbulo, la escalera y la sala principal, con su decoración y su mobiliario histórico.',
        ],
        list: [
          'Vestíbulo y escalera: primer contacto con la decoración interior.',
          'Sala principal: arcos, lacerías y motivos geométricos de raíz hispanomusulmana.',
          'Telón histórico: la decoración del recinto incluye un telón realizado por el artista francés Labasta.',
          'Detalles del mobiliario y de la carpintería histórica, cuando están visibles.',
        ],
      },
      {
        heading: 'Qué puede estar restringido',
        paragraphs: [
          'Los camerinos, las áreas técnicas, el escenario y los espacios de trabajo no forman parte del recorrido público y suelen permanecer cerrados. Durante montajes o funciones, también pueden cerrarse partes de la sala.',
          'No describimos fotografías históricas como si fueran el estado actual del edificio: la decoración ha pasado por intervenciones y el acceso real depende de la actividad del día.',
        ],
      },
      {
        heading: 'Cómo organizar la visita interior',
        paragraphs: [
          'Confirma primero que hay acceso al edificio ese día y pregunta si la sala está incluida. Si tu interés es la fotografía, revisa antes las condiciones para uso de cámara, que pueden variar según el evento.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Se puede ver la sala principal del Teatro Juárez?',
        a: 'Cuando el acceso está abierto, la sala principal suele formar parte del recorrido. Durante montajes y funciones puede restringirse; conviene preguntar el mismo día.',
      },
      {
        q: '¿Se pueden visitar los camerinos o el escenario?',
        a: 'Los camerinos y las áreas técnicas no forman parte del recorrido público habitual. Su apertura, si existe, depende de actividades especiales organizadas por el recinto.',
      },
      {
        q: '¿Puedo tomar fotografías dentro?',
        a: 'Depende del evento y del día. Pregunta al personal antes de fotografiar y respeta las indicaciones; en funciones suele haber restricciones.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
      {
        label: 'Festival Internacional Cervantino · Recinto Teatro Juárez',
        href: 'https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es',
        external: true,
      },
    ],
    related: ['interior-y-decoracion', 'visitar-teatro-juarez', 'boletos', 'fotografia', 'horarios'],
    updated: UPDATED,
  },
  {
    slug: 'visitas-guiadas',
    group: 'A',
    priority: 'P1',
    title: 'Visitas guiadas al Teatro Juárez: qué preguntar',
    description:
      'Cómo funciona una visita guiada al Teatro Juárez: qué buscar, qué preguntar antes de reservar y qué no se puede prometer cuando no hay horario oficial verificado.',
    h1: 'Visitas guiadas al Teatro Juárez',
    lead:
      'Una visita guiada añade contexto histórico y arquitectónico a lo que se ve a simple vista. No hemos verificado un calendario oficial y estable de visitas guiadas al 4 de noviembre de 2026, así que lo prudente es comprobar disponibilidad con el recinto antes de contar con ella.',
    facts: [
      { label: 'Arquitectos', value: 'José Noriega (inicio de las obras) y Antonio Rivas Mercado (conclusión)' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
    ],
    sections: [
      {
        heading: 'Qué aporta una visita guiada',
        paragraphs: [
          'Sin guía, el interior se disfruta por su impacto visual. Con guía, se entiende la secuencia constructiva del edificio, el papel de sus autores y el significado de elementos como las ocho musas o la decoración de la sala.',
        ],
      },
      {
        heading: 'Preguntas útiles antes de reservar',
        paragraphs: [
          'Si encuentras una visita guiada anunciada, conviene aclarar estos puntos para evitar sorpresas.',
        ],
        list: [
          '¿Quién la organiza: el recinto, una institución cultural o un operador privado?',
          '¿Qué idiomas ofrece y con cuánta antelación hay que reservar?',
          '¿Incluye la sala principal y qué zonas quedan fuera?',
          '¿Cuánto dura y cuál es el punto de encuentro?',
          '¿Qué ocurre si ese día hay función o montaje?',
        ],
      },
      {
        heading: 'Cuidado con los anuncios de terceros',
        paragraphs: [
          'Junto al teatro pueden aparecer ofertas de recorridos comerciales que se anuncian como visitas al recinto. Son productos independientes y no implican acceso garantizado al interior del edificio ni representan al teatro.',
          'Esta guía no vende ni reserva visitas. Si una oferta promete entrar a la sala en un horario concreto, pide detalles por escrito antes de pagar.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Hay visitas guiadas todos los días en el Teatro Juárez?',
        a: 'No hemos verificado un calendario oficial y estable al 4 de noviembre de 2026. La disponibilidad depende del recinto y de su programación, y debe confirmarse directamente.',
      },
      {
        q: '¿Una visita guiada garantiza entrar a la sala?',
        a: 'No necesariamente. Aunque muchas visitas incluyen la sala, el acceso puede limitarse por montajes o funciones. Conviene confirmar el contenido antes de reservar.',
      },
      {
        q: '¿Qué aporta una visita guiada frente a recorrer el teatro por libre?',
        a: 'Con guía se entiende la secuencia constructiva del edificio, el papel de sus autores y el significado de elementos como las ocho musas o la decoración de la sala; sin guía, el interior se disfruta sobre todo por su impacto visual.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
    ],
    related: ['visitar-teatro-juarez', 'teatro-juarez-por-dentro', 'precio-entrada', 'horarios'],
    updated: UPDATED,
  },
  {
    slug: 'precio-entrada',
    group: 'A',
    priority: 'P0',
    title: 'Cuánto cuesta entrar al Teatro Juárez',
    description:
      'Qué se sabe del costo de visitar el Teatro Juárez, la diferencia con el precio de una función y por qué ninguna tarifa debe tomarse como definitiva sin verificar.',
    h1: 'Cuánto cuesta entrar al Teatro Juárez',
    lead:
      'La admisión para visitar el edificio no es lo mismo que el precio de una localidad para una función. El catálogo oficial de pagos en línea del Gobierno de Guanajuato, consultado en octubre de 2026, listaba visita general en 62 MXN y visita preferente en 47 MXN, pero esa cifra debe confirmarse antes de pagar.',
    facts: [
      { label: 'Tarifa de visita', value: 'Visita general 62 MXN; preferente 47 MXN' },
      { label: 'Acceso', value: 'Confírmalo el día de la visita por los canales oficiales' },
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
    ],
    sections: [
      {
        heading: 'Dos precios que no deben confundirse',
        paragraphs: [
          'Existe una tarifa de admisión por visitar el edificio. Y existe, aparte, el precio de cada espectáculo, que fija el organizador según el evento y la localidad. Mezclarlos lleva a expectativas equivocadas.',
          'Una tarifa de visita publicada no incluye asiento en una función, y un boleto de función no equivale a una entrada de visita.',
        ],
      },
      {
        heading: 'Lo que muestra el catálogo oficial',
        paragraphs: [
          'El catálogo de pagos en línea del Gobierno del Estado de Guanajuato incluye conceptos de visita al Teatro Juárez. Al consultarlo en octubre de 2026 aparecían 62 MXN para visita general y 47 MXN para visita preferente.',
        ],
        note:
          'Verifica vigencia, elegibilidad y disponibilidad el día de tu visita. Las tarifas y sus condiciones pueden cambiar, y no son precios de espectáculos.',
      },
      {
        heading: 'Qué preguntar antes de pagar',
        paragraphs: [
          'Estas comprobaciones evitan pagar por un acceso que no está disponible o por una categoría que no te corresponde.',
        ],
        list: [
          '¿La tarifa de visita sigue vigente hoy?',
          '¿Quién puede acceder a la tarifa preferente (estudiantes, docentes, adultos mayores, etc.)?',
          '¿La visita está disponible ese día o hay función?',
          '¿Cómo se paga: taquilla, catálogo en línea u otro canal?',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la entrada al Teatro Juárez?',
        a: 'El catálogo oficial consultado en octubre de 2026 listaba 62 MXN la visita general y 47 MXN la preferente. Son tarifas sujetas a cambio y a verificación; este sitio no las garantiza.',
      },
      {
        q: '¿Ese precio incluye un espectáculo?',
        a: 'No. Es una tarifa de admisión por visita al edificio. Las funciones tienen precios propios definidos por el organizador según el evento y la localidad.',
      },
      {
        q: '¿Cómo se paga la visita al Teatro Juárez?',
        a: 'El catálogo de pagos en línea del Gobierno del Estado de Guanajuato incluye conceptos de visita al Teatro Juárez. Conviene confirmar el canal de pago vigente ese día: taquilla, catálogo en línea u otro.',
      },
    ],
    sources: [
      {
        label: 'Catálogo de pagos en línea de Guanajuato · visitas',
        href: 'https://pagosenlinea.guanajuato.gob.mx/catalogo?tema=T027',
        external: true,
      },
      {
        label: 'Festival Internacional Cervantino · Reglamento de taquilla',
        href: 'https://festivalcervantino.gob.mx/20260720/reglamento-taquilla/',
        external: true,
      },
    ],
    related: ['boletos', 'comprar-boletos-funciones', 'visitar-teatro-juarez', 'horarios'],
    updated: UPDATED,
  },
  {
    slug: 'comprar-boletos-funciones',
    group: 'A',
    priority: 'P0',
    title: 'Cómo comprar boletos para una función del Teatro Juárez',
    description:
      'Pasos para comprar entradas de una función en el Teatro Juárez: dónde buscar el evento, qué comprobar antes de pagar y cómo evitar intermediarios.',
    h1: 'Cómo comprar boletos para una función',
    lead:
      'Para una función, el punto de partida es la ficha oficial del evento, no una búsqueda genérica de "boletos Teatro Juárez". Cada espectáculo publica su propia fecha, su localidad y su canal de venta. Esta guía no vende entradas y no puede confirmar disponibilidad.',
    facts: [
      { label: 'Tarifa de visita', value: 'Visita general 62 MXN; preferente 47 MXN' },
      { label: 'Acceso', value: 'Confírmalo el día de la visita por los canales oficiales' },
      { label: 'Sede', value: 'Festival Internacional Cervantino' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
    ],
    sections: [
      {
        heading: 'Primero localiza el evento correcto',
        paragraphs: [
          'Comprueba el año y la fecha completa del espectáculo, no solo el mes. Las fichas oficiales pueden seguir publicadas después de la función, y una lista visible no demuestra que el evento sea futuro.',
          'La cartelera del recinto dentro del Festival Internacional Cervantino y los canales de Cultura Guanajuato son los puntos de partida habituales.',
        ],
      },
      {
        heading: 'Comprobaciones antes de pagar',
        paragraphs: [
          'Una compra segura empieza por confirmar que estás en el canal correcto.',
        ],
        list: [
          'Fecha y año exactos del evento, y edición del festival si aplica.',
          'Recinto, hora y localidad o zona.',
          'Canal de venta oficial indicado por el organizador.',
          'Condiciones de descuento y si siguen vigentes.',
          'Política de cambios, devoluciones y acceso con retraso.',
        ],
      },
      {
        heading: 'Cómo evitar intermediarios',
        paragraphs: [
          'Compra siempre por la vía que indique el organizador. Si un sitio de reventa promete disponibilidad cuando la taquilla no la muestra, trátalo con cautela.',
          'Guarda el comprobante y revisa las condiciones de entrada: algunos espectáculos piden llegar con antelación o limitan el acceso una vez iniciada la función.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Dónde se compran los boletos del Teatro Juárez?',
        a: 'Cada evento indica su propio canal de venta. Normalmente se gestiona a través del organizador, el recinto y los canales oficiales de Cultura Guanajuato o del festival correspondiente.',
      },
      {
        q: '¿Puedo comprar en la taquilla el mismo día?',
        a: 'Puede ocurrir, pero depende del evento y de la disponibilidad. No es una garantía y, en espectáculos con alta demanda, es preferible asegurar la entrada con antelación por el canal oficial.',
      },
      {
        q: '¿Qué hago si un sitio de reventa muestra entradas que la taquilla no ofrece?',
        a: 'Compra siempre por la vía que indique el organizador y trata con cautela a quien prometa disponibilidad cuando la taquilla no la muestra.',
      },
    ],
    sources: [
      {
        label: 'Festival Internacional Cervantino · Recinto Teatro Juárez',
        href: 'https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es',
        external: true,
      },
      {
        label: 'Festival Internacional Cervantino · Reglamento de taquilla',
        href: 'https://festivalcervantino.gob.mx/20260720/reglamento-taquilla/',
        external: true,
      },
    ],
    related: ['cartelera', 'asientos-y-localidades', 'consejos-para-asistir', 'festival-cervantino'],
    updated: UPDATED,
  },
  {
    slug: 'asientos-y-localidades',
    group: 'A',
    priority: 'P1',
    title: 'Asientos y localidades del Teatro Juárez',
    description:
      'Cómo leer las localidades de una función en el Teatro Juárez: qué suele distinguir a cada zona, por qué la visibilidad varía y qué comprobar antes de elegir asiento.',
    h1: 'Asientos y localidades del Teatro Juárez',
    lead:
      'La sala del Teatro Juárez es un espacio histórico, y eso influye en la experiencia del asiento: hay niveles, palcos y zonas con visibilidad desigual. Cada evento define sus propias localidades y precios, así que la elección se hace sobre el plano que publique el organizador.',
    facts: [
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
      { label: 'Acceso', value: 'Confírmalo el día de la visita por los canales oficiales' },
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
    ],
    sections: [
      {
        heading: 'Cómo suelen organizarse las localidades',
        paragraphs: [
          'En teatros históricos de este tipo es habitual distinguir entre luneta o platea, palcos y niveles superiores. Cada zona tiene un código y un precio propios, indicados por el organizador en el momento de la compra.',
          'Una localidad más barata y más alta o lateral puede ofrecer una vista distinta y, en algunas funciones, parcial. No es necesariamente peor: depende de lo que quieras ver y del tipo de espectáculo.',
        ],
      },
      {
        heading: 'Qué comprobar antes de elegir',
        paragraphs: [
          'El plano y la nomenclatura cambian de un evento a otro, por lo que conviene leer la información oficial de cada función.',
        ],
        list: [
          'Nombre exacto de la localidad y su ubicación en el plano.',
          'Si la visibilidad es total o parcial.',
          'Si el asiento es numerado o de acceso general.',
          'Requisitos de acceso para las zonas superiores.',
        ],
      },
      {
        heading: 'Accesibilidad y ubicación',
        paragraphs: [
          'La disposición histórica del edificio hace que la experiencia varíe mucho entre zonas. Si necesitas movilidad reducida, condiciones especiales o un asiento con espacio adicional, plantéalo al organizador antes de comprar.',
          'Consulta la página de accesibilidad de esta guía para saber qué se conoce y qué debe confirmarse con el recinto.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Qué localidad conviene en el Teatro Juárez?',
        a: 'Depende del espectáculo y de tus preferencias. Cada evento publica su propio plano y precios; revisa la visibilidad indicada para cada zona antes de elegir.',
      },
      {
        q: '¿Hay asientos con visibilidad parcial?',
        a: 'En recintos históricos es posible. Si el organizador no lo indica, pregúntalo antes de comprar, sobre todo en zonas laterales o superiores.',
      },
      {
        q: '¿Qué zonas de localidad suelen distinguirse en la sala?',
        a: 'En teatros históricos de este tipo es habitual distinguir entre luneta o platea, palcos y niveles superiores. Antes de elegir, comprueba el nombre exacto de la localidad, su ubicación en el plano, si la visibilidad es total o parcial, si el asiento es numerado o de acceso general y los requisitos de las zonas superiores.',
      },
    ],
    sources: [
      {
        label: 'Festival Internacional Cervantino · Recinto Teatro Juárez',
        href: 'https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es',
        external: true,
      },
    ],
    related: ['comprar-boletos-funciones', 'accesibilidad', 'consejos-para-asistir', 'cartelera'],
    updated: UPDATED,
  },
  {
    slug: 'consejos-para-asistir',
    group: 'A',
    priority: 'P1',
    title: 'Consejos para asistir a una función en el Teatro Juárez',
    description:
      'Cómo preparar una noche de función en el Teatro Juárez: hora de llegada, qué evitar, etiqueta y cómo planear la salida del centro histórico.',
    h1: 'Consejos para asistir a una función',
    lead:
      'Asistir a una función en el Teatro Juárez es también una experiencia urbana: el edificio está en el centro histórico de Guanajuato, una zona de calles estrechas y tráfico limitado. Preparar la llegada y la salida mejora igual que elegir bien el asiento.',
    facts: [
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
      { label: 'Acceso', value: 'Confírmalo el día de la visita por los canales oficiales' },
      { label: 'Sede', value: 'Festival Internacional Cervantino' },
    ],
    sections: [
      {
        heading: 'Llega con margen',
        paragraphs: [
          'El centro histórico se recorre a pie y las distancias entre estacionamientos, calles peatonales y el teatro pueden alargar el trayecto. Llegar con tiempo permite encontrar el acceso, ubicar tu localidad y evitar entrar cuando la función ya empezó.',
          'Muchas salas restringen el acceso una vez iniciado el espectáculo. Confirma la política del evento que hayas elegido.',
        ],
      },
      {
        heading: 'Antes de la función',
        paragraphs: [
          'Revisa las condiciones de tu boleto y ten a mano el comprobante. En eventos del festival pueden aplicarse reglas específicas de acceso y de descuentos.',
        ],
        list: [
          'Confirma puerta de acceso y horario de apertura.',
          'Resuelve la cena o el café antes: consulta la guía de dónde comer cerca.',
          'Comprueba si hay restricciones de cámara o de teléfono durante el espectáculo.',
          'Ten previsto el regreso, sobre todo si la función termina de noche.',
        ],
      },
      {
        heading: 'Durante y después',
        paragraphs: [
          'El respeto al espectáculo y al público forma parte de la experiencia: silencia el teléfono y evita fotografiar durante la función si está prohibido. Al terminar, el centro se llena de gente y la salida es más lenta; preverlo evita prisas.',
          'Si necesitas regresar a tu alojamiento o al estacionamiento, revisa la ruta a la luz del día para reconocerla luego de noche.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Con cuánta antelación conviene llegar a una función?',
        a: 'Depende del evento, pero el centro histórico se recorre a pie y las distancias pueden alargarse. Llegar con antelación evita perder el acceso y permite ubicar la localidad con calma.',
      },
      {
        q: '¿Se puede entrar si la función ya comenzó?',
        a: 'No es seguro. Muchas salas restringen el acceso una vez iniciado el espectáculo. Consulta la política del evento concreto antes de asistir.',
      },
      {
        q: '¿Qué se recomienda sobre el teléfono y las fotografías durante la función?',
        a: 'El respeto al espectáculo y al público forma parte de la experiencia: silencia el teléfono y evita fotografiar durante la función si está prohibido.',
      },
    ],
    sources: [
      {
        label: 'Festival Internacional Cervantino · Reglamento de taquilla',
        href: 'https://festivalcervantino.gob.mx/20260720/reglamento-taquilla/',
        external: true,
      },
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
    ],
    related: ['asientos-y-localidades', 'donde-comer-cerca', 'teatro-juarez-de-noche', 'como-llegar'],
    updated: UPDATED,
  },
  {
    slug: 'accesibilidad',
    group: 'A',
    priority: 'P1',
    title: 'Accesibilidad del Teatro Juárez: lo que debe confirmarse',
    description:
      'Qué se conoce sobre la accesibilidad del Teatro Juárez tras su intervención y qué condiciones deben verificarse con el recinto antes de una visita.',
    h1: 'Accesibilidad del Teatro Juárez',
    lead:
      'El Teatro Juárez es un edificio histórico, pero ha pasado por intervenciones de conservación y modernización. Los boletines oficiales del Gobierno de Guanajuato sobre los 120 años del recinto mencionan mejoras de accesibilidad; sin embargo, las condiciones concretas deben confirmarse con el recinto antes de tu visita.',
    facts: [
      { label: 'Restauración 2022–2023', value: 'Añadió ascensor, salvaescaleras y espacios para sillas de ruedas' },
      { label: 'Reapertura del 120 aniversario', value: '27 de octubre de 2023' },
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Teléfono del recinto', value: '+52 473 732 2521' },
    ],
    sections: [
      {
        heading: 'Qué indican las fuentes oficiales',
        paragraphs: [
          'Con motivo del 120.º aniversario del teatro, el Gobierno del Estado de Guanajuato difundió información sobre los trabajos de conservación y puesta en valor. Entre las mejoras citadas aparecen elementos de accesibilidad como elevador, plataforma para escaleras y espacios para sillas de ruedas.',
          'Se trata de referencias institucionales sobre la intervención, no de una garantía de que todos los servicios estén operativos ni de las condiciones de cada evento.',
        ],
      },
      {
        heading: 'Qué debe confirmarse antes de ir',
        paragraphs: [
          'La accesibilidad práctica depende del día, del evento y de la ruta de acceso disponible. Estas preguntas ayudan a planear.',
        ],
        list: [
          '¿Cuál es el acceso sin escalones y cómo se llega a él desde la calle?',
          '¿El elevador o la plataforma están operativos y disponibles para el público?',
          '¿Hay localidades reservadas para sillas de ruedas y acompañante?',
          '¿Se requiere aviso o reserva previa?',
          '¿Hay aseos accesibles y dónde se ubican?',
        ],
      },
      {
        heading: 'El entorno también cuenta',
        paragraphs: [
          'El centro histórico de Guanajuato es una zona de calles estrechas y pendientes. El último tramo hasta la puerta puede ser cuesta arriba, así que conviene planear la ruta y considerar el punto donde te deje el transporte o el estacionamiento.',
          'Ninguna de estas condiciones debe darse por supuesta: confírmalas con el recinto y, si asistes a un evento del festival, con el organizador.',
        ],
      },
    ],
    faq: [
      {
        q: '¿El Teatro Juárez es accesible para sillas de ruedas?',
        a: 'Los boletines oficiales sobre la intervención del recinto mencionan elementos de accesibilidad, como elevador y espacios para sillas de ruedas. La disponibilidad real para una fecha concreta debe confirmarse con el recinto.',
      },
      {
        q: '¿Hay que reservar con antelación por accesibilidad?',
        a: 'Puede ser necesario avisar o reservar, según el evento y la zona elegida. Confírmalo directamente con el recinto o el organizador antes de comprar.',
      },
      {
        q: '¿Cuándo se realizó la intervención de accesibilidad del Teatro Juárez?',
        a: 'Los trabajos se difundieron con motivo del 120.º aniversario del teatro, cuya reapertura se produjo el 27 de octubre de 2023. Son referencias institucionales; las condiciones concretas deben confirmarse con el recinto.',
      },
    ],
    sources: [
      {
        label: 'Gobierno de Guanajuato · 120 años del Teatro Juárez',
        href: 'https://boletines.guanajuato.gob.mx/2023/10/27/cumple-120-anos-el-majestuoso-teatro-juarez-de-guanajuato/',
        external: true,
      },
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
    ],
    related: ['visitar-teatro-juarez', 'asientos-y-localidades', 'visita-adultos-mayores', 'horarios'],
    updated: UPDATED,
  },
];
