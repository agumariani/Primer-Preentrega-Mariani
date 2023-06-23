import React, { useState } from 'react';
import './Checkoutform.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };

        if (email !== emailConfirm) {
            setError('Los correos no coinciden, por favor verifica ambos campos.');
            return;
        }

        onConfirm(userData);
    };

    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form'>
            <h2 className='tituloCheckout'>Terminar Compra</h2>
                <label className='label'>Nombre</label>

                <input
                    className='input'
                    type='text'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />

                <label className='label'>Telefono</label>

                <input
                    className='input'
                    type='number'
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                />

                <label className='label'>Email</label>

                <input
                    className='input'
                    type='email'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />

                <label className='label'>Confirmar Email</label>

                <input
                    className='input'
                    type='email'
                    value={emailConfirm}
                    onChange={({ target }) => setEmailConfirm(target.value)}
                />
                {error && <p className='error'>{error}</p>}

                <div>
                    <button type='submit' className='Button'>
                        Crear Orden
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
