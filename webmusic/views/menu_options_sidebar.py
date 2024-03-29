import reflex as rx
from webmusic.components.select_options import select_options
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.routes import Route
import webmusic.utils as utils

def menu_options_sidebar() -> rx.Component:
    return rx.vstack(
        select_options(
            rx.hstack(
                rx.image(
                    src=utils.YOUTUBE_ICON,
                    width="100%",
                    max_width="2.5em",
                    height="auto",
                ),
                rx.text(
                    "Descargar canciones",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
            ),
            Route.YOUTUBE_DOWNLOAD.value,
            width_botton="100%",
            width_link="100%"
        ),
        select_options(rx.hstack(
                rx.image(
                    src=utils.SPOTIFY_ICON,
                    width="100%",
                    max_width="2.5em",
                    height="auto",
                ),
                rx.text(
                    "Descargar canciones",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
            ),
            Route.SPOTIFY_DOWNLOAD.value,
            width_botton="100%",
            width_link="100%"),
        select_options(
            rx.hstack(
                rx.image(
                    src=utils.YOUTUBE_ICON,
                    width="100%",
                    max_width="2.5em",
                    height="auto",
                ),
                rx.text(
                    "Descargar playlist",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
            ),
            Route.YOUTUBE_DOWNLOAD.value,
            width_botton="100%",
            width_link="100%"
        ),
        select_options(rx.hstack(
                rx.image(
                    src=utils.SPOTIFY_ICON,
                    width="100%",
                    max_width="2.5em",
                    height="auto",
                ),
                rx.text(
                    "Descargar playlist",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
            ),
            Route.SPOTIFY_PLAYLIST.value,
            width_botton="100%",
            width_link="100%"),
        align_items="left",
        spacing="3",
        width="100%",
        padding_x="1em",
    )

def menu_options_sidebar_shortened(direction_option: str) -> rx.Component:
    return rx.stack(
        select_options(
            rx.image(
                src=utils.YOUTUBE_ICON,
                width="2.5em",
                height="auto",
                ),
            Route.YOUTUBE_DOWNLOAD.value,
            width_botton="max-content",
            width_link="max-content"),
        select_options(
            rx.image(
                src=utils.SPOTIFY_ICON,
                width="2.5em",
                height="auto",
                ),
            Route.SPOTIFY_DOWNLOAD.value,
            width_botton="max-content",
            width_link="max-content"),
        select_options(
            rx.image(
                src=utils.YOUTUBE_ICON,
                width="2.5em",
                height="auto",
                ),
            Route.YOUTUBE_PLAYLIST.value,
            width_botton="max-content",
            width_link="max-content",
        ),
        select_options(
            rx.image(
                src=utils.SPOTIFY_ICON,
                width="2.5em",
                height="auto",
                ),
            Route.SPOTIFY_PLAYLIST.value,
            width_botton="max-content",
            width_link="max-content"
        ),
        align_items="center",
        spacing="3",
        width="max-content",
        height="100%",
        padding_x="0.4em",
        direction=direction_option,
    )