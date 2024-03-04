import reflex as rx
from enum import Enum
from .colors import Color

class Size(Enum):
    SMALLEST = "0.4em"
    SMALL = "0.7em"
    DEFAULT = "1em"
    BIG = "1.2em"
    BIGGEST = "1.5em"

class FontSize(Enum):
    SMALLEST = "0.5em"
    SMALL = "0.8em"
    DEFAULT = "1em"
    BIG = "1.2em"
    BIGGEST = "1.5em"


button_menu_style = dict(
    width="100%",
    height="100%",
    border_radius=Size.SMALL.value,
    font_size=FontSize.DEFAULT.value,
    padding_x=Size.SMALL.value,
    padding_y=Size.SMALL.value, 
    background_color=Color.BG_TERCERARY.value,
    border=f"2px solid {Color.GRADIENT.value}",
    color=Color.TEXT_PRIMARY.value,
    background_image= f"linear-gradient({Color.GRADIENT.value}, {Color.BG_TERCERARY.value})",
    transition_duration= "0.2s",
    _hover={
        "background_image": f"linear-gradient({Color.BG_TERCERARY.value}, {Color.GRADIENT_SECONDARY.value})",
    },
)

sidebar_style = dict(
    position="fixed",
    height="100%",
    left="0px",
    top="0px",
    z_index="5",
    padding_x=Size.DEFAULT.value,
    padding_y=Size.DEFAULT.value,
    background_color=Color.BG_TERCERARY.value,
    border_right=f"{Size.SMALLEST.value} solid {Color.GRADIENT.value}",
    width="15em",
)

# Styles
BASE_STYLE = {
    rx.link: {
        "width": "100%",
    },
    rx.vstack: {
        "align_items": "center",
    },
    rx.hstack: {
        "align_items": "center",
    },
    rx.stack: {
        "align_items": "center"
    }
}