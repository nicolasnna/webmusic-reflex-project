# WebMusic 

Página Web para descargar canciones de YouTube y Spotify en MP3.

<img src ="images/ejemplo yt.png" width="500"> 
<img src ="images/ejemplo mobile.png" width="150">

# Características

* Página *responsive* adaptado para móviles.
* Uso de APIs para busqueda y descarga de canciones tanto para YouTube como Spotify.
* Busqueda de canciones individuales o por *playlist*.
* Desarrollada con el *framework* [Reflex](https://reflex.dev) con Python puro.

# Ejecución local

1. Crear entorno virtual de Python:
```
python -m venv .venv
```

2. Activar entorno virtual:

Windows: 
```
.venv\Scripts\activate
```

3. Instalar dependencias requeridas:
```
python -m pip install -r requirements.txt
```

4. Configurar variable de entorno (.env) para la utilización de APIs desde [RAPIDAPI](https://rapidapi.com/hub):
```
RAPIDAPI_KEY=<KEY>
```
Es necesario subscribirse a las siguientes APIs: 

- [Spotify](https://rapidapi.com/Glavier/api/spotify23)
- [Spotify Downloader](https://rapidapi.com/tahirafridi/api/spotify-downloader6)
- [Youtube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)
- [YouTube to mp3](https://rapidapi.com/marcocollatina/api/youtube-to-mp315)

5. Inicializar Reflex:
```
reflex init
```

6. Ejecutar a través de Reflex:
```
reflex run
```

> [!NOTE]
> Acceder a `http://localhost:3000/` para ver la página