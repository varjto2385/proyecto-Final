import { useState } from "react";
import axios from "axios";
import { Alert } from "bootstrap";
function ContenedorLoginRegister(){
    const [formData, setFromData] = useState ({
        nombre:'',
        email:'',
        user: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setFromData ({...formData, [id]:value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/sm-app/usuarios',formData);
            alert ('Usuario Registrado con exito');
            setFromData({
                nombre:'',
                email:'',
                user: '',
                password: '',
            });
        }
        catch (error) {
            console.error('Error al Guardar',error);
        }
    };

    return (
        <div >
            <div className='contenedor__login-register'>
                <form action="" id = "formulario__register" className="formulario__register" onSubmit={handleSubmit}>
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre completo" id="nombre" value={formData.nombre} onChange={handleInputChange}></input>
                    <input type="text" placeholder="Correo Electronico" id="email" value={formData.email} onChange={handleInputChange}></input>
                    <input type="text" placeholder="Usuario" id="user" value={formData.user} onChange={handleInputChange}></input>
                    <input type="password" placeholder="Contraseña" id="password" value={formData.password} onChange={handleInputChange}></input>
                    <button type="submit" className="btn1">Regístrarse</button>
                </form>
            
            </div>
        </div>
        
    )
}
export default ContenedorLoginRegister;


