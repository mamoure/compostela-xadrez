// ===============================
// VARIABLES GLOBALES
// ===============================
let map;


// ===============================
// FUNCIÓN PARA IGUALAR ALTURA DE FILAS
// ===============================
function equalizeRowsHeight() {
    const rows = document.querySelectorAll('.site-item-row');
    if (!rows.length) return;

    const firstRow = rows[0];
    const col2 = firstRow.querySelector('.item-col-2');
    if (!col2) return;

    const width = col2.getBoundingClientRect().width;

    // Forzar la altura exacta
    rows.forEach(row => {
        row.style.height = `${width}px`;            // altura de la fila
        row.style.minHeight = `${width}px`;         // también min-height
        row.style.maxHeight = `${width}px`;         // también max-height
    });
}




// ===============================
// PANTALLA DE BIENVENIDA
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    const introScreens = document.getElementById('intro-screens');
    const showMapBtn = document.getElementById('show-map');
    const container = document.querySelector('.container');
    const backBtn = document.getElementById('back-to-intro');


    // Al hacer click en la flecha, hace scroll automático a sección blanca
    const scrollArrow = document.querySelector('.scroll-arrow');
    const secondScreen = document.getElementById('second-screen');

    scrollArrow.addEventListener('click', () => {
        secondScreen.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Definir las alturas de las filas
    showMapBtn.addEventListener('click', () => {
        container.style.display = 'flex';
        initMap(); // inicializa el mapa y crea filas
        introScreens.style.display = 'none';
    });

    backBtn.addEventListener('click', () => {
        container.style.display = 'none';
        introScreens.style.display = 'block';
        introScreens.scrollTo({ top: 0, behavior: 'instant' });
    });

    // Ajustar altura de filas al redimensionar ventana
    window.addEventListener('resize', () => {
        if (container.style.display !== 'none') {
            equalizeRowsHeight();
        }
    });

});



