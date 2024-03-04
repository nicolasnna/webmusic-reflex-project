import reflex as rx
from webmusic.components.select_options import select_options

def menu_options_sidebar() -> rx.Component:
    return rx.vstack(
        select_options("primera opcion","/"),
        select_options("segunda opcion","/"),
        select_options("tercera opcion","/"),
        select_options("cuarta opcion","/"),
        select_options("quinta opcion","/"),
        align_items="left",
        spacing="3",
        width="100%",
        padding_x="1em"
    )