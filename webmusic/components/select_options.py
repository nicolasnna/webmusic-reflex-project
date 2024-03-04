import reflex as rx
import webmusic.styles.styles as styles

def select_options(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            text,
            style=styles.button_menu_style,
        ),
        href=url,
        is_external=False,
    )