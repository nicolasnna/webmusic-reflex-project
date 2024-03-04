import reflex as rx
from webmusic.views.sidebar import sidebar
import webmusic.styles.styles as styles


def main_page() -> rx.Component:
    return rx.fragment(
        sidebar(),
        rx.container(
            rx.text('asdggfadgadgadfhadrgefsdfaeedaslkfnklasfnlkaenfjlnejnfkawbfnkjbdnafhbwehfbwahbfajwhbfaewkjhfbdsabfnbehjfbwafhbhb'),
            margin_left="16em"
        ),      
    )

