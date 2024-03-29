import reflex as rx
import webmusic.styles.styles as styles

def select_options(text: str, url: str, width_botton: str, width_link: str) -> rx.Component:
    return rx.link(
        rx.button(
            text,
            style=styles.button_menu_style,
            width=width_botton,
        ),
        href=url,
        is_external=False,
        width=width_link,
    )