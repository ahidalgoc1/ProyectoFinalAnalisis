import { useState, useEffect } from "react";

function Promociones() {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
  fetch("http://localhost:8000/promociones")
    .then((res) => res.json())
    .then((data) => setPromociones(data))
    .catch((error) => console.error("Error en carga de promociones:", error));  // 👈 Mensaje de error en consola
}, []);


  return (
    <div>
      <h2> Promociones Activas </h2>
      <ul>
        {promociones.map((promo) => (
          <li key={promo.id_promocion}>
            <strong>{promo.descripcion}</strong> - {promo.descuento_porcentaje}% descuento hasta {promo.fecha_fin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Promociones;
