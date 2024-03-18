import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color

def button_style(text: str, tag_icon: str, event_click, position_left: bool) -> rx.Component:
    return rx.fragment(
        rx.button(
            rx.cond(
                position_left,
                rx.hstack(
                    rx.icon(
                        tag=tag_icon,
                        width="1.7em",
                        heihgt="auto",
                        stroke_width="2.5"
                    ),
                    rx.text(
                        text,
                        font_size=styles.FontSize.BIG.value,
                        color=Color.TEXT_PRIMARY.value,
                    ),
                ),
                rx.hstack(
                    rx.text(
                        text,
                        font_size=styles.FontSize.BIG.value,
                        color=Color.TEXT_PRIMARY.value,
                    ),
                    rx.icon(
                        tag=tag_icon,
                        width="1.7em",
                        heihgt="auto",
                        stroke_width="2.5"
                    ),
                ),
            ),
            on_click=event_click,
            style=styles.button_menu_style,
            height="max-content",
        ), 
    )