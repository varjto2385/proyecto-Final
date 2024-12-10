import logoimg from '../imagenes/Logo.png'
import { useState } from "react";
import axios from "axios";

function ContenedorLoginIn() {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [errorMensaje, setErrorMensaje] = useState ('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/sm-app/validarUsuarios',{
                email, password
            },{
                headers:{
                    'Content-Type': 'application/json'
                }
                //withCredentials: false,
            });
            if (response.data === true){
                alert('Inicio Sesion exitosa');
                //Redirigir//
            }
            else {
                setErrorMensaje ('Datos Incorrectos');
                alert ('Datos Incorrectos');
            }
        } catch (error) {
            console.error('Error al obtener el Usuario', error);
            setErrorMensaje('Error al conectar al Servidor');
        }
    }
    return (
    <div className="contenedor__login-in">
        <form id = "formulario__login" className="formulario__login" onSubmit={handleSubmit}>
            <center><img src={logoimg} width="200" height="152" alt="logo stock" /></center>
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Correo Electrónico" id="email" className="form-control mb-2" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" id="password" className="form-control mb-2" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type= "submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
    </div>
);
}
export default ContenedorLoginIn;