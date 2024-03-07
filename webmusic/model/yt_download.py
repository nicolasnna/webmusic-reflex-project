import reflex as rx

class YoutubeDownloadData(rx.Base):
    link: str = ''
    title: str = ''
    duration: float = 0
    file_size: float = 0
    format_size: str = ''