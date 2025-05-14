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
