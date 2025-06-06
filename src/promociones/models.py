from sqlalchemy import Column, Integer, String, Numeric, Date
from src.database import Base

class Promocion(Base):
    __tablename__ = "promocion"

    id_promocion = Column(Integer, primary_key=True, index=True)
    codigo = Column(String(50), unique=True, nullable=False)
    descripcion = Column(String(255), nullable=False)
    descuento_porcentaje = Column(Numeric(5,2), nullable=False)
    fecha_inicio = Column(Date, nullable=False)
    fecha_fin = Column(Date, nullable=False)
    usos_maximos = Column(Integer, nullable=False)
    estado = Column(String(20), nullable=False)
