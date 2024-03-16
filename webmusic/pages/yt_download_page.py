import reflex as rx
from webmusic.views.sidebar import sidebar_cond, sidebar_shortened
from webmusic.components.card_info_yt import card_info_cond
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.components.header import header
from webmusic.styles.colors import Color
from webmusic.api.manage_yt_apis import ManageYoutubeApi
from webmusic.api.state_components import StateComponents
from webmusic.routes import Route
import webmusic.styles.styles as styles
import webmusic.utils as utils

def page_content() -> rx.Component:
    return rx.vstack(
        rx.mobile_only(
            sidebar_shortened(direction_stack="row"),
            width="100%"
        ),
        header(),
        rx.image(
            src=utils.YOUTUBE_ICON,
            width="100%",
            max_width="5.5em",
            height="auto",
        ),
        title("Descarga tus músicas preferidas en MP3 desde Youtube"),
        rx.text(
            "Primero añade el enlace de la canción",
            font_size=styles.FontSize.BIG.value,
            text_align="center",
            margin_bottom="1em",
        ),
        input_link(
            ManageYoutubeApi.get_id_from_url_and_redirect, 
            ManageYoutubeApi.set_url,
            "Pega el enlace aquí"
        ),
        rx.text(
            "*(Solo se reconoce canciones individuales, las playlist se omiten)",
            font_size=styles.FontSize.SMALL.value,
            text_align="center",
            margin_bottom="1em",
        ),
        card_info_cond(
            ManageYoutubeApi.data_info,
            ManageYoutubeApi.data_download  
        ),
        footer(),
        background_color=Color.BG_PRIMARY.value,
        width="100%",
        spacing="0",
    )    


@rx.page(
    route=f"{Route.YOUTUBE_DOWNLOAD.value}/[id]",
    title='WebMusic', 
    on_load=[StateComponents.change_card_info(False),
             ManageYoutubeApi.getYoutubeInfo,
             ManageYoutubeApi.getYoutubeMp3]
)
def youtube_download_page() -> rx.Component:
    return rx.fragment(
        rx.tablet_and_desktop(
             rx.grid(
                sidebar_cond(),
                page_content(),
                gridTemplateColumns=StateComponents.grid_sidebar,
                width="100%",
                height="100%",
            ),
        ),
        rx.mobile_only(
            page_content(),
        ),
    )



