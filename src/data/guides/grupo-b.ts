import type { Guide } from './types';

const UPDATED = '2026-11-04';

export const groupB: Guide[] = [
  {
    slug: 'como-llegar',
    group: 'B',
    priority: 'P0',
    hasEn: true,
    title: 'Cómo llegar al Teatro Juárez de Guanajuato',
    description:
      'Opciones para llegar al Teatro Juárez, en el centro histórico de Guanajuato: a pie, en transporte público, en auto y desde la terminal de autobuses o el aeropuerto.',
    h1: 'Cómo llegar al Teatro Juárez de Guanajuato',
    lead:
      'El Teatro Juárez está en De Sopena 10, junto al Jardín de la Unión, en pleno centro histórico de Guanajuato. La buena noticia es que casi todo el centro se recorre a pie; la parte a planear es cómo dejas el vehículo, porque la zona histórica tiene calles estrechas y circulación restringida.',
    facts: [
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Destino', value: 'Teatro Juárez, centro histórico de Guanajuato' },
      { label: 'Acceso al centro', value: 'El centro histórico tiene calles estrechas y desniveles' },
      { label: 'Llegada', value: 'Conviene llegar con margen por las cuestas y callejones del centro' },
    ],
    sections: [
      {
        heading: 'Dónde está exactamente',
        paragraphs: [
          'El recinto se ubica en De Sopena 10, Centro, 36000 Guanajuato, Gto. Su código Plus es 2P8W+5R y puedes abrir la ubicación exacta en Google Maps para trazar la ruta.',
          'Está en el corazón del centro histórico, junto al Jardín de la Unión y frente al conjunto de San Diego, lo que lo convierte en un buen punto de partida para recorrer la ciudad a pie.',
        ],
      },
      {
        heading: 'Cómo llegar a pie',
        paragraphs: [
          'Si ya estás en el centro, llegar caminando suele ser la forma más práctica. Muchas calles son peatonales o de tráfico muy limitado, y los callejones conectan los puntos principales.',
          'Ten en cuenta las pendientes: Guanajuato es una ciudad de cuestas y escaleras, y el último tramo hasta la puerta puede ser en subida. Deja margen de tiempo si vas a una función.',
        ],
      },
      {
        heading: 'En transporte público y desde la llegada',
        paragraphs: [
          'La ciudad cuenta con autobuses urbanos y una terminal de autobuses foráneos en la periferia. Desde ella, y desde los accesos por carretera, se entra al centro en transporte público o taxi y se completa el tramo final a pie.',
          'Si vienes en auto, lo habitual es estacionar en la periferia del centro y continuar a pie; revisa la guía de estacionamiento para entender cómo funciona esa zona.',
        ],
        list: [
          'Caminando: la opción más directa si ya estás en el centro.',
          'Transporte público urbano hasta el centro y último tramo a pie.',
          'Auto: estacionar en la periferia y continuar caminando.',
          'Taxi o transporte por aplicación hasta el punto más cercano permitido.',
        ],
      },
      {
        heading: 'Qué comprobar antes de salir',
        paragraphs: [
          'Los tiempos cambian con el tráfico, los cierres y la programación cultural. No publicamos duraciones fijas porque no podemos garantizarlas; comprueba la ruta en el mapa el mismo día.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Se puede llegar en auto hasta la puerta del Teatro Juárez?',
        a: 'El centro histórico tiene circulación restringida y calles estrechas. Lo habitual es estacionar en la periferia y recorrer el último tramo a pie.',
      },
      {
        q: '¿Cuánto se tarda en llegar caminando por el centro?',
        a: 'Depende del punto de partida y de las pendientes. Es una ciudad de cuestas, así que conviene dejar margen, sobre todo antes de una función.',
      },
      {
        q: '¿Dónde se encuentra exactamente el Teatro Juárez?',
        a: 'Está en De Sopena 10, Centro, 36000 Guanajuato, Gto., junto al Jardín de la Unión, en pleno centro histórico de Guanajuato.',
      },
    ],
    sources: [
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['estacionamiento', 'caminando-centro-historico', 'desde-central-autobuses', 'desde-aeropuerto-bajio'],
    updated: UPDATED,
  },
  {
    slug: 'estacionamiento',
    group: 'B',
    priority: 'P0',
    title: 'Dónde estacionarse cerca del Teatro Juárez',
    description:
      'Cómo funciona el estacionamiento en el centro histórico de Guanajuato cuando vas al Teatro Juárez: por qué se aparca en la periferia y qué comprobar antes de dejar el auto.',
    h1: 'Dónde estacionarse cerca del Teatro Juárez',
    lead:
      'La respuesta honesta es que el centro histórico de Guanajuato no está pensado para aparcar junto al teatro. Es una ciudad de callejones y calles subterráneas con circulación limitada, así que lo normal es dejar el auto en la periferia del centro y llegar a pie. No publicamos una lista de estacionamientos ni tarifas porque no podemos verificarlas todas.',
    facts: [
      { label: 'Destino', value: 'Teatro Juárez, centro histórico de Guanajuato' },
      { label: 'Acceso al centro', value: 'El centro histórico tiene calles estrechas y desniveles' },
      { label: 'Mapa', value: 'Abre la ubicación exacta en Google Maps para trazar la ruta' },
      { label: 'Llegada', value: 'Conviene llegar con margen por las cuestas y callejones del centro' },
    ],
    sections: [
      {
        heading: 'Por qué no hay aparcamiento en la puerta',
        paragraphs: [
          'El centro histórico se organiza en calles estrechas, túneles y pasajes que forman parte de su identidad. La circulación vehicular está limitada y el espacio junto al Jardín de la Unión es esencialmente peatonal.',
          'Por eso, buscar aparcamiento "frente al teatro" suele ser un mal plan: lo razonable es aparcar en el borde del centro y caminar.',
        ],
      },
      {
        heading: 'Cómo funciona en la práctica',
        paragraphs: [
          'Existen estacionamientos públicos y privados en la periferia del centro y en los accesos a la ciudad. La distancia y las condiciones varían, y por eso conviene revisarlos en el mapa el mismo día.',
        ],
        list: [
          'Busca estacionamiento en el borde del centro, no dentro de la zona peatonal.',
          'Comprueba en el mapa la distancia real y el desnivel hasta el teatro.',
          'Verifica el horario de cierre: si vas a una función nocturna, debe seguir abierto a la salida.',
          'Confirma el método de pago y si se paga por hora o por periodo.',
        ],
        note:
          'No verificamos nombres, tarifas ni disponibilidad de estacionamientos concretos al 4 de noviembre de 2026. Cualquier dato de este tipo debe comprobarse antes de confiar en él.',
      },
      {
        heading: 'Alternativa: olvidarse del auto',
        paragraphs: [
          'Si tu plan es recorrer el centro, llegar en transporte público, taxi o transporte por aplicación y moverse a pie suele ser más cómodo que buscar aparcamiento. Para una función nocturna, además, evita el problema de la salida.',
          'Si aun así eliges el auto, calcula tiempo extra: en noches de concierto o durante el festival, el tráfico y la demanda de estacionamiento aumentan.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Hay estacionamiento junto al Teatro Juárez?',
        a: 'No verificamos aparcamientos junto al recinto. El centro histórico tiene circulación restringida y lo habitual es estacionar en la periferia y caminar hasta el teatro.',
      },
      {
        q: '¿Cuánto cuesta estacionarse en el centro de Guanajuato?',
        a: 'No publicamos tarifas porque no podemos verificarlas todas ni su vigencia. Debes confirmar precio y horario directamente con el estacionamiento que elijas.',
      },
      {
        q: '¿Dónde conviene dejar el auto cuando voy al Teatro Juárez?',
        a: 'Lo habitual es estacionar en la periferia del centro y recorrer el último tramo a pie, porque la zona junto al Jardín de la Unión es esencialmente peatonal.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['como-llegar', 'caminando-centro-historico', 'consejos-para-asistir', 'teatro-juarez-de-noche'],
    updated: UPDATED,
  },
  {
    slug: 'desde-central-autobuses',
    group: 'B',
    priority: 'P1',
    title: 'Cómo llegar al Teatro Juárez desde la Central de Autobuses',
    description:
      'Ruta desde la terminal de autobuses foráneos de Guanajuato hasta el Teatro Juárez: transporte al centro y último tramo a pie.',
    h1: 'Cómo llegar al Teatro Juárez desde la Central de Autobuses',
    lead:
      'Si llegas a Guanajuato en autobús foráneo, el teatro queda en el centro histórico, no junto a la terminal. El recorrido tiene dos partes: cubrir la distancia desde la terminal hasta el centro y después caminar el tramo final hasta el Jardín de la Unión.',
    facts: [
      { label: 'Destino', value: 'Teatro Juárez, centro histórico de Guanajuato' },
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Acceso al centro', value: 'El centro histórico tiene calles estrechas y desniveles' },
      { label: 'Llegada', value: 'Conviene llegar con margen por las cuestas y callejones del centro' },
    ],
    sections: [
      {
        heading: 'Dos tramos, no uno',
        paragraphs: [
          'La terminal de autobuses foráneos de Guanajuato se encuentra fuera del casco histórico, en los accesos a la ciudad. Desde ahí no se llega caminando al teatro de forma práctica.',
          'El primer tramo es un traslado corto en taxi, transporte por aplicación o autobús urbano hasta el borde del centro. El segundo se hace a pie, porque la zona histórica está limitada al tráfico.',
        ],
      },
      {
        heading: 'Cómo organizar el traslado',
        paragraphs: [
          'Estas comprobaciones simplifican la llegada, sobre todo si traes equipaje o vas directo a una función.',
        ],
        list: [
          'Pregunta en la terminal por la parada o el servicio hacia el centro.',
          'Confirma con el conductor o el mapa el punto de bajada más cercano al centro.',
          'Desde ahí, sigue las señales hacia el Jardín de la Unión y el Teatro Juárez.',
          'Si llevas maletas, valora un taxi hasta el punto de bajada más próximo y camina solo el último tramo.',
        ],
      },
      {
        heading: 'Qué no prometemos',
        paragraphs: [
          'No publicamos tiempos exactos ni tarifas: dependen del tráfico, del servicio elegido y del día. Comprueba la ruta en el mapa y, si llegas justo antes de una función, deja margen adicional porque el centro puede estar congestionado.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Se puede ir caminando desde la Central de Autobuses al Teatro Juárez?',
        a: 'No es práctico: la terminal está fuera del casco histórico. Lo habitual es un traslado corto hasta el centro y desde allí caminar hasta el teatro.',
      },
      {
        q: '¿Cuánto tarda el trayecto desde la terminal al centro?',
        a: 'Varía según el tráfico y el servicio elegido, por lo que no publicamos una duración fija. Comprueba la ruta el mismo día y deja margen si vas a una función.',
      },
      {
        q: '¿La terminal de autobuses está en el centro histórico?',
        a: 'No: la terminal de autobuses foráneos se encuentra fuera del casco histórico, en los accesos a la ciudad, así que el recorrido tiene dos tramos: traslado al centro y último tramo a pie.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['como-llegar', 'estacionamiento', 'desde-leon', 'caminando-centro-historico'],
    updated: UPDATED,
  },
  {
    slug: 'desde-leon',
    group: 'B',
    priority: 'P1',
    title: 'Cómo llegar al Teatro Juárez desde León',
    description:
      'Cómo plantear el viaje de León a Guanajuato para visitar el Teatro Juárez: por carretera o en autobús, y el tramo final a pie por el centro histórico.',
    h1: 'Cómo llegar al Teatro Juárez desde León',
    lead:
      'León y Guanajuato están relativamente cerca: unos 50 km por carretera. Eso convierte la visita al Teatro Juárez en una excursión de medio día o de un día completo. La clave no es la distancia, sino el último tramo, porque el centro histórico se recorre a pie.',
    facts: [
      { label: 'Destino', value: 'Teatro Juárez, centro histórico de Guanajuato' },
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Acceso al centro', value: 'El centro histórico tiene calles estrechas y desniveles' },
      { label: 'Llegada', value: 'Conviene llegar con margen por las cuestas y callejones del centro' },
    ],
    sections: [
      {
        heading: 'Las opciones habituales',
        paragraphs: [
          'Existen servicios de autobús entre León y Guanajuato, además del viaje en auto particular. En ambos casos se llega a la periferia del centro y se accede caminando a la zona histórica.',
        ],
        list: [
          'Autobús interurbano hasta Guanajuato y traslado al centro.',
          'Auto propio por carretera, con estacionamiento en la periferia.',
          'Taxi o transporte por aplicación para el tramo final, si llevas prisa.',
        ],
      },
      {
        heading: 'Al llegar a Guanajuato',
        paragraphs: [
          'Una vez en la ciudad, el objetivo práctico es llegar al borde del centro histórico y continuar a pie hacia el Jardín de la Unión, donde se encuentra el teatro.',
          'El centro es una zona de cuestas y callejones. Si vienes por la tarde para una función, deja margen para encontrar el acceso y ubicar tu localidad.',
        ],
      },
      {
        heading: 'Qué comprobar antes de salir',
        paragraphs: [
          'Los horarios de los autobuses, el tráfico de la carretera y el estado del centro cambian. No publicamos duraciones fijas; comprueba la ruta el mismo día y, si vas a una función, añade tiempo adicional.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Se puede visitar el Teatro Juárez en una excursión de un día desde León?',
        a: 'Sí, es habitual: la distancia es de unos 50 km por carretera. Conviene reservar tiempo para el tramo a pie por el centro, que es de cuestas y callejones.',
      },
      {
        q: '¿Conviene más el autobús o el auto?',
        a: 'Depende de tu plan. En auto hay que estacionar en la periferia y caminar; en autobús evitas el aparcamiento, pero dependes de los horarios de regreso.',
      },
      {
        q: '¿Dónde se encuentra el Teatro Juárez al llegar desde León?',
        a: 'Está en el centro histórico de Guanajuato, junto al Jardín de la Unión; al llegar conviene situarse en el borde del centro y continuar a pie.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['como-llegar', 'desde-aeropuerto-bajio', 'estacionamiento', 'itinerario-medio-dia'],
    updated: UPDATED,
  },
  {
    slug: 'desde-aeropuerto-bajio',
    group: 'B',
    priority: 'P1',
    title: 'Cómo llegar al Teatro Juárez desde el Aeropuerto del Bajío',
    description:
      'Del Aeropuerto Internacional del Bajío (BJX) al Teatro Juárez de Guanajuato: opciones de traslado a la ciudad y tramo final a pie por el centro.',
    h1: 'Cómo llegar al Teatro Juárez desde el Aeropuerto del Bajío',
    lead:
      'El Aeropuerto Internacional del Bajío (BJX) está en Silao, a unos 30 km de Guanajuato capital. Es la puerta aérea habitual para la ciudad y requiere un traslado por carretera antes de llegar al centro histórico, donde se encuentra el teatro.',
    facts: [
      { label: 'Destino', value: 'Teatro Juárez, centro histórico de Guanajuato' },
      { label: 'Dirección', value: 'De Sopena 10, Centro, 36000 Guanajuato, Gto.' },
      { label: 'Acceso al centro', value: 'El centro histórico tiene calles estrechas y desniveles' },
      { label: 'Llegada', value: 'Conviene llegar con margen por las cuestas y callejones del centro' },
    ],
    sections: [
      {
        heading: 'Del aeropuerto a la ciudad',
        paragraphs: [
          'No hay acceso peatonal práctico desde el aeropuerto al centro de Guanajuato: el aeropuerto está en otro municipio. El primer tramo se hace por carretera, en taxi autorizado, transporte por aplicación o servicio de traslado.',
        ],
        list: [
          'Taxi autorizado del aeropuerto o transporte por aplicación.',
          'Servicio de traslado contratado con antelación.',
          'Alquiler de auto, si vas a moverte por la región.',
        ],
      },
      {
        heading: 'De la llegada al centro al teatro',
        paragraphs: [
          'Al llegar a Guanajuato, el auto o el taxi te dejará en un punto cercano al centro, porque la zona histórica tiene circulación limitada. Desde ahí, el último tramo hacia el Jardín de la Unión y el Teatro Juárez se hace a pie.',
          'Con equipaje, valora dejar las maletas en tu alojamiento antes de ir al teatro: el centro tiene cuestas y escaleras.',
        ],
      },
      {
        heading: 'Qué comprobar',
        paragraphs: [
          'Los tiempos de traslado dependen del tráfico, la hora y la ruta, y no los garantizamos. Si llegas el mismo día de una función, deja un margen amplio entre el aterrizaje y la hora del espectáculo.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuánto está el Aeropuerto del Bajío del Teatro Juárez?',
        a: 'El aeropuerto está en Silao, a unos 30 km de Guanajuato capital. Es necesario un traslado por carretera antes de llegar al centro histórico, que se recorre a pie.',
      },
      {
        q: '¿Se puede ir del aeropuerto al centro en transporte público?',
        a: 'No hay una conexión peatonal ni un servicio directo sencillo al centro. Lo habitual es taxi autorizado, transporte por aplicación o traslado contratado.',
      },
      {
        q: '¿Hasta dónde puede dejarme el taxi o el auto en Guanajuato?',
        a: 'La zona histórica tiene circulación limitada, así que te dejará en un punto cercano al centro y el último tramo hacia el Jardín de la Unión y el Teatro Juárez se hace a pie.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['como-llegar', 'desde-leon', 'estacionamiento', 'itinerario-medio-dia'],
    updated: UPDATED,
  },
  {
    slug: 'caminando-centro-historico',
    group: 'B',
    priority: 'P1',
    title: 'Cómo llegar caminando al Teatro Juárez por el centro histórico',
    description:
      'Recorrido a pie hasta el Teatro Juárez desde puntos habituales del centro de Guanajuato, con qué esperar del desnivel y cómo orientarse.',
    h1: 'Cómo llegar caminando al Teatro Juárez por el centro histórico',
    lead:
      'Guanajuato se entiende caminando. Llegar al Teatro Juárez a pie desde cualquier punto del centro es lo más cómodo, siempre que cuentes con las cuestas: la ciudad está construida en un valle estrecho y los callejones suben y bajan.',
    facts: [
      { label: 'Destino', value: 'Teatro Juárez, centro histórico de Guanajuato' },
      { label: 'Ubicación', value: 'Centro histórico de Guanajuato, junto al Jardín de la Unión' },
      { label: 'Acceso al centro', value: 'El centro histórico tiene calles estrechas y desniveles' },
      { label: 'Llegada', value: 'Conviene llegar con margen por las cuestas y callejones del centro' },
    ],
    sections: [
      {
        heading: 'Una ciudad para recorrer a pie',
        paragraphs: [
          'Muchas calles del centro son peatonales o tienen tráfico muy limitado. Los callejones conectan plazas, templos y edificios históricos, y el Teatro Juárez está junto a uno de los nodos principales: el Jardín de la Unión.',
          'Orientarse es fácil si sigues las señales hacia el Jardín de la Unión o hacia el conjunto de San Diego; el teatro está ahí mismo.',
        ],
      },
      {
        heading: 'Qué esperar del recorrido',
        paragraphs: [
          'Antes de salir conviene tener en cuenta el terreno y el clima.',
        ],
        list: [
          'Pendientes y escaleras: hay tramos en subida y escaleras en algunos pasajes.',
          'Calzado cómodo: el pavimento irregular es habitual en el centro.',
          'Sombrero o agua en días soleados, y abrigo por la noche.',
          'Tiempo extra antes de una función para no llegar con prisa.',
        ],
      },
      {
        heading: 'Cómo orientar la ruta',
        paragraphs: [
          'Si vienes de una plaza o un templo cercano, el trayecto a pie hacia el teatro es corto y forma parte del paseo. Puedes apoyarte en la ruta por el centro histórico de esta guía para encadenar varios puntos sin repetir camino.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Es difícil caminar por el centro de Guanajuato?',
        a: 'Es una ciudad de cuestas, escaleras y calles irregulares. Con calzado cómodo y tiempo suficiente, el recorrido es agradable; con movilidad reducida conviene planear la ruta y el punto de llegada.',
      },
      {
        q: '¿Cuánto se camina desde el centro hasta el Teatro Juárez?',
        a: 'Depende del punto de partida. Desde los nodos cercanos, como el Jardín de la Unión, la distancia a pie es corta; desde puntos más altos o alejados hay que sumar pendientes.',
      },
      {
        q: '¿Cómo me oriento para llegar a pie al Teatro Juárez?',
        a: 'Sigue las señales hacia el Jardín de la Unión o hacia el conjunto de San Diego; el teatro está ahí mismo.',
      },
    ],
    sources: [
      {
        label: 'Guanajuato Capital · sitio oficial del municipio',
        href: 'https://www.guanajuatocapital.gob.mx/',
        external: true,
      },
    ],
    related: ['ruta-centro-historico', 'que-ver-cerca', 'como-llegar', 'estacionamiento'],
    updated: UPDATED,
  },
];
