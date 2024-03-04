import reflex as rx
from webmusic.views.menu_options_sidebar import menu_options_sidebar
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color

class SideBarSatate(rx.State):
    # Initial State
    state_sidebar: bool = True

    def activate_sidebar(self):
        self.state_sidebar = True
    
    def desactivate_sidebar(self):
        self.state_sidebar = False

    @rx.var
    def get_state_sidebar(self) -> bool:
        return self.state_sidebar


def sidebar() -> rx.Component:
    return rx.vstack(            
        rx.avatar(
            src="/auriculares.ico", 
            width="4em",
            height="4em",
            ),
        rx.heading(
            "Descarga Música", 
            font_size=styles.FontSize.BIGGEST.value,
            margin_bottom=styles.Size.DEFAULT.value,
            color=Color.TEXT_PRIMARY.value,
            text_shadow="2px 2px 3px black",
        ), 

        menu_options_sidebar(),
        style=styles.sidebar_style,
    )