


function CajaTrasera({ isLoginVisible, onLoginClick, onRegisterClick }){
    return (
        <div className="caja__trasera">
        {isLoginVisible ? (
            <div>
            <h3>¿Aun no tienes una Cuenta?</h3>
            <p>Regístrate para que puedas iniciar Sesion</p>
            <button onClick={onRegisterClick}>Registrarse</button>
            </div>
        ) : (
            <div>
            <h3>¿Ya tienes una Cuenta?</h3>
            <p>Inicia sesión para entrar en la Pagina</p>
            <button onClick={onLoginClick}>Iniciar sesión</button>
            </div>
        )}
    </div>
    );
}
export default CajaTrasera;