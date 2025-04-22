
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
        precio: 642000,
        disponible: true,
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
        precio: 434000,
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
        nombre: "TR666",
        marca: "TRIANGLE",
        img: "https://example.com/tr666.jpg",
        indiceCarga: 152,
        tipo: "lineal",
        precio: 422000,
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



    /* *295/80R22,5 Tracción*
    
    HANKOOK 152/148M DH31 $651.000
    
    AUSTONE 152/149M ADM207 $497.480
    
    TRIANGE TRD06 $473.000 (6u DISPO)
    
    CORVEN/CHAOYANG AD153W $473.000
    
     */
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

    /* 
    *275/80R22,5 Lineales*
    
    KUMHO KCA03 $619.000
    
    HANKOOK 149/146L AH31 $499.999
    
    AUSTONE 149/146M AT115 $382.400
    
    TRIANGLE TR666 $374.900 *PROMO*
    
    ZETUM ZSR05 $412.000
    
    CORVEN/CHAOYANG 149/146M CR976AW $398.900
    */

    new ModeloCubierta({
        id: 12,
        nombre: "KCA03",
        marca: "KUMHO",
        img: "https://example.com/kca03.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 619000,
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
        precio: 374900,
        medidas: "275/80R22,5",
    }),

    new ModeloCubierta({
        id: 16,
        nombre: "ZSR05",
        marca: "ZETUM",
        img: "https://example.com/zsr05.jpg",
        indiceCarga: 149,
        tipo: "lineal",
        precio: 412000,
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

    /* 
    
*275/80R22,5 Tracción*

CORVEN/CHAOYANG 149/146L AD153W $421,500

ZETUM  ZDR03 $406.000 *PROMO*

    */

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
        precio: 406000,
        medidas: "275/80R22,5",
    }),

    /* 
    *215/75R17,5 Lineales*

HANKOOK 215/75R17,5 TH22 135/133 $272.800 

CORVEN/CHAO YANG 135/133J CR976A $206.000 *PROMO*

*215/75R17,5 Tracción*

KUMHO KDR01 $210.000 *PROMO*

TRIANGLE TR689A $220.000 

    */

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
        precio: 210000,
        medidas: "215/75R17,5",
    }),

    new ModeloCubierta({
        id: 23,
        nombre: "TR689A",
        marca: "TRIANGLE",
        img: "https://example.com/tr689a.jpg",
        indiceCarga: 135,
        tipo: "tracción",
        precio: 220000,
        medidas: "215/75R17,5",
    }),
];


const modelos295 = modelos.filter(modelo => modelo.medidas === "295/80R22,5");
const modelos275 = modelos.filter(modelo => modelo.medidas === "275/80R22,5");
const modelos215 = modelos.filter(modelo => modelo.medidas === "215/75R17,5");
const listaCompleta = [{medida: '295', modelos: modelos295}, {medida: '275', modelos: modelos275}, {medida: '215', modelos: modelos215}];

export { modelos, listaCompleta, ModeloCubierta };