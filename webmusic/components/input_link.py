import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color

def input_link(event_handler: list, data_saver: str) -> rx.Component:
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
                on_blur=data_saver,
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
                on_click=event_handler,
                style=styles.button_menu_style,
                width="6.5em",
                height="2.em",
            ),
            width="100%",
        ),
        )