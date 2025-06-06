# src/peliculas/routes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from src.database import get_db
from . import schemas, service

router = APIRouter(prefix="/peliculas", tags=["Películas"])

@router.get("/", response_model=List[schemas.PeliculaResponse])
def listar_peliculas(genero: Optional[str] = None, idioma: Optional[str] = None, db: Session = Depends(get_db)):
    if genero or idioma:
        return service.filtrar_peliculas(db, genero, idioma)
    return service.obtener_peliculas(db)

@router.get("/{id_pelicula}", response_model=schemas.PeliculaResponse)
def detalle_pelicula(id_pelicula: int, db: Session = Depends(get_db)):
    pelicula = service.obtener_pelicula(db, id_pelicula)
    if not pelicula:
        raise HTTPException(status_code=404, detail="Película no encontrada")
    return pelicula

@router.get("/peliculas/proximas", response_model=List[schemas.PeliculaResponse])  # 🔹 Nueva ruta para películas futuras
def listar_peliculas_proximas(db: Session = Depends(get_db)):
    return service.obtener_peliculas_proximas(db)

