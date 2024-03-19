import reflex as rx

class SpotifyPlaylistData(rx.Base):
    id_playlist: str = ''
    total_song: int = 0
    current_number_song: int = 0
    list_item: list[dict] = []
    author: str = ''
    title: str = ''
    img_playlist: str = ''
    followers: str = ''