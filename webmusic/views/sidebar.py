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
        menu_options_sidebar_shortened(),
        style=styles.sidebar_style,
    )


def sidebar_cond() -> rx.Component:
    return rx.vstack(rx.cond(
        StateComponents.extend_sidebar,
        sidebar_extended(),
        sidebar_shortened(),    
        ),
    )