import reflex as rx
import webmusic.styles.styles as styles

def title() -> rx.Component:
    return rx.heading(
        "Descarga y obtén información de la música que te gusta",
        padding_y=styles.Size.SMALLEST.value,
        padding_x=styles.Size.DEFAULT.value,
        margin_bottom=styles.Size.DEFAULT.value
    )