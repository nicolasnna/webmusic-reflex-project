import reflex as rx
from webmusic.views.sidebar import sidebar
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.styles.colors import Color
from webmusic.api.youtube_mp3_downloader import YoutubeMp3Downloader
from webmusic.routes import Route

@rx.page(
    route=Route.INDEX.value, 
    title='WebMusic', 
    image="/auriculares.ico",
    on_load=YoutubeMp3Downloader.getYoutubeMp3
)
def main_page() -> rx.Component:
    return rx.grid(
        sidebar(),
        rx.vstack(
            title(),
            input_link(rx.redirect(Route.YOUTUBE_INFO.value), YoutubeMp3Downloader.set_id),
            rx.button('log',on_click=rx.console_log(YoutubeMp3Downloader.querystring)),    
            footer(),
            background_color=Color.BG_PRIMARY.value,
            width="100%",
        ),  
        columns="2",
        rows="1",
        gridTemplateColumns="20% 80%",
        width="100%",
        height="100%",
    )

