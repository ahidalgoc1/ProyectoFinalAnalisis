import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material"; 
// 🔹 Importamos componentes de Material UI para construir el modal: 
// - Dialog: estructura del modal 
// - DialogTitle: título en el modal
// - DialogContent: contenido dentro del modal
// - Button: botón de cierre

function DetallesPelicula({ pelicula, open, onClose }) { 
// 🔹 Declaramos el componente DetallesPelicula, que recibe tres props: 
// - pelicula: objeto con la información de la película (título, género, duración, sinopsis, tráiler) 
// - open: controla si el modal está abierto (true) o cerrado (false)
// - onClose: función que cierra el modal cuando el usuario presiona el botón

  return (
    <Dialog open={open} onClose={onClose}>  
    {/* 🔹 Si `open === true`, el modal aparece en pantalla; si es `false`, el modal se oculta */}
    
      <DialogTitle>{pelicula.titulo}</DialogTitle>  
      {/* 🔹 Título de la película dentro del modal */}

      <DialogContent>  
      {/* 🔹 Aquí mostramos la información detallada de la película */}
      
        <p><strong>Género:</strong> {pelicula.genero}</p>  
        {/* 🔹 Género de la película (ejemplo: Acción, Comedia, Terror) */}

        <p><strong>Duración:</strong> {pelicula.duracion} min</p>  
        {/* 🔹 Duración en minutos */}

        <p>{pelicula.sinopsis}</p>  
        {/* 🔹 Sinopsis o descripción breve de la película */}

        <iframe  
        // 🔹 Mostramos el tráiler de la película usando un `iframe` de YouTube
          width="100%"
          height="315"
          src={pelicula.url_trailer.includes("watch?v=")  
            ? pelicula.url_trailer.replace("watch?v=", "embed/")  
            : pelicula.url_trailer}  
          // 🔹 Convierte una URL estándar de YouTube en formato `embed/`
          // ❌ Ejemplo incorrecto: https://www.youtube.com/watch?v=YoHD9XEInc0
          // ✅ Ejemplo convertido: https://www.youtube.com/embed/YoHD9XEInc0
          
          title="Trailer"
          allowFullScreen  
          // 🔹 Permite ver el video en pantalla completa
        ></iframe>

        <Button onClick={onClose} color="primary">Cerrar</Button>  
        {/* 🔹 Botón para cerrar el modal al hacer clic */}
        
      </DialogContent>
    </Dialog>
  );
}

export default DetallesPelicula;  
// 🔹 Exportamos el componente para que otros archivos puedan usarlo (como `Peliculas.jsx`)
