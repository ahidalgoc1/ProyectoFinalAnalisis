from sqlalchemy.orm import Session
from . import models

def obtener_promociones_activas(db: Session):
    return db.query(models.Promocion).filter(
        models.Promocion.estado == "activo",
        models.Promocion.fecha_fin >= "NOW()"
    ).all()
