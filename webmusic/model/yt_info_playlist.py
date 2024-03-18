import reflex as rx

class YoutubeInfoPlaylistData(rx.Base):
    id_playlist: str = ''
    title_playlist: str = ''
    item_number_current: int = 0
    contents_playlist: list[dict] = []
    image_playlist: str = ''
    view_playlist: str = ''
    videos_count: int = 0