import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.api.state_components import StateComponents
from webmusic.model.yt_download import YoutubeDownloadData
from webmusic.model.yt_info import YoutubeInfoData

def card_content(data_info: YoutubeInfoData, data_download: YoutubeDownloadData) -> rx.Component:
    return rx.vstack(
        rx.text(
            "Canal: ",
            rx.text.strong(f"{data_info.author}"),
            style=styles.text_info_style,
            height="100%",
            padding_y="0.4em",
        ),
        rx.hstack(
            rx.text(
                "Contador de visitas: ",
                rx.text.strong(f"{data_info.view_count}"),
                style=styles.text_info_style,
                height="100%",
            ),
            rx.spacer(),
            rx.hover_card.root(
                rx.hover_card.trigger(
                    rx.text(
                        "Peso del archivo: ",
                        rx.text.strong(f"{data_download.file_size} {data_download.format_size}"),
                        style=styles.text_info_style,
                        height="100%"
                    ), 
                ),
                rx.hover_card.content(
                    rx.text(
                        "Solo se reconoce canciones individuales, las playlist se omiten",
                        font_size=styles.FontSize.DEFAULT.value,
                        text_align="center",
                        color=Color.TEXT_SECONDARY.value,
                        margin_bottom="1em",
                    ),
                ),
            ),
            spacing="4",
            width="100%",
            align="center",
            padding_y="0.4em"
        ),
        rx.button(
            rx.hstack(
                rx.text(
                    "Descargar MP3",
                    font_size=styles.FontSize.BIG.value,
                    color=Color.TEXT_PRIMARY.value,
                ),
                rx.icon(
                    tag="arrow-down-to-line",
                    width="1.7em",
                    heihgt="auto",
                    stroke_width="2.5"
                )
            ),
            on_click=rx.download(
                url=data_download.link,
                filename=data_download.title,
            ),
            style=styles.button_menu_style,
            height="max-content",
        ), 
    )

def card_info_cond(data_info: rx.Base, data_download: rx.Base) -> rx.Component:
    return rx.cond(
        StateComponents.show_card_info,
        rx.fragment(
            rx.tablet_and_desktop(
                rx.grid(
                    rx.image(
                        src=data_info.img_src,
                        width="480px",
                        height="auto",
                        padding=styles.Size.BIG.value,
                    ),
                    rx.grid(
                        rx.heading(
                            data_info.title,
                            font_size=styles.FontSize.BIGGEST.value,
                            height="max-content",
                            padding_y="0.5em",
                            align="center"
                        ),
                        card_content(data_info,data_download),
                        padding_x=styles.Size.DEFAULT.value,
                        padding_y=styles.Size.BIGGEST.value,
                        margin_x=styles.Size.BIGGEST.value,
                        rows="2",
                        columns="1",
                        spacing="0",
                        gridTemplateRows="40% 60%",
                        align="center",
                    ),
                    columns="2",
                    rows="1",
                    style=styles.grid_info_style,
                )
            ),
            rx.mobile_only(
                rx.vstack(
                    rx.heading(
                        data_info.title,
                        font_size=styles.FontSize.BIGGEST.value,
                        height="max-content",
                        padding_bottom="0.5em"
                    ),
                    rx.image(
                        src=data_info.img_src,
                        width=f"{data_info.img_width}px",
                        align_self="center",
                        padding=styles.Size.BIG.value,
                    ),
                    card_content(data_info,data_download),
                    width="100%",
                    height="100%",
                    padding_x=styles.Size.DEFAULT.value,
                )
            )
        ),
    )