
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
    constructor({ id, nombre, marca, img, indiceCarga, tipo, precio, oferta = false, disponible = true, medidas }) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.img = img;
        this.indiceCarga = indiceCarga;
        this.cargaMaxima = INDICE_CARGA_MAP[indiceCarga] || null;
        this.tipo = tipo; // 'direccional', 'tracción', 'carga'
        this.precio = precio;
        this.oferta = oferta;
        this.disponible = disponible;
        this.cuotas = 5;
        this.precioCuota = Math.round(precio / this.cuotas);
        this.medidas = medidas;
    }
}

const modelos = [
    new ModeloCubierta({
        id: 1,
        nombre: "KRS03",
        marca: "KUMHO",
        img: "https://th.bing.com/th/id/OIP.2CULMo6NpHPtxm6RqCByegAAAA?rs=1&pid=ImgDetMain",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 629000,
        disponible: true,
        oferta: true,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 2,
        nombre: "AL26",
        marca: "HANKOOK",
        img: "https://example.com/al26.jpg",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 575000,
        oferta: true,
        disponible: true,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 3,
        nombre: "AC901",
        marca: "AUSTONE",
        img: "https://example.com/ac901.jpg",
        indiceCarga: 154,
        tipo: "lineal",
        precio: 495600,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 4,
        nombre: "TRS02",
        marca: "TRIANGLE",
        img: "https://example.com/ac901.jpg",
        indiceCarga: 154,
        tipo: "lineal",
        precio: 450000,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 5,
        nombre: "CR976AW",
        marca: "CORVEN",
        img: "https://example.com/cr976aw.jpg",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 429000,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 6,
        nombre: "TR668",
        marca: "TRIANGLE",
        img: "https://example.com/tr666.jpg",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 433000,
        medidas: "295/80R22,5",
    }),
    new ModeloCubierta({
        id: 7,
        nombre: "CR976AW",
        marca: "CHAOYANG",
        img: "https://example.com/cr976aw.jpg",
        indiceCarga: 150,
        tipo: "lineal",
        precio: 418000,
        medidas: "295/80R22,5",
    }),





    new ModeloCubierta({
        id: 8,
        nombre: "DH31",
        marca: "HANKOOK",
        img: "https://example.com/dh31.jpg",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 651000,
        medidas: "295/80R22,5",
    }),

    new ModeloCubierta({
        id: 9,
        nombre: "ADM207",
        marca: "AUSTONE",
        img: "https://example.com/adm207.jpg",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 497480,
        medidas: "295/80R22,5",
    }),

    new ModeloCubierta({
        id: 10,
        nombre: "TRD06",
        marca: "TRIANGLE",
        img: "https://example.com/trd06.jpg",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 473000,
        medidas: "295/80R22,5",
    }),

    new ModeloCubierta({
        id: 11,
        nombre: "AD153W",
        marca: "CORVEN",
        img: "https://example.com/ad153w.jpg",
        indiceCarga: 152,
        tipo: "tracción",
        precio: 473000,
        medidas: "295/80R22,5",
    }),





    new ModeloCubierta({
        id: 12,
        nombre: "KCA03",
        marca: "KUMHO",
        img: "https://example.com/kca03.jpg",
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
        img: "https://example.com/ah31.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 499999,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 14,
        nombre: "AT115",
        marca: "AUSTONE",
        img: "https://example.com/at115.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 382400,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 15,
        nombre: "TR666",
        marca: "TRIANGLE",
        img: "https://example.com/tr666.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 385000,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 16,
        nombre: "ZSR05",
        marca: "ZETUM",
        img: "https://example.com/zsr05.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 402000,
        promo: true,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 17,
        nombre: "CR976AW",
        marca: "CORVEN/CHAOYANG",
        img: "https://example.com/cr976aw.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 398900,
        medidas: "275/80R22,5",
    }),





    new ModeloCubierta({
        id: 18,
        nombre: "AD153W",
        marca: "CORVEN/CHAOYANG",
        img: "https://example.com/ad153w.jpg",
        indiceCarga: 149,
        tipo: "tracción",
        precio: 421500,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 19,
        nombre: "ZDR03",
        marca: "ZETUM",
        img: "https://example.com/zdr03.jpg",
        indiceCarga: 149,
        tipo: "tracción",
        precio: 417000,
        medidas: "275/80R22,5",
    }),





    new ModeloCubierta({
        id: 20,
        nombre: "TH22",
        marca: "HANKOOK",
        img: "https://example.com/th22.jpg",
        indiceCarga: 135,
        tipo: "lineal",
        precio: 272800,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 21,
        nombre: "CR976A",
        marca: "CORVEN/CHAO YANG",
        img: "https://example.com/cr976a.jpg",
        indiceCarga: 135,
        tipo: "lineal",
        precio: 206000,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 22,
        nombre: "KDR01",
        marca: "KUMHO",
        img: "https://example.com/kdr01.jpg",
        indiceCarga: 135,
        tipo: "tracción",
        precio: 218000,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 23,
        nombre: "TR689A",
        marca: "TRIANGLE",
        img: "https://example.com/tr689a.jpg",
        indiceCarga: 135,
        tipo: "tracción",
        precio: 226000,
        medidas: "215/75R17,5",
    }),
];


const modelos295 = modelos.filter(modelo => modelo.medidas === "295/80R22,5");
const modelos275 = modelos.filter(modelo => modelo.medidas === "275/80R22,5");
const modelos215 = modelos.filter(modelo => modelo.medidas === "215/75R17,5");
const listaCompleta = [{medida: '295', modelos: modelos295}, {medida: '275', modelos: modelos275}, {medida: '215', modelos: modelos215}];

export { modelos, listaCompleta, ModeloCubierta };