// ===============================
// INICIALIZACIÓN DEL MAPA
// ===============================
function initMap() {

    // Evita inicializar dos veces
    if (map) return;

    // Crear mapa
    map = L.map('map').setView([42.8806, -8.5453], 15);

    // Capa base
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap & CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Función abrir Google Maps
    function abrirComoLlegar(lat, lng) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(url, '_blank');
    }

    // ===============================
    // DATOS
    // ===============================
    const points = [
        {
        id: "a1",
        name: "A Barraca",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de Touro, 1",
        lat: 42.88679495444823,
        lng: -8.538351437501014
        },
        {
        id: "a2",
        name: "Café Bar Leis",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa dos Basquiños, 17",
        lat: 42.88667739187221,
        lng: -8.540112070530745
        },
        {
        id: "a3",
        name: "Café Bar Trece",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de Santa Clara, 13",
        lat: 42.885710204847385,
        lng: -8.541037542144744
        },
        {
        id: "a4",
        name: "Bar Estila",
        serviceCode: "TP-T",
        services: "Taboleiro e pezas, Torneo",
        address: "Av. de Coímbra, 4",
        lat: 42.88562422582335,
        lng: -8.541302606945633
        },
        {
        id: "a5",
        name: "A Casa do Taberneiro",
        serviceCode: "TP-T",
        services: "Taboleiro e pezas, Torneo",
        address: "Rúa de San Pedro, 15",
        lat: 42.88170404336882,
        lng: -8.53911130216413
        },
        {
        id: "a6",
        name: "CSC Maruxa e Coralia",
        serviceCode: "TP-R-E-C-T",
        services: "Taboleiro e pezas, Reloxo, Escola, Club, Torneo",
        address: "Praza de Salvador Parga, 4",
        lat: 42.8819448497829,
        lng: -8.541447892712128
        },
        {
        id: "b1",
        name: "Miudo",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa dos Truques, 3",
        lat: 42.88217333977913,
        lng: -8.542212230736773
        },
        {
        id: "b2",
        name: "O Tarasca",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de Entremuros, 13",
        lat: 42.88234567469882,
        lng: -8.540846298344018
        },
        {
        id: "b3",
        name: "A Medusa Pub",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Praza de Salvador Parga, 1",
        lat: 42.881981818190226,
        lng: -8.541807221985701
        },
        {
        id: "b4",
        name: "Bar Nemenzo",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Praza da Atalaia, 2",
        lat: 42.882942964137094,
        lng: -8.542735608248949
        },
        {
        id: "b5",
        name: "Marida e Vencerás",
        serviceCode: "T-A",
        services: "Torneo, Actividade",
        address: "Rúa da Porta da Pena, 2",
        lat: 42.8827230339478,
        lng: -8.54336312380728
        },
        {
        id: "b6",
        name: "Mori Cafés Especiais",
        serviceCode: "TP-T",
        services: "Taboleiro e pezas, Torneo",
        address: "Rúa Nova, 32",
        lat: 42.878550240560585,
        lng: -8.54373856331121
        },
        {
        id: "c1",
        name: "Modus Vivendi",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Praza de Feixóo, 1",
        lat: 42.88001201428895,
        lng: -8.542490943616707
        },
        {
        id: "c2",
        name: "A Senda do Pool",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Av. de Rosalía de Castro, 20",
        lat: 42.87571202438078,
        lng: -8.549883939839768
        },
        {
        id: "c3",
        name: "Café Sport",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa da República Arxentina, 35",
        lat: 42.872102345347265,
        lng: -8.549926883223044
        },
        {
        id: "c4",
        name: "El Chiringuito de Ele",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa do Hórreo, 170",
        lat: 42.87021586135268,
        lng: -8.547246901480081
        },
        {
        id: "c5",
        name: "Café Bar Bendaña",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa Nova, 54",
        lat: 42.877655973113065,
        lng: -8.544396231060993
        },
        {
        id: "c6",
        name: "Camalea",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Pl. de San Martiño, 4",
        lat: 42.882478468826136,
        lng: -8.543869764318147
        },
        {
        id: "d1",
        name: "Chez Boubou",
        serviceCode: "T",
        services: "Torneo",
        address: "Rúa das Galeras, 17",
        lat: 42.88411974383695,
        lng: -8.548534500429364
        },
        {
        id: "d2",
        name: "La Fábrica",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Polígono del Tambre, Rua Via Diesel, 1",
        lat: 42.913010188048354,
        lng: -8.523537228575657
        },
        {
        id: "d3",
        name: "CSC Conxo",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Plaza de Aurelio Aguirre",
        lat: 42.863037575441645,
        lng: -8.555620385373459
        },
        {
        id: "d4",
        name: "CSC Santa Marta",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de Antonio Rama Seoane, 6",
        lat: 42.869778921988505,
        lng: -8.560828182923768
        },
        {
        id: "d5",
        name: "CSC O Ensanche",
        serviceCode: "TP-E",
        services: "Taboleiro e pezas, Escola",
        address: "Rúa de Frei Rosendo Salvado, 16",
        lat: 42.873450108077165,
        lng: -8.550603317527543
        },
        {
        id: "d6",
        name: "CSC Vite",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de Carlos Maside, 7",
        lat: 42.89141421177608,
        lng: -8.539806018098153
        },
        {
        id: "e1",
        name: "CSC Fontiñas",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de Berlín, 13",
        lat: 42.883971757332034,
        lng: -8.531261880408207
        },
        {
        id: "e2",
        name: "CSC O Castiñeiriño",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa da Virxe de Fátima, 2",
        lat: 42.8592175022638,
        lng: -8.539783754362968
        },
        {
        id: "e3",
        name: "LS San Lourenzo",
        serviceCode: "T",
        services: "Torneo",
        address: "Rúa da Carballeira de San Lourenzo, 2",
        lat: 42.878989582195906,
        lng: -8.556867347910886
        },
        {
        id: "e4",
        name: "Fonseca",
        serviceCode: "TP-R-T-A",
        services: "Taboleiro e pezas, Reloxo, Torneo, Actividade",
        address: "Praza de Rodríguez Cadarso, 3",
        lat: 42.876952749053146,
        lng: -8.5548640745941
        },
        {
        id: "e5",
        name: "Cadarso",
        serviceCode: "TP-R-T-A",
        services: "Taboleiro e pezas, Reloxo, Torneo, Actividade",
        address: "Campus Sur, Av. das Burgas, s/n",
        lat: 42.877832399365964,
        lng: -8.55458294678119
        },
        {
        id: "e6",
        name: "Facultade de Física",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de José María Suárez Núñez, s/n",
        lat: 42.875907845243084,
        lng: -8.560499622682444
        },
        {
        id: "f1",
        name: "Cafetería de Matemáticas",
        serviceCode: "TP-E",
        services: "Taboleiro e pezas, Escola",
        address: "Rúa de Lope Gómez de Marzoa, 6",
        lat: 42.87401682805349,
        lng: -8.558349370464605
        },
        {
        id: "f2",
        name: "RU Burgo das Nacións",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Av. do Burgo das Nacións, s/n",
        lat: 42.89047715196526,
        lng: -8.543925816396792
        },
        {
        id: "f3",
        name: "RU Monte da Condesa",
        serviceCode: "TP",
        services: "Taboleiro e pezas",
        address: "Rúa de José María Suárez Núñez, 2",
        lat: 42.876823708770935,
        lng: -8.558326877930407
        },
        {
        id: "f4",
        name: "EscondiT",
        serviceCode: "TP-R-E-C-T-A",
        services: "Taboleiro e pezas, Reloxo, Escola, Club, Torneo, Actividade",
        address: "Av. de Rosalía de Castro, 1",
        lat: 42.875857831350444,
        lng: -8.54913790833521
        },
        {
        id: "f5",
        name: "Piscina USC",
        serviceCode: "T",
        services: "Torneo",
        address: "Av. das Burgas, 3",
        lat: 42.87814160937152,
        lng: -8.554935223703923
        },
        {
        id: "f6",
        name: "Escola de Xadrez",
        serviceCode: "TP-R-T-A",
        services: "Taboleiro e pezas, Reloxo, Torneo, Actividade",
        address: "Praza de Europa, 15-A",
        lat: 42.88249689277332,
        lng: -8.527682267102048
        },
        {
        id: "g1",
        name: "Escola Unitaria",
        serviceCode: "TP-E",
        services: "Taboleiro e pezas, Escola",
        address: "Calzada de San Pedro, s/n",
        lat: 42.880561651866394,
        lng: -8.537440428573229
        }
    ];

    // ===============================
    // LISTADO Y MARCADORES
    // ===============================
    // Panel derecho
    const listContainer = document.getElementById('site-list');

    let activeMarkerDiv = null;
    let activeItemRow = null;

    // Para cada punto
    points.forEach(point => {
        const marker = L.marker([point.lat, point.lng], {
            icon: L.divIcon({
                className: 'circle-marker',
                html: `<div>${point.id}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            })
        }).addTo(map);

        // Crear la fila
        const itemRow = document.createElement('div');
        itemRow.className = 'site-item-row';

        // Crear las columnas
        const col1 = document.createElement('div'); col1.className = 'item-col item-col-1';
        const col2 = document.createElement('div'); col2.className = 'item-col item-col-2';
        const col3 = document.createElement('div'); col3.className = 'item-col item-col-3';

        // Contenido en la columna 2
        col2.innerHTML = `
            <span class="item-id">${point.id}</span>
            <div class="item-name">${point.name}</div>
            <div class="item-address">${point.address}</div>
            <button class="route-btn">Como chegar
                <svg class="route-arrow"  version="1.1" id="Capa_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 425.197 425.197" enable-background="new 0 0 425.197 425.197" 	 xml:space="preserve">
                <line fill="none" stroke="currentColor" stroke-width="40" stroke-miterlimit="10" x1="80.193" y1="328.778" x2="342.536" y2="328.778"/>
                <line fill="none" stroke="currentColor" stroke-width="40" stroke-miterlimit="10" x1="327.527" y1="343.751" x2="327.527" y2="81.445"/>
                <line fill="none" stroke="currentColor" stroke-width="40" stroke-miterlimit="10" x1="80.193" y1="81.445" x2="327.527" y2="328.778"/>
                </svg>
            </button>
        `;

        // Contenido en la columna 3 (vacío al inicio)
        col3.innerHTML = `
            <div class="item-services-container">
                <div class="item-services">
                    ${point.services.split(',').map(s => `<span class="service-chip">${s.trim()}</span>`).join('')}
                </div>
            </div>
        `;

        // Función abrir como llegar
        col2.querySelector('.route-btn').addEventListener('click', e => {
            e.stopPropagation();
            abrirComoLlegar(point.lat, point.lng);
        });

        // Añadir columnas y fila al panel
        itemRow.appendChild(col1);
        itemRow.appendChild(col2);
        itemRow.appendChild(col3);
        listContainer.appendChild(itemRow);

        // Función activar item
        function activateItem() {
            // Desactivar el anterior
            if (activeItemRow && activeItemRow !== itemRow) {
                activeItemRow.classList.remove('active');
                if (activeMarkerDiv) activeMarkerDiv.classList.remove('active');
            }

            // Activar el actual
            itemRow.classList.add('active');
            marker.getElement().querySelector('div').classList.add('active');

            activeItemRow = itemRow;
            activeMarkerDiv = marker.getElement().querySelector('div');

            itemRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
            map.setView([point.lat, point.lng], 16, { animate: true });
        }

        // Click en marcador o fila
        marker.on('click', activateItem);
        itemRow.addEventListener('click', activateItem);


    });


    // === IGUALAR ALTURA DESPUÉS DE RENDERIZAR TODAS LAS FILAS ===
    setTimeout(equalizeRowsHeight, 50);

    // === ACTUALIZAR ALTURA AL REDIMENSIONAR ===
    window.addEventListener('resize', equalizeRowsHeight);

    // === OBSERVER PARA AJUSTAR SI EL CONTENIDO CAMBIA ===
    const observer = new ResizeObserver(equalizeRowsHeight);
    document.querySelectorAll('.item-col-2').forEach(col => observer.observe(col));

}






