import type { Guide } from './types';

const UPDATED = '2026-11-04';

export const groupC: Guide[] = [
  {
    slug: 'historia-teatro-juarez',
    group: 'C',
    priority: 'P0',
    hasEn: true,
    title: 'Historia del Teatro Juárez de Guanajuato',
    description:
      'Historia del Teatro Juárez: inicio de las obras en 1873, inauguración el 27 de octubre de 1903 y su papel como símbolo cultural de Guanajuato.',
    h1: 'Historia del Teatro Juárez de Guanajuato',
    lead:
      'El Teatro Juárez no se construyó de una vez: estuvo décadas en obra. Las obras comenzaron en 1873 sobre un solar vinculado al antiguo convento de San Diego de Alcalá y el teatro se inauguró formalmente el 27 de octubre de 1903. Esa dilatada construcción explica buena parte de su carácter ecléctico.',
    facts: [
      { label: 'Inicio de la construcción', value: '1873' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
      { label: 'Arquitectos', value: 'José Noriega (inicio de las obras) y Antonio Rivas Mercado (conclusión)' },
    ],
    sections: [
      {
        heading: 'De un solar conventual a un proyecto de teatro',
        paragraphs: [
          'El teatro se levantó sobre un terreno ligado al antiguo convento de San Diego de Alcalá, en una zona que con el tiempo se convertiría en uno de los nodos del centro histórico.',
          'El proyecto inicial se atribuye a José María Noriega. Las obras arrancaron en 1873, pero el proceso se alargó y el diseño se transformó con los años.',
        ],
      },
      {
        heading: 'Una obra larga y con varias manos',
        paragraphs: [
          'La construcción pasó por distintas etapas y por la intervención de varios profesionales, entre ellos Antonio Rivas Mercado, que retomó y transformó el proyecto, y Alberto Malo en la etapa final.',
          'Esa sucesión de aportaciones es clave para entender el edificio: no responde a un único estilo ni a un solo autor, sino a una acumulación de decisiones tomadas a lo largo de tres décadas.',
        ],
      },
      {
        heading: 'La inauguración de 1903',
        paragraphs: [
          'El teatro abrió formalmente el 27 de octubre de 1903. Su estreno fue una representación de Aida, de Giuseppe Verdi, un repertorio ambicioso que anunciaba la vocación del recinto como gran sala de espectáculos.',
        ],
        note:
          'En 2023 el Gobierno de Guanajuato conmemoró los 120 años del teatro con información sobre su conservación y puesta en valor.',
      },
      {
        heading: 'Un símbolo que sigue en uso',
        paragraphs: [
          'Desde su apertura, el edificio ha funcionado tanto como sala de espectáculos como pieza central del paisaje cultural de Guanajuato. Hoy alberga ópera, conciertos, danza y teatro, y tiene un papel protagonista durante el Festival Internacional Cervantino.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuándo se inauguró el Teatro Juárez?',
        a: 'El 27 de octubre de 1903. Las obras, sin embargo, habían comenzado en 1873, por lo que su construcción se prolongó durante tres décadas.',
      },
      {
        q: '¿Quién diseñó el Teatro Juárez?',
        a: 'El proyecto inicial se atribuye a José María Noriega, y la obra fue transformada y completada por otros profesionales, entre ellos Antonio Rivas Mercado, con Alberto Malo en la etapa final.',
      },
      {
        q: '¿Qué se representó en su inauguración?',
        a: 'La ópera Aida, de Giuseppe Verdi, según las fuentes culturales del Gobierno de Guanajuato.',
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
      {
        label: 'Gobierno de Guanajuato · 120 años del Teatro Juárez',
        href: 'https://boletines.guanajuato.gob.mx/2023/10/27/cumple-120-anos-el-majestuoso-teatro-juarez-de-guanajuato/',
        external: true,
      },
    ],
    related: ['construccion-y-arquitectos', 'arquitectura', 'restauracion', 'festival-cervantino'],
    updated: UPDATED,
  },
  {
    slug: 'arquitectura',
    group: 'C',
    priority: 'P0',
    title: 'Arquitectura del Teatro Juárez: estilos y elementos',
    description:
      'Arquitectura del Teatro Juárez de Guanajuato: fachada clasicista, sala de inspiración neomudéjar y los elementos que definen su estilo ecléctico.',
    h1: 'Arquitectura del Teatro Juárez',
    lead:
      'El Teatro Juárez es un ejemplo de arquitectura ecléctica: combina un exterior de raíz clasicista con un interior historicista de inspiración hispanomusulmana. Esa convivencia de lenguajes, más que un defecto, es su seña de identidad.',
    facts: [
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
      { label: 'Pórtico', value: 'Doce columnas y balaustrada con ocho musas de bronce' },
      { label: 'Telón', value: 'Telón del artista francés Labasta' },
    ],
    sections: [
      {
        heading: 'El exterior: monumentalidad clasicista',
        paragraphs: [
          'La fachada se organiza en torno a un pórtico de doce columnas estriadas que le dan un aire de templo clásico. Sobre la balaustrada superior se disponen ocho esculturas de bronce, y el acceso incorpora elementos escultóricos como los leones.',
          'La severidad del exterior contrasta deliberadamente con lo que se encuentra al cruzar la puerta.',
        ],
      },
      {
        heading: 'El interior: fantasía neomudéjar',
        paragraphs: [
          'La sala principal abandona el clasicismo y despliega una decoración de inspiración hispanomusulmana: arcos, lacerías y motivos geométricos que construyen un ambiente mucho más ornamental.',
          'La decoración histórica incluye un telón realizado por el artista francés Labasta, uno de los elementos más citados del recinto.',
        ],
      },
      {
        heading: 'Los elementos que conviene observar',
        paragraphs: [
          'Estos son los rasgos que suelen destacarse al analizar el edificio, tanto desde la calle como en el interior.',
        ],
        list: [
          'Pórtico de doce columnas estriadas y su escala monumental.',
          'Balaustrada con ocho esculturas de bronce.',
          'Esculturas de leones en el acceso.',
          'Sala con arcos, lacerías y motivos geométricos.',
          'Telón histórico y decoración interior de raíz historicista.',
        ],
      },
      {
        heading: 'Por qué es ecléctico',
        paragraphs: [
          'El edificio se construyó a lo largo de varias décadas y con distintas manos, lo que favoreció la mezcla de referencias. Lejos de ser un caso aislado, responde a un momento en que la arquitectura combinaba fuentes históricas diversas.',
          'No conviene atribuir todo el diseño a un único autor: es más preciso hablar de etapas, cada una con sus responsables.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Qué estilo arquitectónico tiene el Teatro Juárez?',
        a: 'Es ecléctico. El exterior es de raíz clasicista, mientras la sala principal se inspira en el arte hispanomusulmán, con arcos, lacerías y motivos geométricos.',
      },
      {
        q: '¿Cuántas columnas tiene la fachada?',
        a: 'El pórtico se compone de doce columnas estriadas, según las fuentes culturales oficiales.',
      },
      {
        q: '¿Por qué el Teatro Juárez mezcla estilos?',
        a: 'Porque se construyó a lo largo de varias décadas y con distintas manos: las obras comenzaron en 1873 y el teatro se inauguró el 27 de octubre de 1903, lo que favoreció la convivencia de referencias clásicas e hispanomusulmanas.',
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
    related: ['fachada', 'ocho-musas', 'interior-y-decoracion', 'construccion-y-arquitectos'],
    updated: UPDATED,
  },
  {
    slug: 'ocho-musas',
    group: 'C',
    priority: 'P1',
    title: 'Las ocho musas del Teatro Juárez',
    description:
      'Las ocho esculturas de bronce que coronan el Teatro Juárez: qué representan las musas en la tradición clásica y cómo observarlas en la balaustrada.',
    h1: 'Las ocho musas del Teatro Juárez',
    lead:
      'Sobre la balaustrada del Teatro Juárez se alinean ocho esculturas de bronce que la tradición identifica con las musas, las figuras de la mitología griega asociadas a las artes y al conocimiento. Son uno de los detalles más fotografiados del edificio.',
    facts: [
      { label: 'Pórtico', value: 'Doce columnas y balaustrada con ocho musas de bronce' },
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
    ],
    sections: [
      {
        heading: 'Qué son las musas',
        paragraphs: [
          'En la mitología griega, las musas son las divinidades que inspiran las artes, la música, la poesía y las ciencias. La tradición clásica suele contar nueve, cada una vinculada a un campo distinto.',
          'En el teatro se disponen ocho figuras de bronce. Su presencia sobre la fachada de un edificio dedicado a las artes escénicas no es casual: refuerza el vínculo entre el edificio y la tradición cultural clásica.',
        ],
      },
      {
        heading: 'Dónde verlas y cómo observarlas',
        paragraphs: [
          'Las esculturas coronan la parte superior de la fachada, así que la mejor lectura se obtiene algo alejándose y mirando hacia arriba, o desde la plaza posterior si las condiciones de luz lo permiten.',
        ],
        list: [
          'Observa el orden y la postura de cada figura.',
          'Fíjate en los atributos u objetos que portan, que en la iconografía clásica ayudan a identificar a cada musa.',
          'Compara el color y la pátina del bronce, distinta según la exposición.',
          'Contempla el contraste entre las figuras y la severidad de la fachada.',
        ],
        note:
          'No atribuimos un nombre concreto a cada escultura: la identificación individual requiere contrastar la iconografía con documentación oficial, y no hemos verificado cada detalle. Aquí describimos lo que puede observarse y su significado general.',
      },
      {
        heading: 'Un motivo clásico en un edificio ecléctico',
        paragraphs: [
          'Las musas encajan con el carácter historicista del teatro, que combina referencias clásicas en el exterior con decoración hispanomusulmana en el interior. Junto a los leones del acceso, forman el repertorio escultórico más visible del edificio.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuántas musas tiene el Teatro Juárez?',
        a: 'Ocho esculturas de bronce coronan la balaustrada superior de la fachada.',
      },
      {
        q: '¿Qué representan las musas?',
        a: 'Las musas son figuras de la mitología griega asociadas a las artes y al conocimiento. Su presencia sobre un teatro refuerza el vínculo del edificio con la tradición cultural clásica.',
      },
      {
        q: '¿Se puede saber qué musa es cada escultura?',
        a: 'La identificación individual requiere contrastar la iconografía clásica con documentación oficial. No hemos verificado cada atribución, por lo que no asignamos nombres concretos.',
      },
    ],
    sources: [
      {
        label: 'Festival Internacional Cervantino · Recinto Teatro Juárez',
        href: 'https://festivalcervantino.gob.mx/recinto/6/juarez-theater?lan=es',
        external: true,
      },
      {
        label: 'Cultura Guanajuato · Teatro Juárez',
        href: 'https://cultura.guanajuato.gob.mx/index.php/teatro-juarez/',
        external: true,
      },
    ],
    related: ['fachada', 'arquitectura', 'fotografia', 'interior-y-decoracion'],
    updated: UPDATED,
  },
  {
    slug: 'fachada',
    group: 'C',
    priority: 'P1',
    title: 'La fachada del Teatro Juárez: columnas y esculturas',
    description:
      'Detalle de la fachada del Teatro Juárez: pórtico de doce columnas, balaustrada con musas, leones de acceso y otros elementos que conviene observar.',
    h1: 'La fachada del Teatro Juárez',
    lead:
      'La fachada es lo primero que se ve del Teatro Juárez y, probablemente, lo que más se fotografía. Su pórtico de doce columnas estriadas le da un aire de templo clásico, rematado por la balaustrada con las ocho musas de bronce.',
    facts: [
      { label: 'Pórtico', value: 'Doce columnas y balaustrada con ocho musas de bronce' },
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
    ],
    sections: [
      {
        heading: 'El pórtico y sus columnas',
        paragraphs: [
          'El acceso se resuelve con un pórtico de doce columnas estriadas que ordenan la entrada y le dan escala monumental. La composición busca una impresión de solidez y solemnidad, coherente con la idea de un gran teatro de ciudad.',
        ],
      },
      {
        heading: 'La balaustrada y las esculturas',
        paragraphs: [
          'Sobre el pórtico corre una balaustrada, y sobre ella se alinean las ocho esculturas de bronce. En el acceso aparecen además esculturas de leones, un motivo clásico de guardia simbólica.',
          'El conjunto escultórico es el principal adorno figurativo del exterior y conecta el edificio con el repertorio iconográfico clásico.',
        ],
      },
      {
        heading: 'Qué observar en detalle',
        paragraphs: [
          'Más allá del impacto general, hay detalles que recompensan una mirada pausada.',
        ],
        list: [
          'El ritmo regular de las columnas y sus capiteles.',
          'La relación entre la altura del pórtico y la balaustrada.',
          'La silueta de las musas contra el cielo o el cerro.',
          'Los leones del acceso y su posición.',
          'El efecto de la luz: cambia mucho entre el día y la noche.',
        ],
      },
      {
        heading: 'La fachada en el conjunto urbano',
        paragraphs: [
          'La fachada no se contempla aislada: forma parte del conjunto del Jardín de la Unión y de los edificios históricos vecinos. Observarla desde cierta distancia, integrándola con la plaza, ayuda a entender su papel en el paisaje del centro.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cuántas columnas tiene el pórtico del Teatro Juárez?',
        a: 'Doce columnas estriadas, según las fuentes culturales oficiales.',
      },
      {
        q: '¿Qué esculturas hay en la fachada?',
        a: 'Sobre la balaustrada se disponen ocho esculturas de bronce asociadas a las musas, y en el acceso aparecen figuras de leones.',
      },
      {
        q: '¿Desde dónde se ve mejor la fachada?',
        a: 'La fachada forma parte del conjunto del Jardín de la Unión y de los edificios históricos vecinos; observarla algo alejándose, integrándola con la plaza, ayuda a entender su papel en el paisaje del centro.',
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
    related: ['arquitectura', 'ocho-musas', 'fotografia', 'historia-teatro-juarez'],
    updated: UPDATED,
  },
  {
    slug: 'interior-y-decoracion',
    group: 'C',
    priority: 'P1',
    title: 'El interior y la decoración del Teatro Juárez',
    description:
      'La decoración interior del Teatro Juárez: sala de inspiración neomudéjar, arcos, lacerías, motivos geométricos y el telón histórico de Labasta.',
    h1: 'El interior y la decoración del Teatro Juárez',
    lead:
      'Si el exterior del Teatro Juárez mira al clasicismo, el interior se entrega al historicismo de inspiración hispanomusulmana. Arcos, lacerías y motivos geométricos convierten la sala en un espacio ornamental, muy distinto del pórtico severo de la entrada.',
    facts: [
      { label: 'Estilo', value: 'Ecléctico: fachada clasicista e interior de inspiración hispanomusulmana' },
      { label: 'Telón', value: 'Telón del artista francés Labasta' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
    ],
    sections: [
      {
        heading: 'Un cambio deliberado de lenguaje',
        paragraphs: [
          'Cruzar la puerta supone pasar de la piedra clásica a un repertorio decorativo de raíz hispanomusulmana. Ese cambio es uno de los rasgos que definen la experiencia del edificio y lo distinguen de otros teatros de su época.',
        ],
      },
      {
        heading: 'Los motivos decorativos',
        paragraphs: [
          'La decoración de la sala recurre a formas geométricas y a lacerías, patrones entrelazados habituales en la tradición hispanomusulmana. Estos elementos se combinan con arcos que organizan visualmente el espacio.',
        ],
        list: [
          'Arcos y su perfil, distintos del arco clásico del exterior.',
          'Lacerías: entrelazados geométricos que cubren superficies.',
          'Motivos geométricos repetidos con ritmo decorativo.',
          'Telón histórico realizado por el artista francés Labasta.',
        ],
      },
      {
        heading: 'La sala como espacio de representación',
        paragraphs: [
          'Además del valor decorativo, la sala es el lugar donde ocurre la función: la disposición de niveles y palcos condiciona la visibilidad y la experiencia del público.',
          'La decoración ha pasado por intervenciones de conservación a lo largo de su historia, por lo que conviene no leer fotografías antiguas como si describieran el estado actual.',
        ],
      },
      {
        heading: 'Cómo interpretarla',
        paragraphs: [
          'Una lectura útil es atender primero a la estructura del espacio y después al ornamento: cómo se organizan los arcos, dónde se concentra la decoración y cómo el telón cierra la composición. Esa mirada ayuda a entender el interior más allá de su efecto inmediato.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Cómo es el interior del Teatro Juárez?',
        a: 'La sala se inspira en el arte hispanomusulmán, con arcos, lacerías y motivos geométricos. Contrasta con la fachada clasicista del exterior.',
      },
      {
        q: '¿Quién hizo el telón del Teatro Juárez?',
        a: 'La decoración histórica del recinto incluye un telón realizado por el artista francés Labasta, según las fuentes culturales oficiales.',
      },
      {
        q: '¿La decoración interior se conserva igual que antaño?',
        a: 'No necesariamente. La decoración ha pasado por intervenciones de conservación a lo largo de su historia, por lo que conviene no leer fotografías antiguas como si describieran el estado actual.',
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
    related: ['teatro-juarez-por-dentro', 'arquitectura', 'ocho-musas', 'restauracion'],
    updated: UPDATED,
  },
  {
    slug: 'construccion-y-arquitectos',
    group: 'C',
    priority: 'P1',
    title: 'Construcción del Teatro Juárez: arquitectos y etapas',
    description:
      'Quién construyó el Teatro Juárez: el proyecto inicial de José María Noriega, la intervención de Antonio Rivas Mercado y la etapa final de Alberto Malo.',
    h1: 'Construcción del Teatro Juárez: etapas y responsables',
    lead:
      'El Teatro Juárez tardó tres décadas en abrir porque su construcción se prolongó y su diseño fue transformándose. Por eso es más preciso hablar de etapas y de varios responsables que de un único arquitecto autor de todo el edificio.',
    facts: [
      { label: 'Inicio de la construcción', value: '1873' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
      { label: 'Arquitectos', value: 'José Noriega (inicio de las obras) y Antonio Rivas Mercado (conclusión)' },
    ],
    sections: [
      {
        heading: 'El proyecto inicial',
        paragraphs: [
          'El proyecto inicial del teatro se atribuye a José María Noriega, sobre un solar vinculado al antiguo convento de San Diego de Alcalá. Las obras comenzaron en 1873.',
          'El proceso no fue continuo: se alargó durante años y estuvo sujeto a cambios de enfoque y de responsables.',
        ],
      },
      {
        heading: 'La transformación del proyecto',
        paragraphs: [
          'Antonio Rivas Mercado retomó y transformó el proyecto, una de las figuras clave en la definición del edificio tal como lo conocemos. En la etapa final intervino Alberto Malo.',
        ],
        list: [
          'José María Noriega: proyecto inicial.',
          'Antonio Rivas Mercado: retoma y transforma el proyecto.',
          'Alberto Malo: etapa final de la obra.',
        ],
        note:
          'No atribuimos todo el diseño a una sola persona. La mezcla de lenguajes del edificio se entiende mejor como resultado de la sucesión de etapas.',
      },
      {
        heading: 'Del inicio de obra a la inauguración',
        paragraphs: [
          'Entre el comienzo de las obras en 1873 y la inauguración del 27 de octubre de 1903 median tres décadas. Ese lapso explica que el teatro reúna referencias de distintos momentos y que su estilo sea ecléctico.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Quién fue el arquitecto del Teatro Juárez?',
        a: 'No hay un único autor. El proyecto inicial se atribuye a José María Noriega; Antonio Rivas Mercado lo retomó y transformó, y Alberto Malo intervino en la etapa final.',
      },
      {
        q: '¿Cuánto tiempo tardó en construirse?',
        a: 'Las obras comenzaron en 1873 y el teatro se inauguró el 27 de octubre de 1903, por lo que la construcción se extendió unos treinta años.',
      },
      {
        q: '¿Sobre qué terreno se construyó el Teatro Juárez?',
        a: 'Sobre un solar vinculado al antiguo convento de San Diego de Alcalá, en el centro histórico de Guanajuato.',
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
    related: ['historia-teatro-juarez', 'arquitectura', 'restauracion', 'fachada'],
    updated: UPDATED,
  },
  {
    slug: 'restauracion',
    group: 'C',
    priority: 'P2',
    title: 'Restauración del Teatro Juárez: conservación y modernización',
    description:
      'Qué se sabe de la restauración y conservación del Teatro Juárez, incluida la intervención difundida en torno a su 120.º aniversario.',
    h1: 'Restauración y conservación del Teatro Juárez',
    lead:
      'Un edificio histórico en uso continuo necesita conservación constante. En torno a su 120.º aniversario, en 2023, el Gobierno de Guanajuato difundió información sobre los trabajos de conservación y puesta en valor del teatro, incluidas mejoras de accesibilidad.',
    facts: [
      { label: 'Restauración 2022–2023', value: 'Añadió ascensor, salvaescaleras y espacios para sillas de ruedas' },
      { label: 'Reapertura del 120 aniversario', value: '27 de octubre de 2023' },
      { label: 'Inauguración', value: '27 de octubre de 1903' },
    ],
    sections: [
      {
        heading: 'Conservar un edificio en funcionamiento',
        paragraphs: [
          'A diferencia de un monumento musealizado, el Teatro Juárez sigue acogiendo espectáculos. Eso obliga a compaginar la conservación del patrimonio con las necesidades técnicas de una sala en activo.',
          'La decoración, el mobiliario y los elementos escultóricos requieren mantenimiento periódico para mantenerse en buen estado.',
        ],
      },
      {
        heading: 'La intervención difundida en 2023',
        paragraphs: [
          'Con motivo del 120.º aniversario, los boletines oficiales mencionaron trabajos de conservación y modernización, entre ellos mejoras de accesibilidad como elevador, plataforma para escaleras y espacios para sillas de ruedas.',
        ],
        note:
          'Se trata de referencias institucionales sobre la intervención, no de una descripción detallada ni de una garantía de que todo esté operativo hoy. Confirma el estado y la disponibilidad con el recinto.',
      },
      {
        heading: 'Qué significa para el visitante',
        paragraphs: [
          'La conservación explica por qué algunas zonas pueden estar cerradas o en mantenimiento durante tu visita, y por qué el acceso varía. También es la razón por la que el edificio sigue siendo un espacio funcional y no solo un objeto de contemplación.',
        ],
      },
    ],
    faq: [
      {
        q: '¿El Teatro Juárez ha sido restaurado?',
        a: 'Sí. Ha pasado por trabajos de conservación a lo largo de su historia y, en torno a su 120.º aniversario en 2023, el Gobierno de Guanajuato difundió información sobre una intervención que incluía mejoras de accesibilidad.',
      },
      {
        q: '¿Puedo ver zonas en restauración durante mi visita?',
        a: 'Es posible. Al ser un edificio en uso y en conservación continua, algunas áreas pueden estar cerradas o en mantenimiento según la programación del momento.',
      },
      {
        q: '¿Qué mejoras de accesibilidad se difundieron?',
        a: 'En torno a su 120.º aniversario, en 2023, los boletines oficiales mencionaron mejoras de accesibilidad como elevador, plataforma para escaleras y espacios para sillas de ruedas.',
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
    related: ['historia-teatro-juarez', 'accesibilidad', 'arquitectura', 'construccion-y-arquitectos'],
    updated: UPDATED,
  },
];
