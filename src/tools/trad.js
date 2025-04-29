const trad = {
    precio : (n) => n.toLocaleString("es-AR"),
    nombre : (nombre) => nombre.split(' ').map(palabra => palabra[0].toUpperCase() + palabra.slice(1)).join(' '), 
}


export default trad