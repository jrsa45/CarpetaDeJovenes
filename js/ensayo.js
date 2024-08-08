document.addEventListener('DOMContentLoaded', () => {
    const indexList = document.getElementById('index-list');
    const mediaGallery = document.getElementById('media-gallery');
    const enlargedImageContainer = document.getElementById('enlarged-image-container');
    const searchInput = document.getElementById('searchInput');

    const mediaFiles = [
        { id: 1, name: 'N1 Cuerpo de Jovenes de Jesucristo', image: '../archives/img/N1cuerpodejovenes.jpg', audio: '../archives/aud/N1cuerpodejovenes.mp3' },
        { id: 2, name: 'N2 La Gloria es de El', image: '../archives/img/N2lagloriaesdeel.jpg', audio: '../archives/aud/N2hayquecomprender.mp3' },
        { id: 3, name: 'N3 Vengo a ti con mi carga Señor', image: '../archives/img/N3vengoaticonmicargaseñor.jpg', audio: '../archives/aud/N3vengoaticonmicarga.mp3' },
        { id: 4, name: 'N4 Cristo es la medicina', image: '../archives/img/N4cristoeslamedicina.jpg', audio: '../archives/aud/N4cristoeslamedicina.mp3' },
        { id: 5, name: 'N5 Te mereces toda Gloria', image: '../archives/img/N5temerecestodagloria.jpg', audio: '../archives/aud/N5temerecestodagloria.mp3' },
        { id: 6, name: 'N6 Algunos cantan', image: '../archives/img/N6algunoscantan.jpg', audio: '../archives/aud/N6algunoscantan.mp3' },
        { id: 7, name: 'N7 Canticos Celeste', image: '../archives/img/N7canticoscelestes.jpg', audio: '../archives/aud/N7canticosceleste.mp3' },
        { id: 8, name: 'N8 Fui encontrado', image: '../archives/img/N8fuiencontrado.jpg', audio: '../archives/aud/N8fuiencontrado.mp3' },
        { id: 9, name: 'N9 Que está pasando hermano mio', image: '../archives/img/N9queestapasandohermanomio.jpg', audio: '../archives/aud/N9queestapasando.mp3' },
        { id: 10, name: 'N10 Aunque todos te negaren', image: '../archives/img/N10aunquetodostenegaren.jpg', audio: '../archives/aud/N10aunquetodostenegaren.mp3' },
        { id: 11, name: 'N11 Cuando David cuidaba las ovejas', image: '../archives/img/N11cuandodavidcuidabalasovejas.jpg', audio: '../archives/aud/N11cuandodavid.mp3' },
        { id: 12, name: 'N12 El buen samaritano', image: '../archives/img/N12elbuensamaritano.jpg', audio: '../archives/aud/N12elbuensamaritano.mp3' },
        { id: 13, name: 'N13 Como el ciervo ansioso brama', image: '../archives/img/N13comoelciervoansiosobrama.jpg', audio: '../archives/aud/N13comoelciervoansiosobrama.mp3' },
        { id: 14, name: 'N14 Dios comprende tus lagrimas', image: '../archives/img/N14dioscomprendetulagrimas.jpg', audio: '../archives/aud/N14dioscomprendetuslagrimas.mp3' },
        { id: 15, name: 'N15 Que tiene tu Espíritu', image: '../archives/img/N15quetienetuespiritu.jpg', audio: '../archives/aud/N15quetienetuespiritu.mp3' },
        { id: 16, name: 'N16 Huestes de Israel', image: '../archives/img/N16huestesdeisrael.jpg', audio: '../archives/aud/N16huestesdeisrael.mp3' },
        { id: 17, name: 'N17 Alla en un lejano monte', image: '../archives/img/N17allaenunlejanomonte.jpg', audio: '../archives/aud/N17allaenunlejanomonte.mp3' },
        { id: 18, name: 'N18 Medley 1', image: '../archives/img/N18medley.jpg', audio: '../archives/aud/N18medley1.mp3' },
        { id: 19, name: 'N19 De Cristo cada día', image: '../archives/img/N19decristocadadia.jpg', audio: '../archives/aud/N19decristocadadia.mp3' },
        { id: 20, name: 'N20 Dios no se equivoca', image: '../archives/img/N20diosnoseequivoca.jpg', audio: '../archives/aud/N20diosnoseequivoca.mp3' },
        { id: 21, name: 'N21 Cristo yo creo en ti', image: '../archives/img/N21cristoyocreoenti.jpg', audio: '../archives/aud/N21cristoyocreoenti.mp3' },
        { id: 22, name: 'N22 Dame fuerza Señor', image: '../archives/img/N22damefuerzasseñor.jpg', audio: '../archives/aud/N22damefuerzasseñor.mp3' },
        { id: 23, name: 'N23 Te preguntas por qué', image: '../archives/img/N23tepreguntasporque.jpg', audio: '../archives/aud/N23tepreguntasporque.mp3' },
        { id: 24, name: 'N24 De la montaña', image: '../archives/img/N24delamontaña.jpg', audio: '../archives/aud/N24delamontaña.mp3' },
        { id: 25, name: 'N25 Se maravillaban', image: '../archives/img/N25semaravillaban.jpg', audio: '../archives/aud/N25semaravillaban.mp3' },
        { id: 26, name: 'N26 El mar está tranquilo', image: '../archives/img/N26elmarestatranquilo.jpg', audio: '../archives/aud/N26elmarestatranquilo.mp3' },
        { id: 27, name: 'N27 Junto al Señor', image: '../archives/img/N27juntoalseñor.jpg', audio: '../archives/aud/N27juntoalseñor.mp3' },
        { id: 28, name: 'N28 Permiteme Señor', image: '../archives/img/N28permitemeseñor.jpg', audio: '../archives/aud/N28permitemeseñor.mp3' },
        { id: 29, name: 'N29 La zarza', image: '../archives/img/N29lazarza.jpg', audio: '../archives/aud/N29lazarza.mp3' },
        { id: 30, name: 'N30 Cuando miro los cielos', image: '../archives/img/N30cuandomiroloscielos.jpg', audio: '../archives/aud/N30cuandomiroloscielos.mp3' },
        { id: 31, name: 'N31 Agua Viva', image: '../archives/img/N31aguaviva.jpg', audio: '../archives/aud/N31aguaviva.mp3' },
        { id: 32, name: 'N32 Tiernas Canciones', image: '../archives/img/N32tiernascanciones.jpg', audio: '../archives/aud/N32tiernascanciones.mp3' },
        { id: 33, name: 'N33 Quisiera relatarles', image: '../archives/img/N33quisierarelatarles.jpg', audio: '../archives/aud/N33quisierarelatarles.mp3' },
        { id: 34, name: 'N34 Te Busqué', image: '../archives/img/N34tebusque.jpg', audio: '../archives/aud/N34tebusque.mp3' },
        { id: 35, name: 'N35 En un mar profundo', image: '../archives/img/N35enunmarprofundo.jpg', audio: '../archives/aud/N35enunmarprofundo.mp3' },
        { id: 36, name: 'N36 Como tu siervo Job', image: '../archives/img/N36comotusiervojob.jpg', audio: '../archives/aud/N36comotusiervojob.mp3' },
        { id: 37, name: 'N37 No se por qué', image: '../archives/img/N37noseporque.jpg', audio: '../archives/aud/N37noseporque.mp3' },
        { id: 38, name: 'N38 Oh profundo Amor de Cristo', image: '../archives/img/N38ohprofundoamordecristo.jpg', audio: '../archives/aud/N38ohprofundoamordecristo.mp3' },
        { id: 39, name: 'N39 Te levantaré', image: '../archives/img/N39televantare.jpg', audio: '../archives/aud/N39televantare.mp3' },
        { id: 40, name: 'N40 Ayer le dije adiós', image: '../archives/img/N40ayerledijeadios.jpg', audio: '../archives/aud/N40ayerledijeadios.mp3' },
        { id: 41, name: 'N41 Medley Predicacion', images: ['../archives/img/N41medleypredicacion.jpg', '../archives/img/N41parte2medleypredicacion.jpg'], audio: '../archives/aud/N41medleypredicacion.mp3' },
        { id: 42, name: 'N42 Saliendo del pretorio', image: '../archives/img/N42saliendodelpretorio.jpg', audio: '../archives/aud/N42saliendodelpretorio.mp3' },
        { id: 43, name: 'N43 Hoy dia vi', image: '../archives/img/N43hoydiavi.jpg', audio: '../archives/aud/N43hoydiavi.mp3' },
        { id: 44, name: 'N44 Como quisiera Señor haber vivido', image: '../archives/img/N44comoquisieraseñor.jpg', audio: '../archives/aud/N44comoquisieraseñor.mp3' },
        { id: 45, name: 'N45 Cuando sopla el viento', image: '../archives/img/N45cuandosoplaelviento.jpg', audio: '../archives/aud/N45cuandosoplaelviento.mp3' },
        { id: 46, name: 'N46 Aun el gorrion halla casa', image: '../archives/img/N46cualpajarillovolaba.jpg', audio: '../archives/aud/N46cualpajarillo.mp3' },
        { id: 47, name: 'N47 Yo no sabía', image: '../archives/img/N47yonosabia.jpg', audio: '../archives/aud/N47yonosabia.mp3' },
        { id: 48, name: 'N48 Al contemplar tu inmenso Amor', image: '../archives/img/N48alcontemplartuinmensoamor.jpg', audio: '../archives/aud/N48alcontemplartuinmensoamor.mp3' },
        { id: 49, name: 'N49 Tu me encontraste a mí', image: '../archives/img/N49tumeencontrasteami.jpg', audio: '../archives/aud/N49tumeencontrasteami.mp3' },
        { id: 50, name: 'N50 Todo anuncia su venida', image: '../archives/img/N50todoanunciasuvenida.jpg', audio: '../archives/aud/N50todoanunciasuvenida.mp3' },
        { id: 51, name: 'N51 El Señor es mi luz', image: '../archives/img/N51elseñoresmiluz.jpg', audio: '../archives/aud/N51elseñoresmiluz.mp3' },
        { id: 52, name: 'N52 Oh Gózate', image: '../archives/img/N52ohgozate.jpg', audio: '../archives/aud/N52ohgozate.mp3' },
        { id: 53, name: 'N53 Señor tu viña es Grande', image: '../archives/img/N53señortuviñaesgrande.jpg', audio: '../archives/aud/N53señortuviñaesgrande.mp3' },
        { id: 54, name: 'N54 Pronto los cielos se conmoverán', image: '../archives/img/N54prontoloscielosseconmoveran.jpg', audio: '../archives/aud/N54prontoloscielos.mp3' },
        { id: 55, name: 'N55 Hermoso manto real', image: '../archives/img/N55hermosomantoreal.jpg', audio: '../archives/aud/N55hermosomantoreal.mp3' },
        { id: 56, name: 'N56 Como quisiera ser un mejor Cristiano', image: '../archives/img/N56comoquisieraserunmejorcristiano.jpg', audio: '../archives/aud/N56comoquisieraserunmejorcristiano.mp3' },
        { id: 57, name: 'N57 Ten Confianza', image: '../archives/img/N57tenconfianza.jpg', audio: '../archives/aud/N57tenconfianza.mp3' },
        { id: 58, name: 'N58 Medley 2', image: '../archives/img/N58medley2.jpg', audio: '../archives/aud/N58medley2.mp3' },
        { id: 59, name: 'N59 Vida eterna el prometió', image: '../archives/img/N59vidaeternaelprometio.jpg', audio: '../archives/aud/N59vidaeternaelprometio.mp3' },
        { id: 60, name: 'N60 Creer en Dios', image: '../archives/img/N60creerendios.jpg', audio: '../archives/aud/N60creerendios.mp3' },
        { id: 61, name: 'N61 Muchas Lágrimas', image: '../archives/img/N61muchaslagrimas.jpg', audio: '../archives/aud/N61muchaslagrimas.mp3' },
        { id: 62, name: 'N62 Murió por ti, murió por mi', image: '../archives/img/N62murioportimuriopormi.jpg', audio: '../archives/aud/N62murioportimuriopormi.mp3' },
        { id: 63, name: 'N63 Con cruel dolor', image: '../archives/img/N63concrueldolor.jpg', audio: '../archives/aud/N63concrueldolor.mp3' },
        { id: 64, name: 'N64 Las cosas del mundo', image: '../archives/img/N64lascosasdelmundo.jpg', audio: '../archives/aud/N64lascosasdelmundo.mp3' },
        { id: 65, name: 'N65 La samaritana', image: '../archives/img/N65lasamaritana.jpg', audio: '../archives/aud/N65lasamaritana.mp3' },
        { id: 66, name: 'N66 En la inmensidad', image: '../archives/img/N66enlainmensidad.jpg', audio: '../archives/aud/N66enlainmensidad.mp3' },
        { id: 67, name: 'N67 Cuando Jesucristo venga', image: '../archives/img/N67cuandojesucristovenga.jpg', audio: '../archives/aud/N67cuandojesucristovenga.mp3' },
        { id: 68, name: 'N68 Allá en las playas de Galilea', image: '../archives/img/N68allaenlasplayas.jpg', audio: '../archives/aud/N68allaenlasplayas.mp3' },
        { id: 69, name: 'N69 Al caminar de tu mano', image: '../archives/img/N69alcaminar.jpg', audio: '../archives/aud/N69alcaminar.mp3' },
        { id: 70, name: 'N70 Yo anhelo tocar a Cristo', image: '../archives/img/N70yoanhelotocaracristo.jpg', audio: '../archives/aud/N70yoanhelotocaracristo.mp3' },
        { id: 71, name: 'N71 La Gloria de Jehová', image: '../archives/img/N71lagloriadejehova.jpg', audio: '../archives/aud/N71lagloriadejehova.mp3' },
        { id: 72, name: 'N72 Del cielo se apercibe', image: '../archives/img/N72delcieloseapercibe.jpg', audio: '../archives/aud/N72delcieloseapercibe.mp3' },
        { id: 73, name: 'N73 Camino a Emaus', image: '../archives/img/N73caminoaemaus.jpg', audio: '../archives/aud/N73caminoaemaus.mp3' },
        { id: 74, name: 'N74 Han pasado los meses y los años', image: '../archives/img/N74hanpasadolosmeses.jpg', audio: '../archives/aud/N74hanpasadolosmesesylosaños.mp3' },
        { id: 75, name: 'N75 Las dos huellas', image: '../archives/img/N75lasdoshuellas.jpg', audio: '../archives/aud/N75lasdoshuellas.mp3' },
        { id: 76, name: 'N76 Como podré agradecer', image: '../archives/img/N76comopodreagradecer.jpg', audio: '../archives/aud/N76comopodreagradecer.mp3' },
        { id: 77, name: 'N77 Hoy te siento Señor', image: '../archives/img/N77hoytesientoseñor.jpg', audio: '../archives/aud/N77hoytesientoseñor.mp3' },
        { id: 78, name: 'N78 En la noche sin fin', image: '../archives/img/N78enlanochesinfin.jpg', audio: '../archives/aud/N78enlanochesinfin.mp3' },
        { id: 79, name: 'N79 Tu creaste Señor', image: '../archives/img/N79tucreasteseñor.jpg', audio: '../archives/aud/N79tucreasteseñor.mp3' },
        { id: 80, name: 'N80 Canta hermano canta', image: '../archives/img/N80cantahermanocanta.jpg', audio: '../archives/aud/N80cantahermanocanta.mp3' },
        { id: 81, name: 'N81 Hoy te quiero alabar Señor', image: '../archives/img/N81hoytequieroalabarseñor.jpg', audio: '../archives/aud/N81hoytequieroalabarseñor.mp3' },
        { id: 82, name: 'N82 Yo solo espero ese día', image: '../archives/img/N82yosoloesperoesedia.jpg', audio: '../archives/aud/N82yosoloesperoesedia.mp3' },
        { id: 83, name: 'N83 Oh Jovenes venid', image: '../archives/img/N83ohjovenesvenid.jpg', audio: '../archives/aud/N83ohjovenesvenid.mp3' },
        { id: 84, name: 'N84 Siempre estuviste aqui', image: '../archives/img/N84siempreestuvisteaqui.jpg', audio: '../archives/aud/N84siempreestuvisteaqui.mp3' },
        { id: 85, name: 'N85 Un cielo nuevo', image: '../archives/img/N85uncielonuevo.jpg', audio: '../archives/aud/N85uncielonuevoyunatierranueva.mp3' },
        { id: 86, name: 'N86 En esta noche Señor he comprendido', image: '../archives/img/N86enestanocheseñor.jpg', audio: '../archives/aud/N86enestanocheseñor.mp3' },
        { id: 87, name: 'N87 Solo al pensar', image: '../archives/img/N87soloalpensar.jpg', audio: '../archives/aud/N87soloalpensar.mp3' },
        { id: 88, name: 'N88 Que grande es Dios', image: '../archives/img/N88quegrandeesdios.jpg', audio: '../archives/aud/N88quegrandeesdios.mp3' },
        { id: 89, name: 'N89 Hermanos mios vamos adelante', image: '../archives/img/N89hermanosmios.jpg', audio: '../archives/aud/N89hermanosmios.mp3' },
        { id: 90, name: 'N90 Amale', image: '../archives/img/N90amale.jpg', audio: '../archives/aud/N90amale.mp3' },
        { id: 91, name: 'N91 Caminaba Jesús', image: '../archives/img/N91caminabajesus.jpg', audio: '../archives/aud/N91caminabajesus.mp3' },
        { id: 92, name: 'N92 Señor haz de mi vida', image: '../archives/img/N92señorhazdemivida.jpg', audio: '../archives/aud/N92señorhazdemivida.mp3' },
        { id: 93, name: 'N93 Donde esta el amor', image: '../archives/img/N93dondeestaelamor.jpg', audio: '../archives/aud/N93dondeestaelamor.mp3' },
        { id: 94, name: 'N94 Vagaba yo por el mundo', image: '../archives/img/N94vagabayoporelmundo.jpg', audio: '../archives/aud/N94vagabayoporelmundo.mp3' },
        { id: 95, name: 'N95 Un principe tenemos', image: '../archives/img/N95unprincipetenemos.jpg', audio: '../archives/aud/N95unprincipetenemos.mp3' },
        { id: 96, name: 'N96 Una bendición', image: '../archives/img/N96unabendicion.jpg', audio: '../archives/aud/N96unabendicion.mp3' },
        { id: 97, name: 'N97 Contendamos Jóvenes por la fe', image: '../archives/img/N97contendamosjovenes.jpg', audio: '../archives/aud/N97contendamosjovenes.mp3'},
        { id: 98, name: 'N98 No temeré luchar por el Señor', image: '../archives/img/N98notemere.jpg', audio: '../archives/aud/N98notemere.mp3'},
        { id: 99, name: 'N99 Ya los campos blanco estan', image: '../archives/img/N99yaloscamposblancoestan.jpg', audio: '../archives/aud/N99yaloscamposblancosestan.mp3'},
        { id: 100, name: 'N100 Luces de Gala', image: '../archives/img/N100lucesdegala.jpg', audio: '../archives/aud/N100lucesdegala.mp3'},
        { id: 101, name: 'N101 El buen Pastor', image: '../archives/img/N101elbuenpastor.jpg', audio: '../archives/aud/N101elbuenpastor.mp3'},
        { id: 102, name: 'N102 Como poder volver', image: '../archives/img/N102comopodervolver.jpg', audio: '../archives/aud/N102comopodervolver.mp3'},
        { id: 103, name: 'N103 No dejes pasar el Tiempo', image: '../archives/img/N103nodejespasareltiempo.jpg', audio: '../archives/aud/103nodejespasareltiempo.mp3'},
        { id: 104, name: 'N104 Medley 3', image: '../archives/img/N104medley3.jpg', audio: '../archives/aud/N104medley3.mp3' },
        { id: 105, name: 'N105 Quien toco mi manto', image: '../archives/img/N105quientocomimanto.jpg', audio: '../archives/aud/N105quientocomimanto.mp3' },
        { id: 106, name: 'N106 Yo soy un pobre peregrino', image: '../archives/img/N106yosoyunpobreperegrino.jpg', audio: '../archives/aud/N106yosoyunpobreperegrino.mp3' },
        { id: 107, name: 'N107 Quiero llevarle la Gloria', image: '../archives/img/N107quierollevarlelagloria.jpg', audio: '../archives/aud/N106quierollevarlelagloria.mp3' },
        { id: 108, name: 'N108 Hoy he llegado a tu casa', image: '../archives/img/N108hoyhellegadoatucasa.jpg', audio: '../archives/aud/N108hoyhellegadoatucasa.mp3' },
        { id: 109, name: 'N109 La vara de Aarón', image: '../archives/img/N109lavaradeaaron.jpg', audio: '../archives/aud/N109lavaradeaaron.mp3' },
        { id: 110, name: 'N110 Que negra noche', image: '../archives/img/N110quenegranoche.jpg', audio: '../archives/aud/N110quenegranoche.mp3' },
        { id: 111, name: 'N111 Siempre camine', image: '../archives/img/N111siemprecamine.jpg', audio: '../archives/aud/N111siemprecamine.mp3' },
        { id: 112, name: 'N112 Yo vencere', image: '../archives/img/N112yovencere.jpg', audio: '../archives/aud/N112yovencere.mp3' },
        { id: 113, name: 'N113 Por andar en las veredas', image: '../archives/img/N113porandarenlasveredas.jpg', audio: '../archives/aud/' },
        { id: 114, name: 'N114 Sueño', image: '../archives/img/N114sueño.jpg', audio: '../archives/aud/' },
        { id: 115, name: 'N115 Dios en la creación', image: '../archives/img/N115diosenlacreacion.jpg', audio: '../archives/aud/N115diosenlacreacion.mp3' },
        { id: 116, name: 'N116 La roca de los siglos', image: '../archives/img/N116larocadelossiglos.jpg', audio: '../archives/aud/N116larocadelossiglos.mp3' },
        { id: 117, name: 'N117 ', image: '../archives/img/.jpg', audio: '../archives/aud/.mp3' },
        { id: 118, name: 'N118 Sin Fe', image: '../archives/img/N118sinfe.jpg', audio: '../archives/aud/N118sinfe.mp3' },
        { id: 119, name: 'N119 Queremos Bendiciones para ti', image: '../archives/img/N119queremosbendicionesparati.jpg', audio: '../archives/aud/' },
        { id: 120, name: 'N120 Pon tu Espiritu Santo', image: '../archives/img/N120pontuespiritusanto.jpg', audio: '../archives/aud/N120pontuespiritusanto.mp3' },
        { id: 121, name: 'N121 El te hace libre', image: '../archives/img/N121eltehacelibre.jpg', audio: '../archives/aud/N121eltehacelibre.mp3' },
        { id: 122, name: 'N122 Se que soy nada', image: '../archives/img/N122sequesoynada.jpg', audio: '../archives/aud/N122sequesoynada.mp3' },
        { id: 123, name: 'N123 Oye su voz hoy', image: '../archives/img/N123oyesuvozhoy.jpg', audio: '../archives/aud/N123oyesuvozhoy.mp3' },
        { id: 124, name: 'N124 Al fin Señor mío', image: '../archives/img/N124alfinseñormio.jpg', audio: '../archives/aud/N124alfinseñormio.mp3' },
        { id: 125, name: 'N125 Amado Jesucristo', image: '../archives/img/N125amadojesucristo.jpg', audio: '../archives/aud/N125amadojesucristo.mp3' },
        { id: 126, name: 'N126 Has pensado un momento', image: '../archives/img/N126haspensado.jpg', audio: '../archives/aud/N126haspensado.mp3' },
        { id: 127, name: 'N127 Frena tu marcha', image: '../archives/img/N127frenatumarcha.jpg', audio: '../archives/aud/N127frenatumarcha.mp3' },
        { id: 128, name: 'N128 ', image: '../archives/img/', audio: '../archives/aud/' },
        { id: 129, name: 'N129 ', image: '../archives/img/', audio: '../archives/aud/' },
        { id: 130, name: 'N130 ', image: '../archives/img/', audio: '../archives/aud/' },



        // Agrega más archivos multimedia según sea necesario
    ];

    // Construir el índice y mostrar archivos multimedia al cargar la página
    buildIndex(mediaFiles);
    displayMedia(mediaFiles);

    // Agrega el evento de input al campo de búsqueda
    const searchButton = document.querySelector('.btn-outline-secondary');
    searchButton.addEventListener('click', () => {
    searchMedia(searchInput.value);
    });

    function searchMedia(searchTerm) {
        const filteredMedia = mediaFiles.filter(file => file.id.toString().includes(searchTerm));

        displayMedia(filteredMedia);
    }

    function buildIndex(files) {
        files.forEach(file => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = file.name;
            listItem.addEventListener('click', () => {
                // Al hacer clic en un ítem del índice, mostrar el archivo multimedia
                displayMedia([file]);
            });
            indexList.appendChild(listItem);
        });
    }

    function displayMedia(files) {
        mediaGallery.innerHTML = ''; // Limpiar la galería antes de mostrar nuevos archivos
    
        files.forEach(file => {
            const mediaItem = document.createElement('div');
            mediaItem.classList.add('col-md-4', 'mb-4');
    
            // Mostrar imágenes
            if (file.image) {
                const img = document.createElement('img');
                img.src = file.image;
                img.alt = file.name;
                img.classList.add('img-fluid', 'rounded', 'media-image');
                img.addEventListener('click', () => {
                    // Al hacer clic en la imagen, mostrarla en un área ampliada
                    showEnlargedImage(file.image);
                });
                mediaItem.appendChild(img);
                img.addEventListener('mouseover', () => {
                    img.style.transform = 'scale(1.1)';
                    img.style.transition = 'transform 0.3s ease-in-out';
                });
                img.addEventListener('mouseout', () => {
                    img.style.transform = 'scale(1)';
                    img.style.transition = 'transform 0.3s ease-in-out';
                });
            } else if (file.images && Array.isArray(file.images) && file.images.length > 0) {
                file.images.forEach(imageSrc => {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = file.name;
                    img.classList.add('img-fluid', 'rounded', 'media-image');
                    img.addEventListener('click', () => {
                        // Al hacer clic en la imagen, mostrarla en un área ampliada
                        showEnlargedImage(imageSrc);
                    });
                    mediaItem.appendChild(img);
                    img.addEventListener('mouseover', () => {
                        img.style.transform = 'scale(1.1)';
                        img.style.transition = 'transform 0.3s ease-in-out';
                    });
                    img.addEventListener('mouseout', () => {
                        img.style.transform = 'scale(1)';
                        img.style.transition = 'transform 0.3s ease-in-out';
                    });
                });
            }

            // Mostrar audio (si está presente)
            if (file.audio) {
                const audio = document.createElement('audio');
                audio.src = file.audio;
                audio.controls = true;
                mediaItem.appendChild(audio);
            }

            mediaGallery.appendChild(mediaItem);
        });
    }

    function showEnlargedImage(imageSrc) {
        // Cambia el contenido del contenedor de imagen agrandada
        enlargedImageContainer.innerHTML = '';

        // Crea una nueva imagen agrandada
        const enlargedImg = document.createElement('img');
        enlargedImg.src = imageSrc;
        enlargedImg.alt = 'Enlarged Image';
        enlargedImg.classList.add('enlarged-image');

        // Agrega la nueva imagen al contenedor
        enlargedImageContainer.appendChild(enlargedImg);

        // Muestra el contenedor de imagen agrandada
        enlargedImageContainer.style.display = 'flex';
    }

    // Oculta el contenedor de imagen agrandada al hacer clic fuera de la imagen
    enlargedImageContainer.addEventListener('click', () => {
        enlargedImageContainer.style.display = 'none';
    });

    // Agregar efecto de zoom a las imágenes
    const mediaImages = document.querySelectorAll('.media-image');
    mediaImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });
    });
});