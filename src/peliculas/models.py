# src/peliculas/models.py
from sqlalchemy import Column, Integer, String, Text
from src.database import Base

class Pelicula(Base):
    __tablename__ = "pelicula"  # ← nombre exacto de tu tabla en SQL

    id_pelicula = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(100), nullable=False)
    sinopsis = Column(Text)
    duracion = Column(Integer)
    clasificacion = Column(String(10))
    idioma = Column(String(50))
    genero = Column(String(50))
    url_trailer = Column(Text)
    estado = Column(String(20))  # puede ser: 'activo', 'inactivo'
