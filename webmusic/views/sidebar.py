import reflex as rx
from webmusic.views.menu_options_sidebar import menu_options_sidebar, menu_options_sidebar_shortened
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.routes import Route
from webmusic.api.state_components import StateComponents

def sidebar_extended() -> rx.Component:
    return rx.vstack(         
        rx.link(
            rx.vstack(
                rx.avatar(
                    src="/auriculares.ico", 
                    width="4em",
                    height="4em",
                ),
                rx.heading(
                    "Descarga Música", 
                    font_size=styles.FontSize.BIG.value,
                    margin_bottom=styles.Size.DEFAULT.value,
                    color=Color.TEXT_PRIMARY.value,
                    text_shadow="2px 2px 3px black",
                ), 
            ),
        href=Route.INDEX.value,
        is_external=False,
        ),
        menu_options_sidebar(),
        style=styles.sidebar_style,
    )


def sidebar_shortened() -> rx.Component:
    return rx.vstack(         
        rx.link(
            rx.vstack(
                rx.avatar(
                    src="/auriculares.ico", 
                    width="3em",
                    height="3em",
                ),
            margin_bottom="2em",
            ),
        href=Route.INDEX.value,
        is_external=False,
        ),
        menu_options_sidebar_shortened("column"),
        style=styles.sidebar_style,
    )

def sidebar_mobile() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.vstack(
                rx.avatar(
                    src="/auriculares.ico", 
                    width="2em",
                    height="2em",
                ),
            ),
        href=Route.INDEX.value,
        is_external=False,
        width="max-content",
        heihgt="100%",
        margin_left="0.5em",
        ),
        menu_options_sidebar_shortened("row"),
        gap="2.5em",
        background_color=Color.BG_TERCERARY.value,
        padding_y=styles.Size.SMALLEST.value,
        align="start",
        width="100%",
        heihgt="100%",
    )


def sidebar_cond() -> rx.Component:
    return rx.vstack(rx.cond(
        StateComponents.extend_sidebar,
        sidebar_extended(),
        sidebar_shortened(),    
        ),
    )