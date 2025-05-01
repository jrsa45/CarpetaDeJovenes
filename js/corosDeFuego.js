// Datos de las canciones con la letra subdividida en párrafos
const canciones = [
    {
        titulo: "Seguidilla 1",
        letra: [
          "1",
            "//Como el ciervo brama por las corrientes de las aguas, así brama por ti Oh Dios el alma mía, Mi alma tiene sed del Dios, del Dios vivo, del Dios vivo tiene sed//",
          "2",
          "//Allá en el cielo, allá en el cielo, allá en el cielo, no habrá tristeza ni llanto ni mas dolor, porque estaremos toditos Juntos allá en el cielo, alabando al Salvador//",
          "3",
          " //Yo no sé a lo que tu has venido pero yo vine a alabar a Dios// //Aleluya, Aleluya, Yo vine a alabar a Dios//",
          "//Si has venido con la cara triste, el Señor te la cambiará// //Aleluya, Aleluya, El Señor te la cambiará//",
          "//Si has venido con muchos problemas, el Señor se los llevará// //Aleluya, Aleluya, El Señor se los llevará",
          "4",
          "//Que Bonito es, Que bonito es Cantar al Señor, Con Todas las fuerzas, con todas las fuerzas de mi corazón//, //Hermano, vamos a cantarle, Que Bonito es, Que bonito es cantar al Señor//",
          "5",
          "//Alguien está aquí y yo se que es Cristo, Alguien está aqui y yo se que es el Señor//",
          "//El está aquí, tú no lo ves// vela por mi, vela por ti, vela por todos el Señor.",
          "6",
          "///Yo estoy contento porque soy de Cristo/// aquí y en la eternidad",
          "///Yo he nacido para alabar al cordero/// aquí y en la eternidad",
          "7",
          "//Estoy alegre, alegre, muy alegre, Estoy alegre porque Cristo me salvó//",
          "//Por eso canto, yo canto Aleluya, por eso canto Aleluya, Gloria a Dios//",
          "8",
          "//Jesucristo va pasando por aquí// //Cuando el pasa todo se transforma, la alegria viene, la tristeza va//",
          "9",
          "//Pasa por aquí Señor, pasa por aqui//, //Oh Señor, pasa por aqui//",
          "//Espíritu Santo, Llename de Ti//, //Oh Señor, Llename de Ti//"
        ],
        audio: "audio/cancion1.mp3"
      },
    {
      titulo: "Seguidilla 2",
      letra: [
        "1","///Caminando voy para Canaán/// Gloria a Dios, caminando voy para Canaán",
        "///Si usted no va, yo le invito a Ir/// Gloria a Dios, caminando voy para Canaán",
        "///Al venir Jesús, yo me voy con Él/// Gloria a Dios, caminando voy para Canaán",
        "///Jesús está aquí, Te quiere salvar/// Gloria a Dios, caminando voy para Canaán",
        "2","//Dios tiene un ejército marchando por la tierra, sanidad en sus manos, libertad en sus cantos, El Gozo del Señor, reina en sus vidas y en este ejército Yo tengo mi lugar// Se oye el sonido del Ejército (un dos, un dos), Se oye en sus pies marchando. Es el sonido del ejército del Señor que nunca será vencido",
        "3","//Aunque no soy de la infanteria, Caballería, artillería, Aunque en avion no valla volando, pero soldado soy// //Soldado soy de Jesús (Si señor)//",
        "4","//A la luna yo no quiero ir, ni tampoco quiero ir al Sol// //Pero si quiero ir, mas allá del sol, mas allá del sol donde está Jesús//",
        "5","///Un palacio tengo allá mas lindo que el sol/// en el más allá ///Si Señor, Si Señor acuerdate de mi/// en el más allá",
        "6","//Yo se que mi Redentor me tiene que levantar// //Del polvo de donde estoy, ponerme en un buen lugar// //no pierdas la Fe, te tiene que levantar// //Del polvo de donde estas ponerte en un buen lugar//",
        "7","Yo tengo ///gozo en mi alma/// y en mi ser, es como ///Rio de agua viva/// en mi ser.",
        "//Hemos orado y ha bajado el poder de Dios// //Oh Gloria a Él// Hemos orado y ha bajado el Poder de Dios",
        "//Yo siento como que la Gloria bajó, la Gloria bajó aquí//",
        "8","coro: //Manda fuego Señor, Manda Fuego Señor, Manda Fuego Pentecostés//",
        "//Señor avivanos, Señor avivanos, Señor avivanos con Tu Poder//",
        "9","//Los hijos de Sión se gozan en su rey, alaban su nombre con danza, con panderos y arpas cantan alabanzas, cantan alabanzas a Él//",
        "//Aleluya, Aleluya, Aleluya, Amén//",
      ],
      audio: "audio/cancion2.mp3"
    },
    {
        titulo: "Seguidilla 3",
        letra: [
          "1",
          "Y Quien dijo que no, que no habia victoria, Es que no ha conocido al Cristo de la Gloria y yo digo que Si, que Victoria tendremos, //aunque pruebas tengamos, a mi Cristo alabaremos//",
          "Así como Abraham salió entre su gente, Así como Moisés levantó la serpiente, Así como Elías fue levantado al cielo, //Seremos levantados a las bodas del cordero//",
          "2",
          "//Jehová está en su Templo, Alábale al que vive// //Alábale, alábale, alábale al que vive//",
          "//Alabaré, alabaré, alabaré a mi Señor//",
          "Juan vió el numero de los redimidos y todos alababan al Señor, unos oraban otros cantaban y todos alababan al Señor",
          "//alabaré, alabaré, alabaré a mi Señor//",
          "3",
          "//Jehová le dijo al profeta: 'Estos huesos vivirán' y el profeta le respondio: '¡Tú lo sabes, Mi Señor!'//",
          "//Estos huesos vivirán, estos huesos vivirán, estos huesos vivirán, Tú lo sabes mi Señor//",
          "//Jehová le dijo al Pastor: 'Esta Iglesia vivirá' y el Pastor le respondio: '¡Tú lo sabes, mi Señor!'//",
          "//Esta iglesia vivirá, esta iglesia vivirá, esta iglesia vivirá, Tu lo sabes mi Señor//",
          "Jehova le dijo...",
          "4",
          "//A la luna yo no quiero ir, ni tampoco quiero ir al sol// //Pero si quiero ir mas allá del Sol, mas allá del Sol donde está Jesús//",
          "5",
          "//Allá en el cielo, alla en el cielo, alla en el cielo, no habrá tristeza ni llanto ni mas dolor, porque estaremos toditos juntos allá en el cielo, alabando al Salvador//",
          "6",
          "//Esta iglesia se ira de esta tierra, porque aqui no está su mansión, volaremos con gozo a los cielos, adorando a Jesús el Señor, volaremos con gozo a los cielos, adorando a Jesús el Señor//",
          "7",
          "//Cuando Cristo venga en Gloria, yo no me quiero quedar//, ///Seremos levantados con Poder/// Hacia la nueva Jerusalén",
          "///Si tú te vas, yo también/// hacia la nueva Jerusalén",
          "9",
          "//Que alegres los creyentes, que alegres los creyentes, que alegres los creyentes que alaban al Señor//",
          "//Ya no hay tristeza, ya no hay dolor para los creyentes que alaban al Señor//"
        ],
        audio: "audio/cancion2.mp3"
      },
      {
        titulo: "Seguidilla 4",
        letra: [
          "1",
          "Yo he creído en un poder que no se toca, Yo he creido en un Poder que no se ve, //Yo he creido en un poder que no se toca ni se ve pero se siente en el corazón//",
          "Tu has creído en un poder que no se toca, Tu has creído en un poder que no se ve, //Tú has creído en un poder que no se toca ni se ve, pero se siente en el corazón//",
          "Hemos creído en un poder que no se toca, Hemos creído en un poder que no se ve, //Hemos creído en un poder que no se toca ni se ve pero se siente en el corazón",
          "2",
          "Pon aceite en mi lampara Señor, Pon aceite en mi lampara Señor, Que yo quiero servirte con amor, pon aceite en mi lampara Señor.",
          "Señor Jesús, Tu eres mi vida, Señor Jesús tu eres mi amor. //Salvaste mi alma perdida, por eso te alabo con el corazón// //Con el corazón//",
          "3",
          "//Si no hubiera sido por el Señor//",
          "//Mi alma se hubiera perdido si no hubiera sido por el Señor//",
          "//Ahora mi alma contenta está//",
          "//Su sangre lavó mis pecados, ya soy perdonado por el Señor//",
          "4",
          "//Yo no elgí a Cristo, Cristo me eligió a mi, por eso soy feliz, por eso soy feliz//",
          "//Que gozo es saber que a Cristo Jesús, yo no lo elegí, Él me eligió a mi//",
          "5",
          "//Vamos escalando peldaños, vamos mirando a Jesus, sigamos el camino angosto que Con Cristo es mucho mejor//",
          "//Ya viene la recompensa, Ya no voy a llorar, tengo a Cristo en mi vida, por eso quiero escalar//",
          "//A veces me siento debil, ya no quiero escalar, alzo mis manos al cielo, viene Cristo y fuerzas me da//",
          "6",
          "//Ven, ven, ven, Espíritu Divino, ven, ven, ven, acercate a mi//",
          "//Apoderate, apoderate, apoderate de todo mi ser//",
          "7",
          "////Jesús querido queremos tu poder////",
          "//Con tu poder los sordos oyen, con tu poder los ciegos pueden ver, con tu poder los mudos también hablan, Jesús querido, queremos tu poder//",
          "8",
          "//Quien, quien, quien, como Jehová que con su poder el mar abrió//",
          "Oirán las naciones lo que hizo, temblarán cuando vean sus prodigios, //Gloria gloria cantaran, con alegria danzaran y Jehová a su pueblo salvará//",
          "9",
          "//En esta noche moverá su mano el Señor, su mano el Señor, su mano//",
          "//Y el Espirítu Santo descenderá haciendo maravillas en este lugar//"
        ],
        audio: "audio/cancion2.mp3"
      },
      {
        titulo: "Seguidilla 5",
        letra: [
          "1",
          "Despierta, oh alma mía, despierta y alaba a Dios, despierta canta alabanzas a aquel que es Único Señor, Despierta, oh alma mía, permanece en oracíon, //no olvides que la batalla ya fue ganada por el Señor//",
          "2",
          "//Para Ti, Oh Jehová, Para Ti quiero cantar, siento gozo en el alma cuando canto para Ti//",
          "//Por tu grande amor tenemos paz y gozo y mi alma se goza cuando canto para Ti",
          "3",
          "//¿Quién es el rey? Jehová// ¿Quién es el rey de Israel?",
          "//¿Quien es el rey? Jehová// ¿Quién es el rey de Israel?",
          "Jehová es, fuerte y poderoso, Jehová es grande en las batallas, Jehová es fuerte y poderoso",
          "//¿Quien es el rey? Jehová// ¿Quién es el rey de Israel?",
          "4",
          "//Únete más, unete mas y alabaremos, al Dios del cielo, Jehová de los ejércitos//",
          "//mi alma se goza cuando está alabando a Jehová//",
          "//Estaras tu velando como las diez virgenes//",
          "//Y a media noche vino el esposo y las que estaban apercibidas fueron con Él//",
          "5",
          "//El maestro de Galilea pasando va//",
          "//déjalo que te toque, déjalo que te toque, déjalo que te toque y recibe la bendición//",
          "//El maestro de Galilea ya me tocó//",
          "//Canta con alegría, ora con devoción, no dejes que el enemigo te robe la bendición//",
          "6",
          "//Los cielos serán abiertos como un gran libro//","///Mi alma, mi alma volará/// volará","///Mi alma, mi alma volará/// volará",
          "7",
          "//Los que esperan, los que esperan, los que esperan en Jehová Correran y no se cansarán//",
          "//Cómo las águilas, como las águilas, como las águilas al cielo volarán//",
          "8",
          "//Ven, ven, ven, Espíritu Divino, ven, ven, ven, acercate a mi//",
          "//Apodérate, apodérate, apodérate de todo mi ser",
          "9",
          "////Jesús querido queremos tu poder////","//Con Tu Poder, los sordos oyen, con tu poder, los ciegos pueden ver, con tu poder, los mudos también hablan, Jesús querido queremos tu poder//"
        ],
        audio: "audio/cancion2.mp3"
      },
      {
        titulo: "Seguidilla 6",
        letra: [
          "1",
          "//No hay saludo mas bonito, que el saludo del Cristiano// //Se da la mano y se dice Dios te bendiga mi hermano//",
          "//Dios te bendiga, Dios te Bendiga, Dios te Bendiga hermano//",
          "2",
          "//Una cosa sé que habiendo sido ciego, ahora veo la luz de mi Jesús//",
          "//La luz divina que me dio su amor, cuando por la Fe yo mire al Salvador//",
          "//Y los fariseos decian sin cesar; ese hombre es pecador, ese hombre es pecador//",
          "//Si es pecador, yo no lo se, lo único que sé es que Él me salvó//",
          "3",
          "//Los que esperan, los que esperan en Jehová//",
          "//Como las águilas, como las águilas, sus alas levantarán//",
          "Correrán y no se cansarán, caminarán, no se fatigarán",
          "//Nuevas fuerzas tendrán, nuevas fuerzas tendrán, los que esperan, los que esperan en Jehová//",
          "4",
          "//Dentro de mi corazón no puedo tener a nadie//","//Porque tiene un candadito, porque tiene un candadito y Jesús tiene la llave//",
          "//Amémonos de corazón, no de labios ni de oidos//","Para cuando Cristo venga, para cuando Cristo venga nos encuentre preparados//",
          "//Como puedes tu orar enojado con tu hermano//","//Dios no escucha la oración, Dios no escucha la oración si no te has reconciliado//",
          "5",
          "///Santo/// Dicen los serafines, ///Santo/// es el Señor Jehová, ///Santo/// El Señor que vive",
          "//Santo, tres veces Santo, la Tierra llena de su gloria está//",
          "6",
          "//El cielo y la tierra pasarán, mas Su Palabra no pasará//",
          "//No, no, no pasará//",
          "7",
          "Estamos pidiendo un avivamiento, estamos pidiendo el poder de Dios, El Poder del Padre, El Poder del Hijo",
          "//El Poder del Santo Espíritu de Dios//",
          "8",
          "Más a vosotros los que Teméis mi nombre, os alumbrará el sol de Justicia, y en sus alas traerá su Salvación y Saltaréis como becerros en la manada",
          "//Saltaréis, saltaréis, saltaréis como becerros en la manada//",
          "9",
          "//Su Gloria cubrió los cielos, y la tierra se lleno de su alabanza//",
          "//Y el resplandor fue como la luz, rayos brillantes salían de sus manos//",
          "//Y ahí estaba escondido su Poder//"
        ],
        audio: "audio/cancion2.mp3"
      },
    // Agrega más canciones aquí
  ];
  
  // Función para cargar el índice de canciones
  function cargarIndice() {
    const indice = document.getElementById("indice");
    canciones.forEach((cancion, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = cancion.titulo;
      a.href = "#";
      a.addEventListener("click", () => mostrarCancion(index));
      li.appendChild(a);
      indice.appendChild(li);
    });
  }
  
  // Función para mostrar la canción seleccionada
  function mostrarCancion(index) {
    const cancion = canciones[index];
    const contenido = document.getElementById("contenido-cancion");
  
    // Crear el contenido de la canción con la letra subdividida en párrafos
    let letraHTML = '';
    cancion.letra.forEach(parrafo => {
      letraHTML += `<p>${parrafo}</p>`; // Cada párrafo se envuelve en una etiqueta <p>
    });
  
    contenido.innerHTML = `
      <h2>${cancion.titulo}</h2>
      <audio controls>
        <source src="${cancion.audio}" type="audio/mp3">
        Tu navegador no soporta este formato de audio.
      </audio>
      ${letraHTML} <!-- Inserta los párrafos -->
    `;
  }
  
  // Cargar el índice cuando la página cargue
  window.onload = cargarIndice;
  