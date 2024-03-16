import reflex as rx

class SpotifyDownloadData(rx.Base):
    id: str = ''
    url_song: str = ''
    link_download: str = ''
    title: str = ''
    author: str = ''
    image: str = ''
    type: str = ''