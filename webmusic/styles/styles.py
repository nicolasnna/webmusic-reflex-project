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
    SMALLEST = "50%"
    SMALL = "80%"
    DEFAULT = "100%"
    BIG = "120%"
    BIGGEST = "150%"
    TITLE = "200%"


button_menu_style = dict(
    width="100%",
    height="100%",
    border_radius=Size.SMALL.value,
    font_size=FontSize.SMALL.value,
    padding_x=Size.SMALL.value,
    padding_y=Size.SMALL.value, 
    background_color=Color.BG_TERCERARY.value,
    border=f"2px solid {Color.GRADIENT.value}",
    color=Color.TEXT_PRIMARY.value,
    background_image= f"linear-gradient({Color.GRADIENT.value}, {Color.BG_TERCERARY.value})",
    _hover={
        "background_image": f"linear-gradient({Color.BG_TERCERARY.value}, {Color.GRADIENT_SECONDARY.value})",
    },
)

sidebar_style = dict(
    position="sticky",
    min_height="100vh",
    max_height="max-content",
    width="100%",    
    left="0px",
    z_index="5",
    padding_x="0",
    padding_y=Size.DEFAULT.value,
    background_color=Color.BG_TERCERARY.value,
    transition="width 2s",
    display="inline", 
)

footer_style = dict(
    width="100%",
    height="100%",
    background_color=Color.GRADIENT.value,
    padding_y=Size.SMALLEST.value,
    padding_top=Size.BIGGEST.value,
)

grid_info_style = dict(
    width="100%",
    height="100%",
    align="center",
    gridTemplateColums="40% 60%",
    gridTemplateRows="max-content",
)

text_info_style = dict(
    font_size=FontSize.BIG.value,
    text_align="center"
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
    },
    rx.text: {
        "font_size": FontSize.SMALL.value,
        "color": Color.TEXT_SECONDARY.value,
    },
    rx.heading: {
        "font_size":FontSize.TITLE.value,
        "margin_bottom":Size.DEFAULT.value,
        "color":Color.TEXT_SECONDARY.value,
        "text_shadow":f"4px 4px 4px {Color.BG_SECONDARY.value}",
        "text_align":"center"
    },
}