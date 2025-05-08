const tipoImagenes = {
    ['lineal']: '/images/tipoLineal.png',
    ['tracción']: '/images/tipoTraccion.png',
}


const INDICE_CARGA_MAP = {
    147: 3075,
    148: 3150,
    149: 3250,
    150: 3350,
    151: 3450,
    152: 3550,
    153: 3650,
    154: 3750,
    155: 3875,
};

class ModeloCubierta {
    constructor({ id, nombre, marca, img, indiceCarga, tipo, precio, oferta = false, disponible = false, medidas, cuotas = 5 }) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.img = tipoImagenes[tipo.toLowerCase()] || img;
        this.indiceCarga = indiceCarga;
        this.cargaMaxima = INDICE_CARGA_MAP[indiceCarga] || null;
        this.tipo = tipo; // 'direccional', 'tracción', 'carga'
        this.precio = precio;
        this.oferta = oferta;
        this.disponible = disponible;
        this.cuotas = cuotas;
        this.precioCuota = Math.round(precio / this.cuotas);
        this.medidas = medidas;
    }
}

const modelos = [
    new ModeloCubierta({
        id: 1,
        nombre: "KRS03",
        marca: "KUMHO",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 629000,
        oferta: true,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 2,
        nombre: "AL26",
        marca: "HANKOOK",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 606692,
        medidas: "295/80R22,5",
        cuotas: 7,
        oferta: true,
        disponible: true,
    }),
    new ModeloCubierta({
        id: 3,
        nombre: "AC901",
        marca: "AUSTONE",
        indiceCarga: 154,
        tipo: "lineal",
        precio: 544627,
        medidas: "295/80R22,5",
        disponible: true,
    }),
    new ModeloCubierta({
        id: 4,
        nombre: "TRS02",
        marca: "TRIANGLE",
        indiceCarga: 154,
        tipo: "lineal",
        precio: 450000,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 5,
        nombre: "CR976AW",
        marca: "CHAOYANG",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 418932,
        medidas: "295/80R22,5",
        disponible: true,
    }),
    new ModeloCubierta({
        id: 6,
        nombre: "TR668",
        marca: "TRIANGLE",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 433000,
        medidas: "295/80R22,5",
    }),


    new ModeloCubierta({
        id: 8,
        nombre: "DH31",
        marca: "HANKOOK",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 651000,
        medidas: "295/80R22,5",
    }),

    new ModeloCubierta({
        id: 9,
        nombre: "ADM207",
        marca: "AUSTONE",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 547127,
        medidas: "295/80R22,5",
        disponible: true,
    }),

    new ModeloCubierta({
        id: 10,
        nombre: "TRD06",
        marca: "TRIANGLE",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 473000,
        medidas: "295/80R22,5",
    }),

    new ModeloCubierta({
        id: 11,
        nombre: "AD153W",
        marca: "CHAOYANG",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 473647,
        medidas: "295/80R22,5",
        disponible: true,
    }),




    new ModeloCubierta({
        id: 12,
        nombre: "KCA03",
        marca: "KUMHO",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 600100,
        promo: true,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 13,
        nombre: "AH31",
        marca: "HANKOOK",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 586672,
        medidas: "275/80R22,5",
        disponible: true,
    }),

    new ModeloCubierta({
        id: 14,
        nombre: "AT115",
        marca: "AUSTONE",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 420290,
        disponible: true,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 15,
        nombre: "TR666",
        marca: "TRIANGLE",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 384707,
        medidas: "275/80R22,5",
        oferta: true,
        cuotas: 7,
        disponible: true,
    }),

    new ModeloCubierta({
        id: 16,
        nombre: "ZSR05",
        marca: "ZETUM",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 368750,
        oferta: true,
        medidas: "275/80R22,5",
        cuotas: 7,
        disponible: true,
    }),

    new ModeloCubierta({
        id: 17,
        nombre: "CR976AW",
        marca: "CORVEN/CHAOYANG",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 398952,
        medidas: "275/80R22,5",
    }),





    new ModeloCubierta({
        id: 18,
        nombre: "AD153W",
        marca: "CORVEN/CHAOYANG",
        indiceCarga: 149,
        tipo: "tracción",
        precio: 421541,
        medidas: "275/80R22,5",
        disponible: true,
    }),

    new ModeloCubierta({
        id: 19,
        nombre: "ZDR03",
        marca: "ZETUM",
        indiceCarga: 149,
        tipo: "tracción",
        precio: 416922,
        medidas: "275/80R22,5",
        oferta: true,
        cuotas: 7,
        disponible: true,
    }),





    new ModeloCubierta({
        id: 20,
        nombre: "TH22",
        marca: "HANKOOK",
        indiceCarga: 135,
        tipo: "lineal",
        precio: 272800,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 21,
        nombre: "CR976A",
        marca: "CORVEN/CHAO YANG",
        indiceCarga: 135,
        tipo: "lineal",
        precio: 206000,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 22,
        nombre: "KDR01",
        marca: "KUMHO",
        indiceCarga: 135,
        tipo: "tracción",
        precio: 218000,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 23,
        nombre: "TR689A",
        marca: "TRIANGLE",
        indiceCarga: 135,
        tipo: "tracción",
        precio: 226000,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 24,
        nombre: "KTA303",
        marca: "LINGLONG",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 493965,
        medidas: "295/80R22,5",
        oferta: true,
        cuotas: 7,
        disponible: true,
    }),

    new ModeloCubierta({
        id: 25,
        nombre: "AFH123",
        marca: "AUSTONE",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 507316,
        medidas: "295/80R22,5",
        disponible: true,
    }),

    new ModeloCubierta({
        id: 26,
        nombre: "AT116A",
        marca: "AUSTONE",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 472212,
        medidas: "295/80R22,5",
        disponible: true,
    }),
];


const modelos295 = modelos.filter(modelo => modelo.medidas === "295/80R22,5" && modelo.disponible);
const modelos275 = modelos.filter(modelo => modelo.medidas === "275/80R22,5" && modelo.disponible);
const modelos215 = modelos.filter(modelo => modelo.medidas === "215/75R17,5" && modelo.disponible);
const listaCompleta = [{medida: '295/80R22,5', modelos: modelos295}, {medida: '275/80R22,5', modelos: modelos275}, {medida: '215/75R17,5', modelos: modelos215}];

export { modelos, listaCompleta, ModeloCubierta };