"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from webmusic.views.sidebar import sidebar
import webmusic.styles.styles as styles
from webmusic.pages.main_page import main_page

import reflex as rx



class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return main_page()


app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(index)
