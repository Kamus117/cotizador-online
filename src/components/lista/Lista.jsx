import React from 'react'
import Card from '../card/Card'
import style from './Lista.module.css'

const Lista = ({ arr }) => {
    /* arr = arr.modelos; */
    const medida = arr[0].medida
    arr = arr[0].modelos
    return (
        <section className={style.listaContainer}>
            <h2 className="section-title">⚡ Lineales {medida}</h2>
            <div className={style.division} >
                {/* Lineal */}
                {arr.some(item => item.tipo === 'lineal') && (
                    arr.filter(item => item.tipo === 'lineal').map(item => <Card key={item.id} {...item} />)
                )}
            </div>

            <h2 className="section-title">🚚 Tracción {medida}</h2>
            <div className={style.division}>
                {/* Tracción */}
                {arr.some(item => item.tipo === 'tracción') && (
                    arr.filter(item => item.tipo === 'tracción').map(item => <Card key={item.id} {...item} />)
                )}
            </div>

        </section>
    )
}

export default Lista