import reflex as rx

class YoutubeInfoData(rx.Base):
    author: str = ''
    title: str = ''
    view_count: int = 0
    img_src: str = ''
    img_width: int = 0
    img_heihgt: int = 0