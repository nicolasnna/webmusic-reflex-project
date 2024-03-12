import reflex as rx
import webmusic.styles.styles as styles

def title(title:str) -> rx.Component:
    return rx.heading(
        title,
        padding_y=styles.Size.SMALLEST.value,
        padding_x=styles.Size.DEFAULT.value,
        margin_bottom=styles.Size.DEFAULT.value
    )