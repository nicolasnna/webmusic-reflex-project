import reflex as rx
from webmusic.views.sidebar import sidebar_cond,sidebar_shortened
from webmusic.components.footer import footer
from webmusic.components.title import title
from webmusic.components.header import header
from webmusic.styles.colors import Color
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
            src=utils.WEB_LOGO,
            width="100%",
            max_width="5.5em",
            height="auto",
        ),
        title("Busca y descarga la música que te gusta"),
        # Download song
        rx.text(
            "Busqueda por canciones individuales:",
            font_size=styles.FontSize.BIG.value,
            text_align="center",
            margin_bottom="1em",
        ),
        rx.stack(
            rx.link(
                rx.image(
                    src=utils.YOUTUBE_ICON,
                    width="6em",
                    height="auto",
                ),
                href=f"{Route.YOUTUBE_DOWNLOAD.value}",
                style=styles.icon_link_style
            ),
            rx.link(
                rx.image(
                    src=utils.SPOTIFY_ICON,
                    width="6em",
                    height="auto",
                ),
                href=f"{Route.SPOTIFY_DOWNLOAD.value}",
                style=styles.icon_link_style
            ),
            align="center",
            direction="row",
            width="max-content",
            heigth="100%",
        ),
        # Download playlist
        rx.text(
            "Busqueda por playlist:",
            font_size=styles.FontSize.BIG.value,
            text_align="center",
            margin_bottom="1em",
            margin_top="2em",
        ),
        rx.stack(
            rx.link(
                rx.image(
                    src=utils.YOUTUBE_ICON,
                    width="6em",
                    height="auto",
                ),
                href=f"{Route.YOUTUBE_PLAYLIST.value}",
                style=styles.icon_link_style
            ),
            rx.link(
                rx.image(
                    src=utils.SPOTIFY_ICON,
                    width="6em",
                    height="auto",
                ),
                href=f"{Route.SPOTIFY_PLAYLIST.value}",
                style=styles.icon_link_style
            ),
            align="center",
            direction="row",
            width="max-content",
            heigth="100%",
        ),

        # # BORRAR EN CASO DE AÑADIR ALGO MÁS
        # rx.box(height="15vh"),
        # #
        footer(),
        background_color=Color.BG_PRIMARY.value,
        width="100%",
        spacing="0",
    )    


@rx.page(
    route=Route.INDEX.value, 
    title='WebMusic', 
    #on_load=ManageYoutubeApi.getYoutubeInfo
)
def main_page() -> rx.Component:
    return rx.box(
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
   

