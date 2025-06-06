# src/peliculas/schemas.py
from pydantic import BaseModel

class PeliculaBase(BaseModel):
    titulo: str
    sinopsis: str
    duracion: int
    clasificacion: str
    idioma: str
    genero: str
    url_trailer: str
    estado: str

class PeliculaResponse(PeliculaBase):
    id_pelicula: int

    class Config:
        orm_mode = True
