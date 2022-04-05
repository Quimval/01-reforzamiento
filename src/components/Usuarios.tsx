import React, { useEffect, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //Llamado al API
        reqResApi.get<ReqResListado>('/users').then(resp => {
            setUsuarios(resp.data.data);
        }).catch(console.log);
    }, [])


    const renderItem = (usuario: Usuario) => {

        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img src={usuario.avatar} alt={usuario.first_name} style={{ width:30,borderRadius:100}}/> 
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )

    }

    return (
        <>
            <h3>Usuarios: </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>

            <button className='btn btn-primary'>
                Siguientes
            </button>
        </>
    )
}
