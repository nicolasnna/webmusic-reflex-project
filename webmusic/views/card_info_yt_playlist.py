import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.api.state_components import StateComponents
from webmusic.model.yt_info import YoutubeInfoData
from webmusic.model.yt_download import YoutubeDownloadData
from webmusic.model.yt_info_playlist import YoutubeInfoPlaylistData
from ..components.button_style import button_style
from webmusic.api.manage_yt_apis import ManageYoutubeApi

def card_content(data_playlist: YoutubeInfoPlaylistData, 
                 show_song_playlist: bool,
                 data_info: YoutubeInfoData,
                 data_download: YoutubeDownloadData) -> rx.Component:
    return rx.vstack(
        # Playlist Content
        rx.hstack(
            rx.text(
                "Contador de visitas: ",
                rx.text.strong(f"{data_playlist.view_playlist}"),
                style=styles.text_info_style,
                height="100%",
            ),
            rx.spacer(),
            rx.hover_card.root(
                rx.hover_card.trigger(
                    rx.text(
                        "Cantidad de videos: ",
                        rx.text.strong(f"{data_playlist.videos_count}"),
                        style=styles.text_info_style,
                        height="100%"
                    ), 
                ),
                rx.hover_card.content(
                    rx.text(
                        "Solo se reconoce las primeras 100 canciones de la playlist",
                        font_size=styles.FontSize.DEFAULT.value,
                        text_align="center",
                        color=Color.TEXT_SECONDARY.value,
                        margin_bottom="1em",
                    ),
                ),
            ),
            spacing="2",
            width="100%",
            align="center",
            padding_y="0.4em"
        ),
        rx.cond(
            show_song_playlist,
            # Cond True
            rx.vstack(
                # Song Selector
                rx.hstack(
                    button_style(
                        "Anterior",
                        "arrow-left",
                        ManageYoutubeApi.get_previous_playlist_song,
                        position_left=True
                    ),
                    rx.text(
                        f"Canción {data_playlist.item_number_current} / {data_playlist.videos_count}",
                        style=styles.text_info_style,
                        height="100%"
                    ),
                    button_style(
                        "Siguiente",
                        "arrow-right",
                        ManageYoutubeApi.get_next_playlist_song,
                        position_left=False
                    ),
                ),
                # Title Song
                rx.heading(
                    data_info.title,
                    font_size=styles.FontSize.BIGGEST.value,
                    height="max-content",
                    padding_y="0.5em",
                    align="center"
                ),
                # Info Song
                rx.hstack(
                    rx.text(
                        "Canal: ",
                        rx.text.strong(f"{data_info.author}"),
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
                                "En caso de no poder estimar el tamñano del archivo, se mostrará 0b",
                                font_size=styles.FontSize.DEFAULT.value,
                                text_align="center",
                                color=Color.TEXT_SECONDARY.value,
                                margin_bottom="1em",
                            ),
                        ),
                    ),
                ),
                # Download Button
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
                spacing="2",
                width="100%",
                heihgt="100%",
                align="center",
                margin_top="1em",
            ),
            # Cond False
            button_style(
                "Revisar canciones",
                "arrow-right",
                ManageYoutubeApi.get_id_song_from_playlist,
                position_left=False
            ),
        ),
    )

def card_info_playlist(data_playlist: YoutubeInfoPlaylistData, 
                       show_song_playlist: bool,
                       data_info: YoutubeInfoData,
                       data_download: YoutubeDownloadData) -> rx.Component:
    return rx.cond(
        StateComponents.show_card_info,
        rx.fragment(
            # Show in tablet and desktop
            rx.tablet_and_desktop(
                rx.grid(
                    # Image Song
                    rx.cond(
                        show_song_playlist,
                        # Cond True
                        rx.image(
                            src=data_info.img_src,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                        # Cond False
                        rx.image(
                            src=data_playlist.image_playlist,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                    ),
                    # Content Song
                    rx.grid(
                        rx.heading(
                            data_playlist.title_playlist,
                            font_size=styles.FontSize.BIGGEST.value,
                            height="max-content",
                            padding_y="0.5em",
                            align="center"
                        ),
                        card_content(data_playlist,show_song_playlist,data_info,data_download),
                        padding_x=styles.Size.DEFAULT.value,
                        padding_y=styles.Size.BIGGEST.value,
                        margin_x=styles.Size.BIGGEST.value,
                        rows="2",
                        columns="1",
                        spacing="0",
                        gridTemplateRows="25% 75%",
                        place_items="center",
                    ),
                    columns="2",
                    rows="1",
                    style=styles.grid_info_style,
                )
            ),
            # Show in mobile only
            rx.mobile_only(
                # Content song
                rx.vstack(
                    # Title Song
                    rx.heading(
                        data_playlist.title_playlist,
                        font_size=styles.FontSize.BIGGEST.value,
                        height="max-content",
                        padding_bottom="0.5em"
                    ),
                    # Image Song
                    rx.cond(
                        show_song_playlist,
                        # Cond True
                        rx.image(
                            src=data_info.img_src,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                        #Cond False
                        rx.image(
                            src=data_playlist.image_playlist,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                    ),
                    card_content(data_playlist,show_song_playlist,data_info,data_download),
                    width="100%",
                    height="100%",
                    padding_x=styles.Size.DEFAULT.value,
                )
            )
        ),
    )