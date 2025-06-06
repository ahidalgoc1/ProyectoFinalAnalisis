import { useState } from 'react';
import './App.css';
import Peliculas from "./components/Peliculas";
import Promociones from "./components/Promociones";

function App() {
  const [vista, setVista] = useState('cartelera');

  return (
    <div className="App">
      {/* CABECERA COMPLETA */}
      <header className="main-header">
        <div className="logo-container">
          <img src="/logocine.png" className="logo" alt="Logo Cine" />
        </div>
        <h1 className="titulo-header">🎬 SISTEMA DE GESTIÓN DE CINE</h1>
      </header>

      {/* NAVEGACIÓN */}
      <nav className="nav-buttons">
        <button onClick={() => setVista('cartelera')}>Cartelera</button>
        <button onClick={() => setVista('proximamente')}>Próximamente</button>
        <button onClick={() => setVista('promociones')}>Promociones</button>
        <button onClick={() => setVista('contacto')}>Contacto</button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        {vista === 'cartelera' && (
          <>
            <h2>Películas en Cartelera</h2>
            <Peliculas />
          </>
        )}

        {vista === 'proximamente' && (
          <>
            <h2>Próximamente en tu cine favorito...</h2>
            <Peliculas /> {/* 🔄 Ya no se pasa la prop vista */}
          </>
        )}

        {vista === 'promociones' && (
          <>
            <Promociones />
          </>
        )}

        {vista === 'contacto' && (
          <>
            <h2>Contáctanos</h2>
            <p>📍 <strong>GRUPO 1</strong> SISTEMA DE GESTION DE CINE</p>
            <p>📍 <strong>Dirección:</strong> Calle Ficción 123, Ciudad Cine</p>
            <p>📞 <strong>Teléfono:</strong> (123) 456-7890</p>
            <p>✉️ <strong>Email:</strong> contacto@cine.com</p>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
