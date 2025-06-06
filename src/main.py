# src/main.py
from fastapi import FastAPI
from src.peliculas.routes import router as peliculas_router
from src.promociones.routes import router as promocion_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.include_router(peliculas_router)
app.include_router(promocion_router)

# Agrega CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
