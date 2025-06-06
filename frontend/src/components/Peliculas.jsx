import { useEffect, useState } from "react";
import DetallesPelicula from "./DetallesPelicula";

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [genero, setGenero] = useState("");
  const [idioma, setIdioma] = useState("");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Función para normalizar texto (elimina acentos y convierte a minúsculas)
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // 👈 Esto elimina acentos
  };

  // Función para cargar películas con filtros normalizados
  const cargarPeliculas = () => {
    let url = "http://localhost:8000/peliculas";

    if (normalizeText(genero) === "proximo") {
      url = "http://localhost:8000/peliculas/proximas";  // 🔹 Corrección aplicada
    } else {
      const params = [];
      if (genero) params.push(`genero=${encodeURIComponent(normalizeText(genero))}`);
      if (idioma) params.push(`idioma=${encodeURIComponent(normalizeText(idioma))}`);

      if (params.length > 0) {
        url += "?" + params.join("&");
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPeliculas(data))
      .catch((error) => console.error("Error al cargar películas:", error));
  };

  // Cargar películas al inicio y cada vez que se cambia un filtro
  useEffect(() => {
    cargarPeliculas();
  }, [genero, idioma]);

  // Función para abrir modal con detalles de película
  const abrirModal = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setModalOpen(true);
  };

  return (
    <div>
      {/* Filtros */}
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Género:
          <select value={genero} onChange={(e) => setGenero(e.target.value)} style={{ marginLeft: "0.5rem", marginRight: "1rem" }}>
            <option value="">Todos</option>
            <option value="Acción">Accion</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
            <option value="Romance">Romance</option>
            <option value="Aventura">Aventura</option>
          </select>
        </label>

        <label>
          Idioma:
          <select value={idioma} onChange={(e) => setIdioma(e.target.value)} style={{ marginLeft: "0.5rem" }}>
            <option value="">Todos</option>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Francés">Francés</option>
          </select>
        </label>
      </div>

      {/* Lista de películas */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {peliculas.map((pelicula) => (
          <li key={pelicula.id_pelicula} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem", cursor: "pointer" }}
              onClick={() => abrirModal(pelicula)}>
            <h2>{pelicula.titulo}</h2>
            <p>{pelicula.sinopsis}</p>
            <small><strong>Género:</strong> {pelicula.genero} | <strong>Duración:</strong> {pelicula.duracion} min | <strong>Idioma:</strong> {pelicula.idioma}</small>
          </li>
        ))}
      </ul>

      {/* Modal de detalles */}
      {peliculaSeleccionada && (
        <DetallesPelicula 
          pelicula={peliculaSeleccionada} 
          open={modalOpen} 
          onClose={() => setModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default Peliculas;
