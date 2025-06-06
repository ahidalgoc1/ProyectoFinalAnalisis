from pydantic import BaseModel
from datetime import date

class PromocionBase(BaseModel):
    codigo: str
    descripcion: str
    descuento_porcentaje: float
    fecha_inicio: date
    fecha_fin: date
    usos_maximos: int
    estado: str

class PromocionResponse(PromocionBase):
    id_promocion: int

    class Config:
        orm_mode = True
