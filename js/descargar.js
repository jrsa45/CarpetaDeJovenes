document.addEventListener('DOMContentLoaded', () => {
    const pdfFiles = [
        { name: 'N1 Cuerpo de Jóvenes de Jesucristo', url: 'path/to/document1.pdf' },
        { name: 'N2 ', url: 'path/to/document2.pdf' },
        { name: 'N3 ', url: 'path/to/document3.pdf' },
        { name: 'N4 ', url: 'path/to/document3.pdf' },
        { name: 'N5 ', url: 'path/to/document3.pdf' },
        { name: 'N6 ', url: 'path/to/document3.pdf' },
        { name: 'N7 ', url: 'path/to/document3.pdf' },
        { name: 'N8 ', url: 'path/to/document3.pdf' },
        { name: 'N9 ', url: 'path/to/document3.pdf' },
        { name: 'N10 ', url: 'path/to/document3.pdf' },
        { name: 'N11 ', url: 'path/to/document3.pdf' },
        { name: 'N12 ', url: 'path/to/document3.pdf' },
        { name: 'N13 ', url: 'path/to/document3.pdf' },
        { name: 'N14 ', url: 'path/to/document3.pdf' },
        { name: 'N15 ', url: 'path/to/document3.pdf' },
        { name: 'N16 ', url: 'path/to/document3.pdf' },
        { name: 'N17 ', url: 'path/to/document3.pdf' },
        { name: 'N18 ', url: 'path/to/document3.pdf' },
        { name: 'N19 ', url: 'path/to/document3.pdf' },
        { name: 'N20 ', url: 'path/to/document3.pdf' },
        { name: 'N21 ', url: 'path/to/document3.pdf' },
        { name: 'N22 ', url: 'path/to/document3.pdf' },
        { name: 'N23 ', url: 'path/to/document3.pdf' },
        { name: 'N24 ', url: 'path/to/document3.pdf' },
        { name: 'N25 ', url: 'path/to/document3.pdf' },
        { name: 'N26 ', url: 'path/to/document3.pdf' },
        { name: 'N27 ', url: 'path/to/document3.pdf' },
        { name: 'N28 ', url: 'path/to/document3.pdf' },
        { name: 'N29 ', url: 'path/to/document3.pdf' },
        { name: 'N30 ', url: 'path/to/document3.pdf' },
        { name: 'N31 ', url: 'path/to/document3.pdf' },
        { name: 'N32 ', url: 'path/to/document3.pdf' },
        { name: 'N33 ', url: 'path/to/document3.pdf' },
        { name: 'N34 ', url: 'path/to/document3.pdf' },
        { name: 'N35 ', url: 'path/to/document3.pdf' },
        { name: 'N36 ', url: 'path/to/document3.pdf' },
        { name: 'N37 ', url: 'path/to/document3.pdf' },
        { name: 'N38 ', url: 'path/to/document3.pdf' },
        { name: 'N39 ', url: 'path/to/document3.pdf' },
        { name: 'N40 ', url: 'path/to/document3.pdf' },
        { name: 'N41 ', url: 'path/to/document3.pdf' },
        { name: 'N42 ', url: 'path/to/document3.pdf' },
        { name: 'N43 ', url: 'path/to/document3.pdf' },
        { name: 'N44 ', url: 'path/to/document3.pdf' },
        { name: 'N45 ', url: 'path/to/document3.pdf' },
        { name: 'N46 ', url: 'path/to/document3.pdf' },
        { name: 'N47 ', url: 'path/to/document3.pdf' },
        { name: 'N48 ', url: 'path/to/document3.pdf' },
        { name: 'N49 ', url: 'path/to/document3.pdf' },
        { name: 'N50 ', url: 'path/to/document3.pdf' },
        { name: 'N51 ', url: 'path/to/document3.pdf' },
        { name: 'N52 ', url: 'path/to/document3.pdf' },
        { name: 'N53 ', url: 'path/to/document3.pdf' },
        { name: 'N54 ', url: 'path/to/document3.pdf' },
        { name: 'N55 ', url: 'path/to/document3.pdf' },
        { name: 'N56 ', url: 'path/to/document3.pdf' },
        { name: 'N57 ', url: 'path/to/document3.pdf' },
        { name: 'N58 ', url: 'path/to/document3.pdf' },
        { name: 'N59 ', url: 'path/to/document3.pdf' },
        { name: 'N60 ', url: 'path/to/document3.pdf' },
        { name: 'N61 ', url: 'path/to/document3.pdf' },
        { name: 'N62 ', url: 'path/to/document3.pdf' },
        { name: 'N63 ', url: 'path/to/document3.pdf' },
        { name: 'N64 ', url: 'path/to/document3.pdf' },
        { name: 'N65 ', url: 'path/to/document3.pdf' },
        { name: 'N66 ', url: 'path/to/document3.pdf' },
        { name: 'N67 ', url: 'path/to/document3.pdf' },
        { name: 'N68 ', url: 'path/to/document3.pdf' },
        { name: 'N69 ', url: 'path/to/document3.pdf' },
        { name: 'N70 ', url: 'path/to/document3.pdf' },
        { name: 'N71 ', url: 'path/to/document3.pdf' },
        { name: 'N72 ', url: 'path/to/document3.pdf' },
        { name: 'N73 ', url: 'path/to/document3.pdf' },
        { name: 'N74 ', url: 'path/to/document3.pdf' },
        { name: 'N75 ', url: 'path/to/document3.pdf' },
        { name: 'N76 ', url: 'path/to/document3.pdf' },
        { name: 'N77 ', url: 'path/to/document3.pdf' },
        { name: 'N78 ', url: 'path/to/document3.pdf' },
        { name: 'N79 ', url: 'path/to/document3.pdf' },
        { name: 'N80 ', url: 'path/to/document3.pdf' },
        { name: 'N81 ', url: 'path/to/document3.pdf' },
        { name: 'N82 ', url: 'path/to/document3.pdf' },
        { name: 'N83 ', url: 'path/to/document3.pdf' },
        { name: 'N84 ', url: 'path/to/document3.pdf' },
        { name: 'N85 ', url: 'path/to/document3.pdf' },
        { name: 'N86 ', url: 'path/to/document3.pdf' },
        { name: 'N87 ', url: 'path/to/document3.pdf' },
        { name: 'N88 ', url: 'path/to/document3.pdf' },
        { name: 'N89 ', url: 'path/to/document3.pdf' },
        { name: 'N90 ', url: 'path/to/document3.pdf' },
        { name: 'N91 ', url: 'path/to/document3.pdf' },
        { name: 'N92 ', url: 'path/to/document3.pdf' },
        { name: 'N93 ', url: 'path/to/document3.pdf' },
        { name: 'N94 ', url: 'path/to/document3.pdf' },
        { name: 'N95 ', url: 'path/to/document3.pdf' },
        { name: 'N96 ', url: 'path/to/document3.pdf' },
        { name: 'N97 ', url: 'path/to/document3.pdf' },
        { name: 'N98 ', url: 'path/to/document3.pdf' },
        { name: 'N99 ', url: 'path/to/document3.pdf' },
        { name: 'N100 ', url: 'path/to/document3.pdf' },
        { name: 'N101 ', url: 'path/to/document3.pdf' },
        { name: 'N102 ', url: 'path/to/document3.pdf' },
        { name: 'N103 ', url: 'path/to/document3.pdf' },
        { name: 'N104 ', url: 'path/to/document3.pdf' },
        { name: 'N105 ', url: 'path/to/document3.pdf' },
        { name: 'N106 ', url: 'path/to/document3.pdf' },
        { name: 'N107 ', url: 'path/to/document3.pdf' },
        { name: 'N108 ', url: 'path/to/document3.pdf' },
        { name: 'N109 ', url: 'path/to/document3.pdf' },
        { name: 'N110 ', url: 'path/to/document3.pdf' },
        { name: 'N111 ', url: 'path/to/document3.pdf' },
        { name: 'N112 ', url: 'path/to/document3.pdf' },
        { name: 'N113 ', url: 'path/to/document3.pdf' },
        { name: 'N114 ', url: 'path/to/document3.pdf' },
        { name: 'N115 ', url: 'path/to/document3.pdf' },
        { name: 'N116 ', url: 'path/to/document3.pdf' },
        { name: 'N117 ', url: 'path/to/document3.pdf' },
        { name: 'N118 ', url: 'path/to/document3.pdf' },
        { name: 'N119 ', url: 'path/to/document3.pdf' },
        { name: 'N120 ', url: 'path/to/document3.pdf' },
        { name: 'N121 ', url: 'path/to/document3.pdf' },
        { name: 'N122 ', url: 'path/to/document3.pdf' },
        { name: 'N123 ', url: 'path/to/document3.pdf' },
        { name: 'N124 ', url: 'path/to/document3.pdf' },
        { name: 'N125 ', url: 'path/to/document3.pdf' },
        { name: 'N126 ', url: 'path/to/document3.pdf' },
        { name: 'N127 ', url: 'path/to/document3.pdf' },
        { name: 'N128 ', url: 'path/to/document3.pdf' },
        { name: 'N129 ', url: 'path/to/document3.pdf' },
        { name: 'N130 ', url: 'path/to/document3.pdf' },

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
