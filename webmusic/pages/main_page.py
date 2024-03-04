import reflex as rx
from webmusic.views.sidebar import sidebar
from webmusic.components.footer import footer
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color


def main_page() -> rx.Component:
    return rx.grid(
        sidebar(),
        rx.vstack(
            rx.heading(
                "Descarga y obtén información de la música que te gusta",
                padding_y=styles.Size.SMALLEST.value,
            ),
            footer(),
            background_color=Color.BG_PRIMARY.value,
        ),
        columns="2",
        rows="1",
        gridTemplateColumns="25% 75%",
        width="100%",
        height="100%",
    )

