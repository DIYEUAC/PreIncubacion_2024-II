const certificates = [
    { name: 'AVILA DAVILA DENNISSE PAOLA', dni: '46093707', link: 'https://drive.google.com/file/d/1YUlnnUkom44BdEsNb4UGM_gcLb89hCi2/view?usp=sharing'},
    { name: 'CARLOS HANCO ALEJANDRA THALIA', dni: '71330030', link: 'https://drive.google.com/file/d/1GSY8xQB8FKAEXwh3JG3M2CtCKCL_y69d/view?usp=sharing'},
    { name: 'CORNEJO ROJAS ANGELA', dni: '41922103', link: 'https://drive.google.com/file/d/1xErIjM2-PbmxFr1wQ6oF8sJdUBmavg-2/view?usp=sharing'},
    { name: 'HUALLPAMAYTA PONCE, CARMEN ROSA', dni: '23883818', link: 'https://drive.google.com/file/d/13oVu2gTFcuVcku-b0BiBo304UxxQsJdW/view?usp=sharing'},
    { name: 'LISETH URPY SEGUNDO CARPIO', dni: '46480186', link: 'https://drive.google.com/file/d/11do4En4RbvPfzre8ncpxb0HqWHa6rJ9o/view?usp=sharing'},
    { name: 'NEGRON ZUÑIGA JUAN JOSE', dni: '23989604', link: 'https://drive.google.com/file/d/17ShyQR8wKe1Pp6HRD2WgPhikgc1Kbqu6/view?usp=sharing'},
    { name: 'RÍOS MAYORGA MARIO', dni: '23838627', link: 'https://drive.google.com/file/d/1-VESPCDOv6oSYmhA2FqTNqcu4OTB0FCK/view?usp=sharing'},
    { name: 'TITO PACHECO ROCIO', dni: '23900062', link: 'https://drive.google.com/file/d/1an9kgA6QE9nJAWuVZyoyEtW8_G-42yMl/view?usp=sharing'},
    { name: 'YURI EDISON MANCILLA GUDIEL', dni: '41060720', link: 'https://drive.google.com/file/d/1TH1tD0WJeWXdB6CWtFcB3Oczuux6spPU/view?usp=sharing'},
    { name: 'ATAUSINCHI LLANOS NELLY GERONIMA', dni: '77087931', link: 'https://drive.google.com/file/d/19ihNoHduLZOFlCe0w8UW8u1sqzVqBDud/view?usp=sharing'},
    { name: 'BARRIOS HERRERA LUIS ALEXANDER', dni: '76184078', link: 'https://drive.google.com/file/d/1OZEHQ2TLoZXcriifUtD4pJyUg7bgMRDz/view?usp=sharing'},
    { name: 'CAMACHO RAMÍREZ MAJAIDA HADE', dni: '60411084', link: 'https://drive.google.com/file/d/1XztIA-nArkQb2jbdIhu8oqU2xE_nwCID/view?usp=sharing'},
    { name: 'CASAPINO JARA MIROSLABA', dni: '72281026', link: 'https://drive.google.com/file/d/1_-VhpfuJEsQ0vvkGRfmUmHRvZUkMXSIG/view?usp=sharing'},
    { name: 'CASTILLA LIVIA CARMEN FERNANDA', dni: '73033518', link: 'https://drive.google.com/file/d/1PgjBxIub88joRrDpCKUHoMBJSel-zyvn/view?usp=sharing'},
    { name: 'CASTRO MUJICA BRIAN NIKOLAS', dni: '70655109', link: 'https://drive.google.com/file/d/19fU8L_qWKk1vWrJx759KwdIssdErVVq5/view?usp=sharing'},
    { name: 'CHAUCA HUAMAN LITZI JHOSELIN', dni: '60767409', link: 'https://drive.google.com/file/d/1221gEd_6vLeRPrK13wMsIpQYwmaFvqCW/view?usp=sharing'},
    { name: 'CONSA VELASQUEZ YAQUELIM', dni: '73142908', link: 'https://drive.google.com/file/d/12blamT0lU9RkpAt182VUryQYhUix_7My/view?usp=sharing'},
    { name: 'CUTIRE AQUISE AMERICA BRICETH', dni: '73209470', link: 'https://drive.google.com/file/d/1bSH-RoiqHoSB7YYmUHZ7_bDdt-TZTFME/view?usp=sharing'},
    { name: 'EZPINOZA VILCA ISABEL', dni: '71141456', link: 'https://drive.google.com/file/d/1oRE8rfUrEan7kLRExCdQ5TrhuHv1NLmZ/view?usp=sharing'},
    { name: 'GAMARRA AYMITUMA FIORELA', dni: '73902590', link: 'https://drive.google.com/file/d/13pLG_-KY_4d90vr09OzOV6OH0T34N-cy/view?usp=sharing'},
    { name: 'GIANIRA KAREN NINA TITO', dni: '70669246', link: 'https://drive.google.com/file/d/1wqHTKE2F9aK7hcOxn9h8iQFcvuesfbCR/view?usp=sharing'},
    { name: 'HUAMAN MENDOZA ROBERT ANDERSON', dni: '77044357', link: 'https://drive.google.com/file/d/1JgxNTHUjvJ38jq9wfhBgw0JbscUU3OtV/view?usp=sharing'},
    { name: 'HUARANCCA CARHUARUPAY LISS SUSAN', dni: '76120108', link: 'https://drive.google.com/file/d/1Z2Qwp1-3H5qj0bUTWOEILv55cyVnoX2F/view?usp=sharing'},
    { name: 'KAROL BERENYCE GUEVARA VARGAS', dni: '74571586', link: 'https://drive.google.com/file/d/1gB3zv5XpDptqFKlvHsY-0xGjhUlqIaVd/view?usp=sharing'},
    { name: 'LA CRUZ PACHECO, FABRICIO', dni: '73769315', link: 'https://drive.google.com/file/d/19bHrFsxj0PIr29W-IrK3T4ha2xEZ3AoR/view?usp=sharing'},
    { name: 'MAMANI APAZA, DIEGO RODRIGO', dni: '74070563', link: 'https://drive.google.com/file/d/1bN0ddn28DN1BGRW9UhR3aKv1kSkjrwwD/view?usp=sharing'},
    { name: 'MELANY GABRIELA ALANOCA AMAO', dni: '72415150', link: 'https://drive.google.com/file/d/1jK52UIsg4VmR9R9iMfCwh1m-4pTvGFx6/view?usp=sharing'},
    { name: 'MELISSA EMPERATRIZ NINA TITO', dni: '70669245', link: 'https://drive.google.com/file/d/1Gr0tJed-Huo1gImPnwRWh7ePb9sacE6g/view?usp=sharing'},
    { name: 'MEZA PONCE RUBEN WASHINTHON', dni: '72806749', link: 'https://drive.google.com/file/d/16x5iXn2NKnukDluZmSyMzPqqAIL9PYJ0/view?usp=sharing'},
    { name: 'MICAELA LUCIANA BUSTINZA TITO', dni: '76045203', link: 'https://drive.google.com/file/d/1EoAlais5Ptr3WVfcr3I-jOGOUF6ZEBxp/view?usp=sharing'},
    { name: 'MORALES NIETO NEHEMIAS SMITH', dni: '71580727', link: 'https://drive.google.com/file/d/1ZPZPngK_9qCcmmgRA9dLJy7kNzrpmvEL/view?usp=sharing'},
    { name: 'PANTIGOSO YEPEZ SEBASTIAN GONZALO', dni: '70196445', link: 'https://drive.google.com/file/d/19svzXJOQSZk6IUYYgKXfIw6tUPKo3Soi/view?usp=sharing'},
    { name: 'QUISPE QUISPE KATIANA IRENE', dni: '76447340', link: 'https://drive.google.com/file/d/1tbl7kubSS-raSh1CsebeSh-0XKRq0jFx/view?usp=sharing'},
    { name: 'QUISPE TAIPE SHORY ROYER', dni: '72655688', link: 'https://drive.google.com/file/d/1NYOFpo_rgzB9l-5dZn237y8CxmYuoc3a/view?usp=sharing'},
    { name: 'ROSAS BRAVO JULIO GODOFREDO', dni: '71796401', link: 'https://drive.google.com/file/d/1jXVNpSYw_Pt851jYKidXw55MsY_r4nJK/view?usp=sharing'},
    { name: 'SANCHEZ PILLCO, FREDDY BRAYAND', dni: '76134464', link: 'https://drive.google.com/file/d/1fyTCIrvfaZSLx2tUwml7NtiH8NCEFYKO/view?usp=sharing'},
    { name: 'SANCHEZ PINEDO NIKXON', dni: '74696118', link: 'https://drive.google.com/file/d/16tzG0_DbDyNRepddckN8drjkpRARfi2V/view?usp=sharing'},
    { name: 'SANTOS OLIVERA LUCIA MIRELLA', dni: '70580933', link: 'https://drive.google.com/file/d/12JbR47mdXrLRqPnTf5MRFlsApGjUGm2Q/view?usp=sharing'},
    { name: 'SENCIA QUISPE KEVIN', dni: '76399437', link: 'https://drive.google.com/file/d/1uByGcF48zkBTMZ6ntvAQ1awEUbeD6ajy/view?usp=sharing'},
    { name: 'SIHUIN ARANDO ALISON ZULEMA', dni: '48298998', link: 'https://drive.google.com/file/d/17vCjcHwazOAB-c-7KnRyc12rZcVHw7Il/view?usp=sharing'},
    { name: 'SIHUIN ARANDO MELIZA ESTEFANI', dni: '77913186', link: 'https://drive.google.com/file/d/1W6-LdZsjq7WTK_DpBVFjIuVAAoJoPL4-/view?usp=sharing'},
    { name: 'TECSI QUISPE LUIS JUSHILD', dni: '70135706', link: 'https://drive.google.com/file/d/1hyqcrrFSrFZU2-mMLNgXrH8jIZkK2afo/view?usp=sharing'},
    { name: 'PONCE FERNANDEZ BACA MANUEL ABRAHAM', dni: '72716682', link: 'https://drive.google.com/file/d/1iUlFl4iRG2xwfa0i3EU9kxZ5suhjZmB5/view?usp=sharing'},
    { name: 'GUZMÁN PACHECO ESTHER', dni: '23998314', link: 'https://drive.google.com/file/d/1ado2uYBEPx-3yM6HoW0UKzNFLkn6-W7W/view?usp=sharing'},
    { name: 'HOLGUIN HERRERA MELISA BETYS', dni: '43109012', link: 'https://drive.google.com/file/d/1oepLqw8R0-4X6eNCj4jO5U_t74ndECD3/view?usp=sharing'},
    { name: 'SALAS OLIVERA CLEIDY GLORIA', dni: '45907329', link: 'https://drive.google.com/file/d/1Tk0oomgzmlcrFgNBwbuyr2IbDI9HC49b/view?usp=sharing'},
    { name: 'HUMPIRE CASTRO, ROY ANDY', dni: '72639015', link: 'https://drive.google.com/file/d/1ywuJZbxxJT71vKsEhn5YwsUK2hFLL5Cy/view?usp=sharing'},
    { name: 'CANAHUIRE MONTUFAR ABRAHAM EDGARD', dni: '23961090', link: 'https://drive.google.com/file/d/1GD_EGjJEFJaBUDeKiM94eXLCHPSg2Qx5/view?usp=sharing'},
    { name: 'ASTETE CALDERON GABRIELA', dni: '70458417', link: 'https://drive.google.com/file/d/1OsvvRhQs7-OyngOS2idAvbe-qtd80j3D/view?usp=sharing'},
    { name: 'MAROCHO CAPA GABRIELA IRMA', dni: '76181199', link: 'https://drive.google.com/file/d/1Zg4BjNvIPbUO9c_rLDBJQtYGm01maigt/view?usp=sharing'},
];

function loadTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    certificates.forEach(cert => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = cert.name;
        row.appendChild(nameCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Descargar';
        button.dataset.dni = cert.dni;
        button.dataset.link = cert.link;
        button.onclick = function() {
            const inputDni = prompt('Ingrese su DNI para descargar el certificado:');
            if (inputDni === null) {
                return; // Si el usuario cancela, no hace nada
            }
            if (inputDni.trim() === '') {
                alert('El campo DNI no puede estar vacío.');
                return;
            }
            if (inputDni === this.dataset.dni) {
                window.open(this.dataset.link, '_blank');
            } else {
                alert('DNI incorrecto. No tienes permiso para descargar este certificado.');
            }
        };
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCertificates = certificates.filter(cert => cert.name.toLowerCase().includes(searchTerm));
    
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    filteredCertificates.forEach(cert => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = cert.name;
        row.appendChild(nameCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Descargar';
        button.dataset.dni = cert.dni;
        button.dataset.link = cert.link;
        button.onclick = function() {
            const inputDni = prompt('Ingrese su DNI para descargar el certificado:');
            if (inputDni === null) {
                return; // Si el usuario cancela, no hace nada
            }
            if (inputDni.trim() === '') {
                alert('El campo DNI no puede estar vacío.');
                return;
            }
            if (inputDni === this.dataset.dni) {
                window.open(this.dataset.link, '_blank');
            } else {
                alert('DNI incorrecto. No tienes permiso para descargar este certificado.');
            }
        };
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
});

// Cargar la tabla al iniciar
loadTable();

