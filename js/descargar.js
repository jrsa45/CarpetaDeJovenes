document.addEventListener('DOMContentLoaded', () => {
    const pdfFiles = [
        { name: 'Descargar Carpeta Completa', url: 'path/to/document3.pdf' },
        { name: 'N1 Cuerpo de Jóvenes y N2 La Glorio es de El', url: 'path/to/document1.pdf' },
        { name: 'N3 Vengo a Ti y N4 Cristo es la medicina ', url: 'path/to/document2.pdf' },
        { name: 'N5 Te mereces toda Gloria y N6 Algunos Cantan ', url: 'path/to/document3.pdf' },
        { name: 'N7 Canticos Celeste y N8 Fui encontrado ', url: 'path/to/document3.pdf' },
        { name: 'N9 Que está Pasando y N10 Aunque Todos te negaren ', url: 'path/to/document3.pdf' },
        { name: 'N11 Cuando David cuidaba y N12 Yo vagué por los caminos', url: 'path/to/document3.pdf' },
        { name: 'N13 Como el ciervo ansioso brama y N14 Dios comprende tus lagrimas', url: 'path/to/document3.pdf' },
        { name: 'N15 Que tiene tu Espíritu y N16 Huestes de Israel', url: 'path/to/document3.pdf' },
        { name: 'N17 Alla en un lejano monte y N18 Medley 1', url: 'path/to/document3.pdf' },
        { name: 'N19 De Cristo cada día y N20 Dios no se equivoca', url: 'path/to/document3.pdf' },
        { name: 'N21 Cristo yo creo en ti y N22 Dame Fuerza Señor', url: 'path/to/document3.pdf' },
        { name: 'N23 Te preguntas por qué y N24 De la montaña', url: 'path/to/document3.pdf' },
        { name: 'N25 Se maravillaban y N26 El mar está tranquilo', url: 'path/to/document3.pdf' },
        { name: 'N27 Junto al Señor y N28 Permiteme Señor', url: 'path/to/document3.pdf' },
        { name: 'N29 La zarza y N30 Cuando miro los cielos', url: 'path/to/document3.pdf' },
        { name: 'N31 Agua viva y 32 Tiernas canciones', url: 'path/to/document3.pdf' },
        { name: 'N33 Quisiera relatarles y 34 Te busqué', url: 'path/to/document3.pdf' },
        { name: 'N35 En un mar profundo y N36 Como tu siervo Job', url: 'path/to/document3.pdf' },
        { name: 'N37 No se por qué y N38 Oh profundo amor de Cristo', url: 'path/to/document3.pdf' },
        { name: 'N39 Te levantaré y N40 Ayer le dije adiós', url: 'path/to/document3.pdf' },
        { name: 'N41 Medley de Predicación hoja 1 y 2', url: 'path/to/document3.pdf' },
        { name: 'N42 Saliendo del pretorio y N43 Hoy dia ví', url: 'path/to/document3.pdf' },
        { name: 'N44 Como quisiera Señor haber vivido y N45 Cuando sopla el viento', url: 'path/to/document3.pdf' },
        { name: 'N46 Aun el gorrión halla casa y N47 Yo no sabía', url: 'path/to/document3.pdf' },
        { name: 'N48 Al contemplar tu inmenso Amor y N49 Tu me encontraste a mi', url: 'path/to/document3.pdf' },
        { name: 'N50 Todo anuncia su venida y N51 El Señor es mi luz', url: 'path/to/document3.pdf' },
        { name: 'N52 Oh Gózate y N53 Señor tu viña es Grande', url: 'path/to/document3.pdf' },
        { name: 'N54 Pronto los cielos se conmoverán y N55 Hermoso manto real', url: 'path/to/document3.pdf' },
        { name: 'N56 Como quisiera ser un mejor Cristiano y N57 Ten confianza', url: 'path/to/document3.pdf' },
        { name: 'N58 Medley 2 y N59 Vida eterna Él prometió', url: 'path/to/document3.pdf' },
        { name: 'N60 Creer en Dios y N61 Muchas lágrimas', url: 'path/to/document3.pdf' },
        { name: 'N62 Murió por tí y N63 Con cruel dolor', url: 'path/to/document3.pdf' },
        { name: 'N64 Las cosas del mundo y N65 La samaritana', url: 'path/to/document3.pdf' },
        { name: 'N66 En la inmensidad y N67 Cuando Jesucristo venga', url: 'path/to/document3.pdf' },
        { name: 'N68 Allá en las playas de Galilea y N69 Al caminar de tu mano', url: 'path/to/document3.pdf' },
        { name: 'N70 Yo anhelo tocar a Cristo y N71 La Gloria de Jehová', url: 'path/to/document3.pdf' },
        { name: 'N72 Del cielo se apercibe y N73 Camino a Emaús', url: 'path/to/document3.pdf' },
        { name: 'N74 Han pasado los meses y N75 Las dos huellas', url: 'path/to/document3.pdf' },
        { name: 'N76 Cómo podré agradecer y N77 Hoy te siento Señor', url: 'path/to/document3.pdf' },
        { name: 'N78 En la noche sin fin y N79 Tú creaste Señor', url: 'path/to/document3.pdf' },
        { name: 'N80 Canta hermano canta y N81 Hoy te quiero alabar Señor', url: 'path/to/document3.pdf' },
        { name: 'N82 Yo solo espero ese día y N83 Oh Jóvenes venid', url: 'path/to/document3.pdf' },
        { name: 'N84 Siempre estuviste aquí y N85 Un cielo nuevo', url: 'path/to/document3.pdf' },
        { name: 'N86 En esta noche Señor he comprendido y N87 Solo al pensar', url: 'path/to/document3.pdf' },
        { name: 'N88 Que grande es Dios y N89 Hermanos mios vamos adelante', url: 'path/to/document3.pdf' },
        { name: 'N90 Amalé y N91 Caminaba Jesús', url: 'path/to/document3.pdf' },
        { name: 'N92 Señor haz de mi vida y N93 Donde está el amor', url: 'path/to/document3.pdf' },
        { name: 'N94 Vagaba yo por el mundo y N95 Un principe tenemos', url: 'path/to/document3.pdf' },
        { name: 'N96 Una bendición y N97 Contendamos Jóvenes por la fe', url: 'path/to/document3.pdf' },
        { name: 'N98 No temeré y N99 Ya los campos blancos están', url: 'path/to/document3.pdf' },
        { name: 'N100 Luces de Gala y N101 El buen pastor', url: 'path/to/document3.pdf' },
        { name: 'N102 Como poder volver y N103 No dejes pasar el tiempo', url: 'path/to/document3.pdf' },
        { name: 'N104 Medley 3 y N105 Quien tocó mi manto ', url: 'path/to/document3.pdf' },
        { name: 'N106 Yo soy un pobre peregrino y N107 Quiero llevarle la Gloria', url: 'path/to/document3.pdf' },
        { name: 'N108 Hoy he llegado a tu casa y N109 La vara de Aarón', url: 'path/to/document3.pdf' },
        { name: 'N110 Que negra noche y N111 Siempre caminé', url: 'path/to/document3.pdf' },
        { name: 'N112 Yo venceré y N113 Por andar en las veredas', url: 'path/to/document3.pdf' },
        { name: 'N114 Sueño y N115 Dios en la creación', url: 'path/to/document3.pdf' },
        { name: 'N116 La roca de los siglos y N117 Quien tocó mi manto', url: 'path/to/document3.pdf' },
        { name: 'N118 Sin Fe es imposible y N119 Queremos bendiciones para Ti ', url: 'path/to/document3.pdf' },
        { name: 'N000 ', url: 'path/to/document3.pdf' },

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
