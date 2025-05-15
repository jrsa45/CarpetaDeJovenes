const canciones = [
  {
    titulo: "Coros de Avivamiento en Re# Menor",
    audio: "",
    letra: [
      {
        subtitulo: "Audio completo",
        texto: "",
        audio: "../archives/aud/re1.mp3"
      },
      {
        subtitulo: "1",
        texto: "//Como el ciervo brama por las corrientes de las aguas, así brama por Ti, Oh Dios, el alma mía. Mi alma tiene sed del Dios, del Dios Vivo, del Dios vivo Tiene sed//",
        audio: "../archives/aud/re1.mp3"
      },
      {
        subtitulo: "2",
        texto: "//Allá en el cielo, allá en el cielo, allá en el cielo, no habrá tristeza ni llanto ni mas dolor, porque estaremos toditos juntos allá en el cielo, alabando al Salvador//",
        audio: "../archives/aud/re2.mp3"
      },
      {
        subtitulo: "3",
        texto: "//Quita la piedra, deja el agua correr. Mira que las almas se van a perder. Háblales de Cristo, ese es tu deber. Agua que se estanca no podrá correr//",
        audio: "../archives/aud/re3.mp3"
      },
      {
        subtitulo: "4",
        texto: ["///Se siente aquí/// el Espíritu de Dios se siente aquí. Y los hombres de la tierra glorifican al Señor, El Espíritu de Dios se siente aquí",
        "///Se mueve aquí/// el Espíritu de Dios se mueve aquí Y los hombres de la tierra Glorifican al Señor, El Espíritu de Dios se mueve aquí.",
        "///Prepárate para que sientas/// el Espíritu de Dios.",
        "///Y déjalo que se mueva/// dentro de tu corazón."],
        audio: "../archives/aud/re5.mp3"
      },
      {
        subtitulo: "5",
        texto: "//Yo quiero más y más de Cristo, yo quiero más de su Poder, yo quiero más de su presencia, yo quiero más y más de Él//",
        audio: "../archives/aud/re5.mp3"
      },
      {
        subtitulo: "6",
        texto: "Arde Fuego, arde fuego, cesad vuestras faenas, es la hora del Culto, Venid adoremos.",
        audio: "../archives/aud/re6.mp3"
      },
      {
        subtitulo: "7",
        texto: ["///Algo está descendiendo/// desde arriba de los cielos, //Eso es el Espíritu Santo//, ",
        "//Oh Gloria, Aleluya, Aleluya, Gloria a Dios//"
        ],
        audio: "../archives/aud/re7.mp3"
      },
      {
        subtitulo: "8",
        texto: ["//Levanten la bandera los hijos del Señor//",
        "//Cuando Cristo venga, todo será canto. Todos cantaremos: Gloria al Señor//"
        ],
        audio: "../archives/aud/re8.mp3"
      },
      {
        subtitulo: "9",
        texto: ["//Va a temblar, va a temblar, cuando Cristo venga el mundo va a temblar//",
        "//Cielos abiertos, Cristo bajando, ángeles tocando, la Iglesia subiendo//"
        ],
        audio: "../archives/aud/re9.mp3"
      },
      {
        subtitulo: "10",
        texto: ["//Como relámpago, como relámpago, así será la venida del Señor//",
        "//mira a tu pueblo que anunciando está, que anunciando está la venida del Señor//"
        ],
        audio: "../archives/aud/re10.mp3"
      },
      {
        subtitulo: "11",
        texto: ["Y Quien dijo que no, que no había victoria, es que no ha conocido al Cristo de la Gloria, Y yo digo que ¡Si! Que victoria tendremos, //Aunque pruebas tengamos, a Cristo alabaremos//",
        "Así como Abraham salió entre su gente, Así como Moisés, levantó la serpiente, Así como Elías, fue levantado al cielo, //Seremos levantados a las bodas del Cordero//"
        ],
        audio: "../archives/aud/re11.mp3"
      },
      {
        subtitulo: "12",
        texto: ["//Jehová está en su templo, alabale al que vive// //Alábale, alábale, alábale al que Vive//",
          "//Alabaré, alabaré, alabaré a mi Señor//",
          "Juan vio el número de los redimidos y todos alababan al Señor, unos oraban, otros cantaban, y todos alababan al Señor.",
          "//Alabaré, alabaré, alabaré a mi Señor//"
        ],
        audio: "../archives/aud/re12.mp3"
      },
      {
        subtitulo: "13",
        texto: ["//Jehová le dijo al profeta: “¿estos huesos vivirán?” El Profeta le respondió: “¡Tú lo sabes, mi Señor!” //",
          "//Estos huesos vivirán, estos huesos vivirán, estos huesos vivirán, Tú lo sabes mi Señor//",
          "//Jehová le dijo al Pastor: “¿Esta Iglesia vivirá?” El Pastor le respondió: “¡Tú lo sabes, mi Señor!” //",
          "//Esta iglesia vivirá, esta iglesia vivirá, esta iglesia vivirá, Tú lo sabes mi Señor//"
        ],
        audio: "../archives/aud/re13.mp3"
      },
      {
        subtitulo: "14",
        texto: ["//A la luna yo no quiero ir, ni tampoco quiero ir al sol//",
        "//Pero si quiero ir más allá del sol, más allá del sol, donde está Jesús//"
        ],
        audio: "../archives/aud/re14.mp3"
      },
      {
        subtitulo: "15",
        texto: ["///Caminando voy para Canaán/// Gloria a Dios, caminando voy para Canaán.",
        "///Si usted no va, yo le invito a ir/// Gloria a Dios, caminando voy para Canaán.",
        "///Al venir Jesús, yo me voy con Él/// Gloria a Dios, caminando voy para Canaán.",
        "///Jesús está aquí, te quiere salvar/// Gloria a Dios, caminando voy para Canaán."
        ],
        audio: "../archives/aud/re14.mp3"
      },
      {
        subtitulo: "16",
        texto: ["//Dios tiene un ejército marchando por la tierra, sanidad en sus manos, libertad en sus cantos, el gozo del Señor reina en sus vidas y en este ejército, Yo tengo mi lugar//",
        "Se oye el sonido del ejército… Se oye en sus pies marchando. Es el sonido del ejército del Señor que nunca será vencido."
        ],
        audio: "../archives/aud/re16.mp3"
      },
      {
        subtitulo: "17",
        texto: ["Aunque no soy de la infantería, caballería, artillería, aunque en avión no vaya volando, pero soldado soy.",
        "//Soldado soy de Jesús// aunque en avión no vaya volando, pero soldado soy."
        ],
        audio: "../archives/aud/re17.mp3"
      },
      {
        subtitulo: "18",
        texto: ["///Un palacio tengo allá más lindo que el sol/// en el más allá",
        "///Si Señor, Si Señor acuérdate de Mi/// en el más allá."
        ],
        audio: "../archives/aud/re18.mp3"
      },
      {
        subtitulo: "19",
        texto: ["//Yo sé que mi redentor me tiene que levantar//",
        "//Del polvo de donde estoy ponerme en un buen lugar//",
        "//no pierdas la Fe, Te tiene que levantar//",
        "//Del polvo de donde estas ponerte en un buen lugar//"
        ],
        audio: "../archives/aud/re19.mp3"
      },
      {
        subtitulo: "20",
        texto: ["Yo tengo ///Gozo en mi alma/// y en mi ser, es como ///Río de agua viva/// en mi ser.",
        "//Hemos orado y ha bajado el Poder de Dios// //Oh Gloria a Él//",
        "Hemos orado y ha bajado el Poder de Dios.",
        "//Yo siento como que la Gloria bajó, la Gloria bajó aquí//"
        ],
        audio: "../archives/aud/re20.mp3"
      },
      {
        subtitulo: "21",
        texto: ["//Señor únenos, Señor únenos, Señor únenos con Tu Poder//",
        "//Manda fuego Señor, manda fuego Señor, manda fuego Pentecostés//",
        "//Señor avívanos…//",
        "//Señor bautízanos…//"
        ],
        audio: "../archives/aud/re21.mp3"
      },
      {
        subtitulo: "22",
        texto: ["//Los hijos de Sion se gozan en su rey, alaban su nombre con danza, con panderos y arpas, cantan alabanzas, cantan alabanzas a Él//",
        "//Aleluya, Aleluya, Aleluya, Amén//"
        ],
        audio: "../archives/aud/re22.mp3"
      },
      {
        subtitulo: "23",
        texto: ["Conozco ///a un hombre de Poder/// ¡De Poder!Él me ayuda a vencer, me ayuda a triunfar, su nombre es Jesús, ¡Jesús!",
        "//Es fuerte más que el viento, su gloria más que el mar, nunca termina su amor, en Él puedo yo confiar//"
        ],
        audio: "../archives/aud/re23.mp3"
      },
      {
        subtitulo: "24",
        texto: ["//Está bajando ya, está bajando ya, está bajando la Gloria de Jehová Si su pueblo empieza a orar y comienza a alabar, Bajará, bajará, bajará//",
        ],
        audio: "../archives/aud/re24.mp3"
      },
      {
        subtitulo: "25",
        texto: ["//Me llaman Aleluya, Aleluya soy//",
          "//Me llaman Aleluya, Aleluya soy, mis pecados perdonados son, y ahora rumbo al cielo voy//",
          "//El diablo está enojado y tiene razón//",
          "//El diablo está enojado y tiene razón, fue arrojado de mi corazón y ahora rumbo al cielo voy//"
        ],
        audio: "../archives/aud/re25.mp3"
      },
      {
        subtitulo: "26",
        texto: ["//Pon un ángel aquí Señor, otro más allá, uno en la puerta y el otro en el altar//",
        "//Jesús está en el medio, comienza a operar, Jesús está operando y satanás no puede entrar//"
        ],
        audio: "../archives/aud/re26.mp3"
      },
      {
        subtitulo: "27",
        texto: ["//Huye satanás, márchate de aquí, en el nombre de Jesús, nos vamos contra Ti//",
        "//oh oh oh, Gritaba la gente, cayeron los muros de Jericó//"
        ],
        audio: "../archives/aud/re27.mp3"
      },
    ]
  },
  {
    titulo: "Coros de Avivamiento en Do mayor",
    letra: [
      {
        subtitulo: "1",
        texto: "//Texto en Do mayor...//",
        audio: "../archives/aud/do1.mp3"
      },
      {
        subtitulo: "2",
        texto: "//Otro texto...//",
        audio: "../archives/aud/do2.mp3"
      }
    ]
  }
];

