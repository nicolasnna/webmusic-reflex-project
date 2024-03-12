import reflex as rx
from webmusic.components.select_options import select_options
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.routes import Route

def menu_options_sidebar() -> rx.Component:
    return rx.vstack(
        select_options(
            rx.hstack(
                rx.image(
                    src="/logo-yt.ico",
                    width="100%",
                    max_width="2.5em",
                    height="auto",
                ),
                rx.text(
                    "Descargar desde Youtube",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
            ),
            f"{Route.YOUTUBE_DOWNLOAD.value}",
            width_botton="100%",
            width_link="100%"
        ),
        select_options("segunda opcion","/",
            width_botton="100%",
            width_link="100%"),
        select_options("tercera opcion","/",
            width_botton="100%",
            width_link="100%"),
        select_options("cuarta opcion","/",
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
                src="/logo-yt.ico",
                width="2.5em",
                height="auto",
                ),
            f"{Route.YOUTUBE_DOWNLOAD.value}",
            width_botton="max-content",
            width_link="max-content"),
        select_options(
            rx.image(
                src="/logo-spotify.ico",
                width="2.5em",
                height="auto",
                ),
            "/",
            width_botton="max-content",
            width_link="max-content"),
        select_options(
            rx.image(
                src="/logo-spotify.ico",
                width="2.5em",
                height="auto",
                ),
            "/",
            width_botton="max-content",
            width_link="max-content"),
        select_options(
            rx.image(
                src="/logo-yt.ico",
                width="2.5em",
                height="auto",
                ),
            "/",
            width_botton="max-content",
            width_link="max-content",
            ),
        align_items="center",
        spacing="3",
        width="max-content",
        padding_x="0.4em",
        direction=direction_option,
    )