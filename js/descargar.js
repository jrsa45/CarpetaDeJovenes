document.addEventListener('DOMContentLoaded', () => {
    const pdfFiles = [
        { name: 'N1 Cuerpo de Jóvenes y N2 La Glorio es de El', url: '../archives/pdf/Alabanzas 1 y 2.pdf' },
        { name: 'N3 Vengo a Ti y N4 Cristo es la medicina ', url: '../archives/pdf/Alabanzas 3 y 4pdf' },
        { name: 'N5 Te mereces toda Gloria y N6 Algunos Cantan ', url: '../archives/pdf/Alabanzas 5 y 6.pdf' },
        { name: 'N7 Canticos Celeste y N8 Fui encontrado ', url: '../archives/pdf/Alabanzas 7 y 8.pdf' },
        { name: 'N9 Que está Pasando y N10 Aunque Todos te negaren ', url: '../archives/pdf/Alabanzas 9 y 10.pdf' },
        { name: 'N11 Cuando David cuidaba y N12 Yo vagué por los caminos', url: '../archives/pdf/Alabanzas 11 y 12.pdf' },
        { name: 'N13 Como el ciervo ansioso brama y N14 Dios comprende tus lagrimas', url: '../archives/pdf/Alabanzas 13 y 14.pdf' },
        { name: 'N15 Que tiene tu Espíritu y N16 Huestes de Israel', url: '../archives/pdf/Alabanzas 15 y 16.pdf' },
        { name: 'N17 Alla en un lejano monte y N18 Medley 1', url: '../archives/pdf/Alabanzas 17 y 18.pdf' },
        { name: 'N19 De Cristo cada día y N20 Dios no se equivoca', url: '../archives/pdf/Alabanzas 19 y 20.pdf' },
        { name: 'N21 Cristo yo creo en ti y N22 Dame Fuerza Señor', url: '../archives/pdf/Alabanzas 21 y 22.pdf' },
        { name: 'N23 Te preguntas por qué y N24 De la montaña', url: '../archives/pdf/Alabanzas 23 y 24.pdf' },
        { name: 'N25 Se maravillaban y N26 El mar está tranquilo', url: '../archives/pdf/Alabanzas 25 y 26.pdf' },
        { name: 'N27 Junto al Señor y N28 Permiteme Señor', url: '../archives/pdf/Alabanzas 27 y 28.pdf' },
        { name: 'N29 La zarza y N30 Cuando miro los cielos', url: '../archives/pdf/Alabanzas 29 y 30.pdf' },
        { name: 'N31 Agua viva y 32 Tiernas canciones', url: '../archives/pdf/Alabanzas 31 y 32.pdf' },
        { name: 'N33 Quisiera relatarles y 34 Te busqué', url: '../archives/pdf/Alabanzas 33 y 34.pdf' },
        { name: 'N35 En un mar profundo y N36 Como tu siervo Job', url: '../archives/pdf/Alabanzas 35 y 36.pdf' },
        { name: 'N37 No se por qué y N38 Oh profundo amor de Cristo', url: '../archives/pdf/Alabanzas 37 y 38.pdf' },
        { name: 'N39 Te levantaré y N40 Ayer le dije adiós', url: '../archives/pdf/Alabanzas 39 y 40.pdf' },
        { name: 'N41 Medley de Predicación hoja 1 y 2', url: '../archives/pdf/Alabanzas 41.pdf' },
        { name: 'N42 Saliendo del pretorio y N43 Hoy dia ví', url: '../archives/pdf/Alabanzas 42 y 43.pdf' },
        { name: 'N44 Como quisiera Señor haber vivido y N45 Cuando sopla el viento', url: '../archives/pdf/Alabanzas 44 y 45.pdf' },
        { name: 'N46 Aun el gorrión halla casa y N47 Yo no sabía', url: '../archives/pdf/Alabanzas 46 y 47.pdf' },
        { name: 'N48 Al contemplar tu inmenso Amor y N49 Tu me encontraste a mi', url: '../archives/pdf/Alabanzas 48 y 49.pdf' },
        { name: 'N50 Todo anuncia su venida y N51 El Señor es mi luz', url: '../archives/pdf/Alabanzas 50 y 51.pdf' },
        { name: 'N52 Oh Gózate y N53 Señor tu viña es Grande', url: '../archives/pdf/Alabanzas 52 y 53.pdf' },
        { name: 'N54 Pronto los cielos se conmoverán y N55 Hermoso manto real', url: '../archives/pdf/Alabanzas 54 y 55.pdf' },
        { name: 'N56 Como quisiera ser un mejor Cristiano y N57 Ten confianza', url: '../archives/pdf/Alabanzas 56 y 57.pdf' },
        { name: 'N58 Medley 2 y N59 Vida eterna Él prometió', url: '../archives/pdf/Alabanzas 58 y 59.pdf' },
        { name: 'N60 Creer en Dios y N61 Muchas lágrimas', url: '../archives/pdf/Alabanzas 60 y 61.pdf' },
        { name: 'N62 Murió por tí y N63 Con cruel dolor', url: '../archives/pdf/Alabanzas 62 y 63.pdf' },
        { name: 'N64 Las cosas del mundo y N65 La samaritana', url: '../archives/pdf/Alabanzas 64 y 65.pdf' },
        { name: 'N66 En la inmensidad y N67 Cuando Jesucristo venga', url: '../archives/pdf/Alabanzas 66 y 67.pdf' },
        { name: 'N68 Allá en las playas de Galilea y N69 Al caminar de tu mano', url: '../archives/pdf/Alabanzas 68 y 69.pdf' },
        { name: 'N70 Yo anhelo tocar a Cristo y N71 La Gloria de Jehová', url: '../archives/pdf/Alabanzas 70 y 71.pdf' },
        { name: 'N72 Del cielo se apercibe y N73 Camino a Emaús', url: '../archives/pdf/Alabanzas 72 y 73.pdf' },
        { name: 'N74 Han pasado los meses y N75 Las dos huellas', url: '../archives/pdf/Alabanzas 74 y 75.pdf' },
        { name: 'N76 Cómo podré agradecer y N77 Hoy te siento Señor', url: '../archives/pdf/Alabanzas 76 y 77.pdf' },
        { name: 'N78 En la noche sin fin y N79 Tú creaste Señor', url: '../archives/pdf/Alabanzas 78 y 79.pdf' },
        { name: 'N80 Canta hermano canta y N81 Hoy te quiero alabar Señor', url: '../archives/pdf/Alabanzas 80 y 81.pdf' },
        { name: 'N82 Yo solo espero ese día y N83 Oh Jóvenes venid', url: '../archives/pdf/Alabanzas 82 y 83.pdf' },
        { name: 'N84 Siempre estuviste aquí y N85 Un cielo nuevo', url: '../archives/pdf/Alabanzas 84 y 85.pdf' },
        { name: 'N86 En esta noche Señor he comprendido y N87 Solo al pensar', url: '../archives/pdf/Alabanzas 86 y 87.pdf' },
        { name: 'N88 Que grande es Dios y N89 Hermanos mios vamos adelante', url: '../archives/pdf/Alabanzas 88 y 89.pdf' },
        { name: 'N90 Amalé y N91 Caminaba Jesús', url: '../archives/pdf/Alabanzas 90 y 91.pdf' },
        { name: 'N92 Señor haz de mi vida y N93 Donde está el amor', url: '../archives/pdf/Alabanzas 92 y 93.pdf' },
        { name: 'N94 Vagaba yo por el mundo y N95 Un principe tenemos', url: '../archives/pdf/Alabanzas 94 y 95.pdf' },
        { name: 'N96 Una bendición y N97 Contendamos Jóvenes por la fe', url: '../archives/pdf/Alabanzas 96 y 97.pdf' },
        { name: 'N98 No temeré y N99 Ya los campos blancos están', url: '../archives/pdf/Alabanzas 98 y 99.pdf' },
        { name: 'N100 Luces de Gala y N101 El buen pastor', url: '../archives/pdf/Alabanzas 100 y 101.pdf' },
        { name: 'N102 Como poder volver y N103 No dejes pasar el tiempo', url: '../archives/pdf/Alabanzas 102 y 103.pdf' },
        { name: 'N104 Medley 3 y N105 Quien tocó mi manto ', url: '../archives/pdf/Alabanzas 104 y 105.pdf' },
        { name: 'N106 Yo soy un pobre peregrino y N107 Quiero llevarle la Gloria', url: '../archives/pdf/Alabanzas 106 y 107.pdf' },
        { name: 'N108 Hoy he llegado a tu casa y N109 La vara de Aarón', url: '../archives/pdf/Alabanzas 108 y 109.pdf' },
        { name: 'N110 Que negra noche y N111 Siempre caminé', url: '../archives/pdf/Alabanzas 110 y 111.pdf' },
        { name: 'N112 Yo venceré y N113 Por andar en las veredas', url: '../archives/pdf/Alabanzas 112 y 113.pdf' },
        { name: 'N114 Sueño y N115 Dios en la creación', url: '../archives/pdf/Alabanzas 114 y 115.pdf' },
        { name: 'N116 La roca de los siglos y N117 Quien tocó mi manto', url: '../archives/pdf/Alabanzas 116 y 117.pdf' },
        { name: 'N118 Sin Fe es imposible y N119 Queremos bendiciones para Ti ', url: '../archives/pdf/Alabanzas 118 y 119.pdf' },
        { name: 'N120 Pon tu Espíritu Santo y N121 El te hace libre ', url: '../archives/pdf/Alabanzas 120 y 121.pdf' },
        { name: 'N122 Se que soy nada y N123 Oye su voz hoy ', url: '../archives/pdf/Alabanzas 122 y 123.pdf' },
        { name: 'N124 Al fin Señor mio y N125 Amado Jesucristo ', url: '../archives/pdf/Alabanzas 124 y 125.pdf' },
        { name: 'N126 Has pensado un momento y N127 Frena tu marcha ', url: '../archives/pdf/Alabanzas 126 y 127.pdf' },
        { name: 'N128 A veces pensamos hermanos y N129 ¿Como estara la Iglesia? ', url: '../archives/pdf/Alabanzas 128 y 129.pdf' },
        { name: 'N130 Había un hombre y N131 Me Alejaba', url: '../archives/pdf/Alabanzas 130 y 131.pdf' },
        { name: 'N132 Hoy llego hasta tu casa y 133 Se mueven las aguas', url: '../archives/pdf/Alabanzas 132 y 133.pdf' },
        { name: 'N134 ¿Por que temer? y 135 Glorioso encuentro', url: '../archives/pdf/Alabanzas 134 y 135.pdf' },
        { name: 'N136  No Temas y N137 Esta Aqui', url: '../archives/pdf/Alabanzas 136 y 137.pdf' },
        { name: 'N138  No Temas', url: '../archives/pdf/Alabanzas 138.pdf' },
        { name: 'N139 Bello Ropaje y N140 Dicen', url: '../archives/pdf/Alabanzas 139 y 140.pdf' },
        { name: 'N141 El ciego Bartimeo y N142 Has puesto tu mirada', url: '../archives/pdf/Alabanzas 141 y 142.pdf'},
        { name: 'N143 Cuantos Creen y N144 Aunque solo lo dejaron', url: '../archives/pdf/Alabanzas 143 y 144.pdf'},
        { name: 'N145 Vive el Señor y N146 Pero tu Amor', url: '../archives/pdf/Alabanzas 145 y 146.pdf'},
        { name: 'N147 Vagando en soledad y N148 Si no cuesta nada', url: '../archives/pdf/Alabanzas 147 y 148.pdf'},
        { name: 'N149 Salvado Fui y N150 Esa Duda', url: '../archives/pdf/Alabanzas 149 y 150.pdf'},


        // Agrega más archivos PDF según sea necesario
    ];

    const pdfList = document.getElementById('pdf-list');
    const searchInput = document.getElementById('search');

    function renderList(files) {
        pdfList.innerHTML = '';
        files.forEach(pdf => {
            const li = document.createElement('li');
            li.id = pdf.id;
            const a = document.createElement('a');
            a.textContent = pdf.name;
            a.href = pdf.url;
            a.download = pdf.name;
            li.appendChild(a);
            pdfList.appendChild(li);
        });
    }

    renderList(pdfFiles);

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFiles = pdfFiles.filter(pdf => pdf.name.toLowerCase().includes(searchTerm));
        renderList(filteredFiles);
    });

});
