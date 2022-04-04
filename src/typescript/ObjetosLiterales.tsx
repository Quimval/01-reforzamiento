interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {

    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Marcelo',
        edad: 23,
        direccion: {
            pais: 'Chile',
            casaNo: 168
        }
    }

    return (
        <>
            <h3>Objetos Lliterales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
