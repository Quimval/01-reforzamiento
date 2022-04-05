import { type } from '@testing-library/user-event/dist/type';
import { stat } from 'fs';
import React, { useEffect, useReducer } from 'react'


interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;

}

const initalState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type AuthAction = { type: 'logout' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }

            break;

        default:
            return state;
    }

}

export const Login = () => {

    const [{validando}, dispatch] = useReducer(authReducer, initalState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    if (validando) {
        return (
            <>            <h3>Login</h3>

                <div className='alert alert-info'>Validando...</div></>
        )
    }


    return (
        <>
            <h3>Login</h3>

            <div className='alert alert-danger'>No autenticado</div>
            <div className='alert alert-success'>Autenticado</div>

            <button className='btn btn-primary'>
                Login
            </button>

            <button className='btn btn-danger'>
                Log Out
            </button>
        </>
    )
}
