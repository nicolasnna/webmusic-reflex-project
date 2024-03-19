import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.api.state_components import StateComponents

def header() -> rx.Component:
    return rx.fragment(
        rx.tablet_and_desktop(
            header_desktop(),
            width="100%",
            heihgt="100%",
        ),
        rx.mobile_only(
            header_mobile(),
            width="100%",
            heihgt="100%",
        )
    )


def header_desktop() -> rx.Component:
    return rx.hstack(
        rx.button(
            rx.cond(
                StateComponents.extend_sidebar,
                rx.icon(
                    tag="arrow-left-to-line",
                    width="3em",
                    heihgt="auto",
                    stroke_width="2.5"
                ),
                rx.icon(
                    tag="arrow-right-to-line",
                    width="3em",
                    heihgt="auto",
                    stroke_width="2.5"
                ),
            ),
            on_click=StateComponents.change_sidebar,
            background_color=Color.BG_TERCERARY.value,
            border=f"1px solid {Color.BG_PRIMARY.value}",
            color=Color.TEXT_PRIMARY.value,
            padding=styles.Size.SMALLEST.value,
            width="max-content",
            heihgt="max-content",
            background_image= f"linear-gradient({Color.GRADIENT.value}, {Color.BG_TERCERARY.value})",
            _hover={
                "background_image": f"linear-gradient({Color.BG_TERCERARY.value}, {Color.GRADIENT_SECONDARY.value})",
            },
        ),
        rx.spacer(),
        rx.heading(
            "Web Music", 
            font_size=styles.FontSize.BIGGEST.value,
            color=Color.TEXT_PRIMARY.value,
            text_shadow="4px 4px 4px black",
            margin_left="2em",
        ), 
        rx.spacer(),
        rx.heading(
            "Nicolás NA", 
            font_size=styles.FontSize.BIGGEST.value,
            color=Color.TEXT_PRIMARY.value,
            text_shadow="4px 4px 4px black",
        ), 
        text_align="center",
        width="100%",
        bg_color=Color.GRADIENT.value,
        margin_bottom=styles.Size.DEFAULT.value,
        padding_x=styles.Size.SMALL.value,
        padding_y=styles.Size.SMALL.value,
    )

def header_mobile() -> rx.Component:
    return rx.hstack(
        rx.heading(
            "Web Music", 
            font_size=styles.FontSize.BIGGEST.value,
            color=Color.TEXT_PRIMARY.value,
            text_shadow="4px 4px 4px black",

        ), 
        rx.spacer(),
        rx.heading(
            "Nicolás NA", 
            font_size=styles.FontSize.BIGGEST.value,
            color=Color.TEXT_PRIMARY.value,
            text_shadow="4px 4px 4px black",
        ), 
        text_align="center",
        width="100%",
        bg_color=Color.GRADIENT.value,
        margin_bottom=styles.Size.DEFAULT.value,
        padding_x=styles.Size.SMALL.value,
        padding_y=styles.Size.SMALL.value,
    )