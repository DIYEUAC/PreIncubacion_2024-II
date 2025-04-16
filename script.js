const certificates = [
    { name: 'IBARRA PALOMINO, JOEL MARTIN', dni: '72770936', link: 'https://drive.google.com/file/d/12573W_0l2D9uJso5h91UfpqCU4MxtTea/view?usp=sharing'},
    { name: 'ALAGÓN MARTÍNEZ, BEATRIZ AZUCENA ', dni: '72274284', link: 'https://drive.google.com/file/d/1sfVYPxfCDJk5xaISvvmnGvtI1kY2IqXF/view?usp=sharing' },
    { name: 'CARREÑO APAZA, REYNALDO ANDRES   ', dni: '74647823', link: 'https://drive.google.com/file/d/1l45IehFsvN8RctI851Ouyr_2pz_imDmT/view?usp=sharing' },
    { name: 'LLERENA JIMENEZ, ARIANA GIANELLA  ', dni: '72128520', link: 'https://drive.google.com/file/d/1Q1DRrgNPj3cGByNTtqsbq68GnoXT8Vqz/view?usp=sharing' },
    { name: 'PONCE MORALES, KIMBERLY LEONELA  ', dni: '72964802', link: 'https://drive.google.com/file/d/1ZmeBvLGN5GCY8xUp6UbeZbmOUkdhIin4/view?usp=sharing' },
    { name: 'VALENCIA VILLAFUERTE, JOSELYN VERITH  ', dni: '71597355', link: 'https://drive.google.com/file/d/1Zk7JoHRhJ3pln4rjoqL9A5kMasMrdQ41/view?usp=sharing' },
    { name: 'RAMOS MAMANI, DAMARIS RAISEL ', dni: '76864509', link: 'https://drive.google.com/file/d/10CLhSWu7M5WGKcTiRKVVvRgtFS5q0z7H/view?usp=sharing' },
    { name: 'ROMERO MAMANI, ZAINITH ', dni: '47635717', link: 'https://drive.google.com/file/d/1Jpb9cJaC0ZqnJ4mhqMw0eooT5tIibIhB/view?usp=sharing' },
    { name: 'QUILLAHUAMAN ENCISO, RONALD', dni: '70052872', link: 'https://drive.google.com/file/d/1hcmvgudNGMIhwLL_vBwIr4mJhbxN6qVP/view?usp=sharing' },
    { name: 'CORDOVA CAMACHO, KENSHIN JASON', dni: '78631951', link: 'https://drive.google.com/file/d/1hcmvgudNGMIhwLL_vBwIr4mJhbxN6qVP/view?usp=sharing' },
    { name: 'LARICO RODRIGO, EDER PAUL', dni: '47570788', link: 'https://drive.google.com/file/d/1637R-YCdasMVx987TJXOd6bYBa2p7yDk/view?usp=sharing' },
    { name: 'MOLINA CAMPANA, MILENKO SEBASTIAN', dni: '73224925', link: 'https://drive.google.com/file/d/14JhRsZUwRCEI80nn016rjgCEbnrWVYO0/view?usp=sharing' },
    { name: 'MATHEUS TAPIA, MIDDUAR ARTURO  ', dni: '76692938', link: 'https://drive.google.com/file/d/1d5DjYs56zKZebNoE8EmybZI36A2bcYS0/view?usp=sharing' },
    { name: 'MATHEUS TAPIA, MITZURY MARITZA MONICA', dni: '76641985', link: 'https://drive.google.com/file/d/1gQ1aLwST_G1z-OxDWtOvLyAep_t7eZrf/view?usp=sharing' },
    { name: 'CANDIA CANDIA, CINTHIA', dni: '76257514', link: 'https://drive.google.com/file/d/1bQtQ0P0i4Rt8UBPC58yAE04_EcovcymO/view?usp=sharing' },
    { name: 'TINCUSI QUISPE, JAIRO OMAR', dni: '73317983', link: 'https://drive.google.com/file/d/14DjZBy9oBjm__koaEg_eigMLjB75zJYy/view?usp=sharing' },
    { name: 'AUCAPURI VALLENAS, ADELA LETICIA ', dni: '70457932', link: 'https://drive.google.com/file/d/1P_FgWQCmdQIdsGRwJZVbJmtW1RwIaV9L/view?usp=sharing' },
    { name: 'CCANSAYA PACCORI, EDUAR RUBEN  ', dni: '70206902', link: 'https://drive.google.com/file/d/1wcocqAC6Ss51CfhxUiR8eaz8SMf5jbpe/view?usp=sharing' },
    { name: 'FERNÁNDEZ QUISPE, MILAGROS OLIMPIA ', dni: '72557528', link: 'https://drive.google.com/file/d/1NCmOrIo-wBs23mQCnvONJy7xvGriDQrM/view?usp=sharing' },
    { name: 'HUILLCANINA YUCRA, ROMINA ANDRÓMEDA', dni: '74165924', link: 'https://drive.google.com/file/d/1kAVAVh7oTacpolgVS6MkG7dtrZilJ_KC/view?usp=sharing' },
    { name: 'GONZÁLES MAMANI, FLOR ALEXANDRA ', dni: '76688594', link: 'https://drive.google.com/file/d/1VJExSXBbdKYBOSngrVbysN2hFA1S5-2F/view?usp=sharing' },
    { name: 'ZEGARRA PEREZ, ISRAEL JESUS ', dni: '72432736', link: 'https://drive.google.com/file/d/133SaKE_AD7cHCbhPQHM-t1mh3jp3Bf6m/view?usp=sharing' },
    { name: 'CÁCERES AMPUERO, EDWIN ', dni: '71744263', link: 'https://drive.google.com/file/d/1DKRSzQi6PKJdza4kbA1W7byTIfCkJSlX/view?usp=sharing' },
    { name: 'YESENIA CÁCERES, AMPUERO ', dni: '71744269', link: 'https://drive.google.com/file/d/1z_Lt9mljtaqGde9fuGj0aR0TU9uRRqAl/view?usp=sharing' },
    { name: 'DIAZ SALVA, RANDU VINCENT', dni: '73025738', link: 'https://drive.google.com/file/d/15gWgh5hBJKAmzvK_wXsrrGFlX1_UVs7V/view?usp=sharing' },
    { name: 'LIVA SOLANO, SITKA', dni: '74699744', link: 'https://drive.google.com/file/d/1N4OjMbZir-_hb3uwnJRj5wCyeM17CF8J/view?usp=sharing' },
    { name: 'LLALLA HUAYCHU, LUZ NIEVES', dni: '72083746', link: 'https://drive.google.com/file/d/1n7oD0H6OfberQwHw2b-h4wM2RuRdGd5L/view?usp=sharing' },
    { name: 'ACURIO COILA, MARÍA ISABEL', dni: '75948782', link: 'https://drive.google.com/file/d/11HaTBZZWYdkkFJ94bkxuyAmxoAfTdZYp/view?usp=sharing' },
    { name: 'VASQUEZ HUARCAYA, BRISETT MARIELLA', dni: '73979213', link: 'https://drive.google.com/file/d/1ygCG4cRcMP1eeSidEs-OklYff9Ohw_i9/view?usp=sharing' },
    { name: 'RUIZ DELGADO, CARMEN GIULEANA', dni: '72686518', link: 'https://drive.google.com/file/d/1O9Mh9AYevs4Gwz6KkQloUwqlIvoL5nr3/view?usp=sharing' },
    { name: 'PÉREZ CHOQUENAIRA, CAROLAY', dni: '71058143', link: 'https://drive.google.com/file/d/1uTtKvhdEEAE2Zv3uT6b6gty9P_4O9x1s/view?usp=sharing' },
    { name: 'CHAMBI CCALLOHUANCA, NICOL SAMANTA ', dni: '77676976', link: 'https://drive.google.com/file/d/1g2v2J_r1BCb45BWa1lJe06J44TvkHa3U/view?usp=sharing' },
    { name: 'ARQQUE VALDERRAMA, YENY MELITZA ', dni: '72905376', link: 'https://drive.google.com/file/d/1GV-NWifJrYvY_hTz19PmozV-qcwp3FND/view?usp=sharing' },
    { name: 'INFANTAS SOTO, ANDRÉS GUSTAVO', dni: '72031164', link: 'https://drive.google.com/file/d/1qRdOJ9LhxGfbK4TxvrUpyrhvbaddQ7Z6/view?usp=sharing' },
    { name: 'RAMOS ORTIZ DE ORUE, ANGIE MILAGROS', dni: '73975527', link: 'https://drive.google.com/file/d/12xphYOJUgJ74npLruBigP_HnOeVsTI30/view?usp=sharing' },
    { name: 'CAJIGAS MOREANO, KEVIN GABRIEL', dni: '70584346', link: 'https://drive.google.com/file/d/1aN08cBkuu4PA9dOiwIaPcyBGYHmky1TP/view?usp=sharing' },
    { name: 'USCA QUISPE, LIZ SHARMELY', dni: '70583248', link: 'https://drive.google.com/file/d/1hgY44j8VCuZiK8RmyX7EDMCzwv5YsAMQ/view?usp=sharing' },
    { name: 'VALERO QUISPE, YULIET JADE', dni: '77244171', link: 'https://drive.google.com/file/d/1M-j9I_Ry4cjmGymSeIyW7xptLxByBS87/view?usp=sharing' },
    { name: 'ADELIA HUACHACA, GUIZADO', dni: '47913967', link: 'https://drive.google.com/file/d/1gtJ4TnUkvuHv4q3kcfDmcOunqc_4avcd/view?usp=sharing' },
    { name: 'TAPIA ACUÑA, MIJAIL', dni: '46198986', link: 'https://drive.google.com/file/d/19EGdAtBy_ooGIUWXGpwbJTeiy63wFZ8o/view?usp=sharing' },
    { name: 'ALCCA ZELA, ERICK', dni: '42955593', link: 'https://drive.google.com/file/d/1AyFVW3KgkAWH_TYy0Ca9tP1JbmBIWYZV/view?usp=sharing' },
    { name: 'CORDOVA CANTORO, VIOLETA', dni: '72712951', link: 'https://drive.google.com/file/d/1gTl1szTNZG_x10FmPBtaSy_0MlJ67DAk/view?usp=sharing' },
    { name: 'YUPANQUI CARBAJAL, DANIEL EDUARDO ', dni: '72364865', link: 'https://drive.google.com/file/d/1FW87bUZ7JBiIt1vhSBOzMa46Tf26wmHL/view?usp=sharing' },
    { name: 'BACA ARRIOLA, KUKULY NEMESIA', dni: '02858080', link: 'https://drive.google.com/file/d/1sWS2M2LxyDTW5E-m4SC3ZoF_HnoUoCbT/view?usp=sharing' },
    { name: 'BENAVIDES PALOMINO, CARLOS ALBERTO', dni: '23994029', link: 'https://drive.google.com/file/d/1AaNPJRC756dicnY35CUPCRmB21SNPV0u/view?usp=sharing' },
    { name: 'CASTRO PONCE DE LEÓN, RICARDO', dni: '23818383', link: 'https://drive.google.com/file/d/174Qy8rJA6YC-1oLT9F4AntWUeX4pxfWA/view?usp=sharing' },
    { name: 'HUMPIRE CASTRO, ROY ANDY', dni: '72639015', link: 'https://drive.google.com/file/d/1JxnTfFREmFcKRVXoep9bj7g5FjseFl_B/view?usp=sharing' },
    { name: 'PONCE FERNANDEZ BACA, MANUEL ABRAHAM', dni: '72716682', link: 'https://drive.google.com/file/d/1B_n3pV4zj1ZBamIBwJO8ztvYzzoABjJx/view?usp=sharing' },
    { name: 'GUZMÁN PACHECO, ESTHER ', dni: '23998314', link: 'https://drive.google.com/file/d/1XP1evbfCL5MW04MkgSBI6OYk76O9Fasi/view?usp=sharing' },
    { name: 'CALDERON GONZALES, WERNER', dni: '41834778', link: 'https://drive.google.com/file/d/1Hf_1qQsLND_scANXyDSfWd9wd5yVkDow/view?usp=sharing' },
    { name: 'GUTIERREZ CARLOTTO, ED ', dni: '46086133', link: 'https://drive.google.com/file/d/1yynVCI433KETHJRMbWbzilfHUWau-9TB/view?usp=sharing' },
    { name: 'CANAHUIRE MONTUFAR, ABRAHAM EDGARD', dni: '23961090', link: 'https://drive.google.com/file/d/1wwl9LMOdFOUqezKM1HZCcGUrMEhOHCCj/view?usp=sharing' },
    { name: 'HOLGUIN HERRERA, MELISA BETYS', dni: '43109012', link: 'https://drive.google.com/file/d/1cXXMZ3BtESfoAX-u5PW-FqztCD4RedQA/view?usp=sharing' },
    { name: 'ASTETE CALDERON, GABRIELA', dni: '70458417', link: 'https://drive.google.com/file/d/1vlukFon5UI_My-cFO6-UDesXxiX_-_ln/view?usp=sharing' },
    { name: 'QUISPE LUCANA, HILBERT EDUARDO ', dni: '71514971', link: 'https://drive.google.com/file/d/1ZUai98EMLRhIpyoEDPvAJwysTyZZ0l0o/view?usp=sharing' },
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

