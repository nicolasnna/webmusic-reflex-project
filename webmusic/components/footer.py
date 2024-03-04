import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color


def footer() -> rx.Component:
    return rx.stack(
        rx.avatar(
            src="/auriculares.ico",
            width="3em",
            height="3em",
            border=f"3px solid {Color.BG_SECONDARY.value}",   
            padding="0.2em", 
            bg=Color.BG_PRIMARY.value
        ),
        rx.text(
            "Esta página ha sido desarrollada por fines educativos.",
            margin_top="0.6em",
            color=Color.TEXT_PRIMARY.value,
        ),
        rx.text(
            "Nicolás Norambena Alarcón. 2024",
            color=Color.TEXT_PRIMARY.value,
        ),
        direction="column",
        spacing="0",
        style=styles.footer_style,
    )