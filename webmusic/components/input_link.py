import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color

def input_link(event_handler: list, data_saver: str) -> rx.Component:
    return rx.vstack(
        rx.text(
            "Primero añade el enlace de la canción",
            font_size=styles.FontSize.BIG.value,
            text_align="center",
            margin_bottom="1em",
            ),
        rx.tablet_and_desktop(
            rx.hstack(
                rx.input(
                    placeholder="Pega el enlace aquí",
                    width="20em",
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
                            width="2.5em",
                            heihgt="auto",
                            stroke_width="2"
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
        ),
        rx.mobile_only(
            rx.vstack(
                rx.input(
                    placeholder="Pega el enlace aquí",
                    width="20em",
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
                            width="2.5em",
                            heihgt="auto",
                            stroke_width="2"
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
        ),
        margin_bottom="1em",   
    )