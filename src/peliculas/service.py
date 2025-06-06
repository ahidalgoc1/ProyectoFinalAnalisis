from sqlalchemy.orm import Session
from sqlalchemy import func
from . import models
from typing import List, Optional

def obtener_peliculas(db: Session) -> List[models.Pelicula]:
    return db.query(models.Pelicula).filter(models.Pelicula.estado == "activo").all()

def filtrar_peliculas(db: Session, genero: Optional[str] = None, idioma: Optional[str] = None) -> List[models.Pelicula]:
    query = db.query(models.Pelicula).filter(models.Pelicula.estado == "activo")

    if genero and genero.strip():  # Evita errores con valores vacíos
        query = query.filter(func.unaccent(models.Pelicula.genero).ilike(f"%{genero.strip()}%"))
    if idioma and idioma.strip():  # Evita errores con valores vacíos
        query = query.filter(func.unaccent(models.Pelicula.idioma).ilike(f"%{idioma.strip()}%"))

    return query.all()

def obtener_pelicula(db: Session, id_pelicula: int) -> Optional[models.Pelicula]:
    return db.query(models.Pelicula).filter(models.Pelicula.id_pelicula == id_pelicula).first()

def obtener_peliculas_proximas(db: Session) -> List[models.Pelicula]:  
    return db.query(models.Pelicula).filter(models.Pelicula.genero.ilike("Próximo")).all()  
