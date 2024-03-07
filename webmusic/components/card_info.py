import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color


def card_info(data_info: rx.Base, data_download: rx.Base) -> rx.Component:
    return rx.grid(
        rx.image(
            src=data_info.img_src,
            width=f"{data_info.img_width}px",
            align_self="center",
            padding=styles.Size.BIG.value,
        ),
        rx.grid(
            rx.heading(
                data_info.title,
                font_size=styles.FontSize.BIGGEST.value,
                height="max-content",
                margin_bottom="0.2em"
            ),
            rx.text(
                "Canal: ",
                rx.text.strong(f"{data_info.author}"),
                style=styles.text_info_style,
                height="100%",
                padding_y="0.4em"
            ),
            rx.hstack(
                rx.text(
                    "Contador de visitas: ",
                    rx.text.strong(f"{data_info.view_count}"),
                    style=styles.text_info_style,
                    height="100%"
                ),
                rx.text(
                    "Peso del archivo: ",
                    rx.text.strong(f"{data_download.file_size} {data_download.format_size}"),
                    style=styles.text_info_style,
                    height="100%"
                ), 
                spacing="4",
                width="100%",
                padding_y="0.4em"
            ),
            
            rx.button(
                rx.text(
                    "Descargar",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
                on_click=rx.download(
                    url=data_download.link,
                    filename=data_download.title,
                ),
                style=styles.button_menu_style,
                height="max-content",
            ), 
            padding_x=styles.Size.DEFAULT.value,
            padding_y=styles.Size.BIGGEST.value,
            margin_x=styles.Size.BIGGEST.value,
            rows="4",
            columns="1",
            gridTemplateRows="50% 15% 15% 20%",
            align="center",
        ),
        columns="2",
        rows="1",
        style=styles.grid_info_style,
)