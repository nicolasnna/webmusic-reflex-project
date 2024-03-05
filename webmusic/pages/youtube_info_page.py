import reflex as rx
from webmusic.views.sidebar import sidebar
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.styles.colors import Color
from webmusic.api.youtube_mp3_downloader import YoutubeMp3Downloader
from webmusic.api.youtube_info import YoutubeInfo
from webmusic.routes import Route

@rx.page(
    route="/hola_pages", 
    title='WebMusic', 
    on_load=YoutubeInfo.getYoutubeInfo
)
def youtube_info_page() -> rx.Component:
    return rx.grid(
        sidebar(),
        rx.vstack(
            title(),
            input_link(YoutubeInfo.getDataYoutubeInfo,YoutubeInfo.set_id),
            rx.button('log',on_click=rx.console_log(YoutubeInfo.querystring)),
            footer(),
            background_color=Color.BG_PRIMARY.value,
        ),
        columns="2",
        rows="1",
        gridTemplateColumns="25% 75%",
        width="100%",
        height="100%",
    )


