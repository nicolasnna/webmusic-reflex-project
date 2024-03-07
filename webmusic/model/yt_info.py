import reflex as rx

class YoutubeInfoData(rx.Base):
    id: str = ''
    author: str = ''
    title: str = ''
    view_count: str = ''
    img_src: str = ''
    img_width: int = 0
    img_height: int = 0