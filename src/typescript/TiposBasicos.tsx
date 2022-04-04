import React from 'react'

export const TiposBasicos = () => {

    const nombre: string = 'Marcelo';
    const edad: number = 23;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua'];

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre},{edad},{estaActivo ? 'activo' : 'no activo'}
            <br></br>
            {poderes.join(', ')}
        </>
    )
}
