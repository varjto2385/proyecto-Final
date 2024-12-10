import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContenedorLoginRegister from './assets/componentes/ContenedorLoginRegister';
import ContenedorLoginIn from './assets/componentes/ContenedorLoginIn';
import CajaTrasera from './assets/componentes/CajaTrasera';
import {useEffect,useState} from 'react';





function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setLoginVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecuta la función una vez para el estado inicial
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoginClick = () => {
    setLoginVisible(true);
  };

  const handleRegisterClick = () => {
    setLoginVisible(false);
  };

  return (
    
    <div className="contenedor__todo">
      
      <CajaTrasera 
        isLoginVisible={isLoginVisible} 
        onLoginClick={handleLoginClick} 
        onRegisterClick={handleRegisterClick} 
      />

      <div className="form-container">
        {isLoginVisible ? (
        <ContenedorLoginIn />
      ) : (
        <ContenedorLoginRegister />
      )}
    </div>
      
</div>

);
}

export default App;
