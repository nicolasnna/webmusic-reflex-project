import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.api.state_components import StateComponents
from webmusic.model.spotify_download import SpotifyDownloadData

def card_content(data_download: SpotifyDownloadData) -> rx.Component:
    return rx.vstack(
        rx.text(
            "Artista: ",
            rx.text.strong(f"{data_download.author}"),
            style=styles.text_info_style,
            heihgt="100%",
            padding_y="0.4em",
        ),
        rx.text(
            "Tipo de contenido: ",
            rx.text.strong(f"{data_download.type}"),
            style=styles.text_info_style,
            heihgt="100%",
            padding_y="0.4em",
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
                url=data_download.link_download,
                filename=data_download.title,
            ),
            style=styles.button_menu_style,
            height="max-content",
        ), 
    )


def card_info_spotify(data_download: SpotifyDownloadData) -> rx.Component:
    return rx.cond(
        StateComponents.show_card_info,
        rx.fragment(
            rx.tablet_and_desktop(
                rx.grid(
                    rx.image(
                        src=data_download.image,
                        width="480px",
                        height="auto",
                        padding=styles.Size.BIG.value,
                    ),
                    rx.grid(
                        rx.heading(
                            data_download.title,
                            font_size=styles.FontSize.BIGGEST.value,
                            height="max-content",
                            padding_y="0.5em",
                            align="center"
                        ),
                        card_content(data_download),
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
                    style=styles.grid_info_style
                ),
            ),
            rx.mobile_only(
                rx.vstack(
                    rx.heading(
                        data_download.title,
                        font_size=styles.FontSize.BIGGEST.value,
                        height="max-content",
                        padding_y="0.5em",
                        align="center"
                    ),
                    rx.image(
                        src=data_download.image,
                        width="480px",
                        height="auto",
                        padding=styles.Size.BIG.value,
                    ),
                    card_content(data_download),
                    width="100%",
                    height="100%",
                    padding_x=styles.Size.DEFAULT.value,
                )
            )
        ),
    )



