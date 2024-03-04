import reflex as rx
import webmusic.styles.styles as styles


def button_sidebar() -> rx.Component: 
    return rx.button(
        rx.icon(
            tag="arrow-left-to-line",
            stroke_width=3,
            size=15,
            #width="100%",
        ),
        width="40px"
    )   