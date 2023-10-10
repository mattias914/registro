import { useState } from 'react';
import './Formulario.css';
import Alert from '../Alert';

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail ] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [cContraseña, setCContresaña] = useState('')
    const [error , setError] = useState(null)
    const [enviado, setEnviado] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contraseña === '') {
            setError('campos')
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        };

        if (contraseña !== cContraseña) {
            setError('constraseñas');
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }

        if (!email.includes("@")) {
            setError('email');
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }

        
        setEnviado(true)
        alert('Todo correcto formulario enviado');
        setError(null)
        setNombre('')
        setEmail('')
        setContraseña('')
        setCContresaña('')

        
    }

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div>
                    <input 
                    type="text"
                    placeholder='Nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <input type="text" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="password" 
                    placeholder='Contraseña'
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <div>
                    <input type="password" 
                    placeholder='Confirmar Contraseña'
                    value={cContraseña}
                    onChange={(e) => setCContresaña(e.target.value)}/>
                </div>
                <button className='btn' type='submit'>
                    Enviar
                </button>

                <Alert error={error}/>

            </form>
        </>
    )
};

export default Formulario;