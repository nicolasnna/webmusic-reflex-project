import reflex as rx
from webmusic.components.select_options import select_options
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color

def menu_options_sidebar() -> rx.Component:
    return rx.vstack(
        select_options(
            rx.hstack(
                rx.image(
                    src="/logo-yt.ico",
                    width="2.5em",
                    height="auto",
                ),
                rx.text(
                    "Descargar desde Youtube",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
            ),
            "/"
        ),
        select_options("segunda opcion","/"),
        select_options("tercera opcion","/"),
        select_options("cuarta opcion","/"),
        select_options("quinta opcion","/"),
        align_items="left",
        spacing="3",
        width="100%",
        padding_x="1em",
    )

def menu_options_sidebar_shortened() -> rx.Component:
    return rx.vstack(
        select_options(
            rx.image(
                src="/logo-yt.ico",
                width="2.5em",
                height="auto",
                # color="red",
                # stroke_width="2"
                ),
            "/"),
        select_options(
            rx.image(
                src="/logo-spotify.ico",
                width="2.5em",
                height="auto",
                # color="red",
                # stroke_width="2"
                ),
            "/"),
        select_options(
            rx.image(
                src="/logo-spotify.ico",
                width="2.5em",
                height="auto",
                # color="red",
                # stroke_width="2"
                ),
            "/"),
        select_options(
            rx.image(
                src="/logo-yt.ico",
                width="2.5em",
                height="auto",
                # color="red",
                # stroke_width="2"
                ),
            "/"),
        align_items="left",
        spacing="3",
        width="100%",
        padding_x="0.4em",
    )