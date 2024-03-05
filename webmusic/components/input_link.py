import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.api.youtube_mp3_downloader import YoutubeMp3Downloader

class LinkInput(rx.State):
    id: str = ""


def input_link() -> rx.Component:
    return rx.vstack(
        rx.text(
            "Primero añade el enlace de la canción",
            font_size=styles.FontSize.BIG.value
            ),
        rx.hstack(
            rx.input(
                placeholder="Pega el enlace aquí",
                width="100%",
                colorScheme="whiteAlpha",
                variant="classic",
                on_blur=LinkInput.set_id,
            ),
            rx.button(
                rx.hstack(
                    rx.text(
                        "Buscar",
                        font_size=styles.FontSize.DEFAULT.value,
                        color=Color.TEXT_PRIMARY.value,
                    ),
                    rx.icon(
                        tag="search",
                        width="2em",
                        heihgt="2em",
                    ),
                    width="100%",
                    height="100%",
                ),
                on_click=rx.console_log(LinkInput.set_id),
                style=styles.button_menu_style,
                width="6.5em",
                height="2.em",
            ),
            width="100%",
        ),
        )