// Cargar índice con enlaces estilizados
function cargarIndice() {
  const indice = document.getElementById("indice");
  indice.innerHTML = "";

  canciones.forEach((cancion, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";
    a.textContent = cancion.titulo;
    a.classList.add("nav_links"); // Esto se adapta a tu estilo
    a.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarCancion(index);
    });

    li.appendChild(a);
    indice.appendChild(li);
  });
}

// Mostrar contenido de una canción
function mostrarCancion(index) {
  const cancion = canciones[index];
  const contenido = document.getElementById("contenido-cancion");

  let html = `<h2>${cancion.titulo}</h2>`;

  cancion.letra.forEach(seccion => {
    html += `<h3>${seccion.subtitulo}</h3>`;

    // Si el texto es un array, mostramos cada estrofa por separado
    if (Array.isArray(seccion.texto)) {
      seccion.texto.forEach(estrofa => {
        html += `<p>${estrofa}</p>`;
      });
    } else {
      html += `<p>${seccion.texto}</p>`;
    }

    if (seccion.audio) {
      html += `
        <audio controls>
          <source src="${seccion.audio}" type="audio/mp3">
          Tu navegador no soporta el audio.
        </audio>
      `;
    }
  });

  contenido.innerHTML = html;
}


window.addEventListener("DOMContentLoaded", cargarIndice);
