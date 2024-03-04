"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from webmusic.views.sidebar import sidebar
import webmusic.styles.styles as styles
from webmusic.pages.main_page import main_page

import reflex as rx



class State(rx.State):
    """The app state."""


# rx.button(
#     rx.icon(
#         tag="arrow-left-to-line",
#         stroke_width=3,
#         size=15,
#         #width="100%",
#     ),
#     width="40px"
# ),

def index() -> rx.Component:
    return main_page()


app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(index)
