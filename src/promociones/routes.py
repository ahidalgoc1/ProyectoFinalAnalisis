from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from src.database import get_db
from typing import List
from sqlalchemy.sql import func  
from . import models, schemas, service


router = APIRouter(prefix="/promociones", tags=["Promociones"])



@router.get("/", response_model=list[schemas.PromocionResponse])  # 👈 Corrección aquí
def listar_promociones(db: Session = Depends(get_db)):
    return db.query(models.Promocion).filter(
        models.Promocion.estado == "activo",
        models.Promocion.fecha_fin >= func.current_date()
    ).all()
