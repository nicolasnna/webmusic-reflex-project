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
        style=styles.sidebar_extended_style,
    )


def sidebar_shortened(direction_stack: str) -> rx.Component:
    return rx.stack(         
        rx.link(
            rx.vstack(
                rx.avatar(
                    src="/auriculares.ico", 
                    width="2.5em",
                    height="auto",
                ),
            margin_bottom="0.5em",
            ),
            rx.tablet_and_desktop(
                margin_y="2em",
            ),
            href=Route.INDEX.value,
            is_external=False,
            width="max-content",
            heihgt="100%",
            margin_x="0.5em",
        ),
        rx.mobile_only(
            menu_options_sidebar_shortened("row"),
            heihgt="100%",
            gap="2.5em",
        ),
        rx.tablet_and_desktop(
            menu_options_sidebar_shortened("column"),
            height="100vh",
            gap="1.5em",
        ),
        style=styles.sidebar_shortened_style,
        direction=direction_stack,
    )

def sidebar_cond() -> rx.Component:
    return rx.vstack(rx.cond(
        StateComponents.extend_sidebar,
        sidebar_extended(),
        sidebar_shortened(direction_stack="column"),    
        ),
    )