import reflex as rx
from webmusic.views.sidebar import sidebar
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color

# rx.button("Log", on_click=rx.console_log(LinkInput.link)),

def main_page() -> rx.Component:
    return rx.grid(
        sidebar(),
        rx.vstack(
            rx.heading(
                "Descarga y obtén información de la música que te gusta",
                padding_y=styles.Size.SMALLEST.value,
                margin_bottom="0px"
            ),
            input_link(),
            footer(),
            background_color=Color.BG_PRIMARY.value,
        ),
        columns="2",
        rows="1",
        gridTemplateColumns="25% 75%",
        width="100%",
        height="100%",
    )

