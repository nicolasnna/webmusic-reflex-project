import reflex as rx
import webmusic.styles.styles as styles
from webmusic.styles.colors import Color
from webmusic.api.state_components import StateComponents
from webmusic.model.spotify_download import SpotifyDownloadData
from webmusic.model.spotify_playlist import SpotifyPlaylistData
from ..components.button_style import button_style
from webmusic.api.manage_spotify_apis import ManageSpotifyApi

def card_content(data_playlist: SpotifyPlaylistData, 
                 show_song_playlist: bool,
                 data_download: SpotifyDownloadData) -> rx.Component:
    return rx.vstack(
        # Playlist Content
        rx.hstack(
            rx.text(
                "Seguidores ",
                rx.text.strong(f"{data_playlist.followers}"),
                style=styles.text_info_style,
                height="100%",
            ),
            rx.spacer(),
            rx.hover_card.root(
                rx.hover_card.trigger(
                    rx.text(
                        "Total de canciones: ",
                        rx.text.strong(f"{data_playlist.total_song}"),
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
                        ManageSpotifyApi.get_previous_playlist_song,
                        position_left=True
                    ),
                    rx.text(
                        f"Canción {data_playlist.current_number_song} / {data_playlist.total_song}",
                        style=styles.text_info_style,
                        height="100%"
                    ),
                    button_style(
                        "Siguiente",
                        "arrow-right",
                        ManageSpotifyApi.get_next_playlist_song,
                        position_left=False
                    ),
                ),
                # Title Song
                rx.heading(
                    data_download.title,
                    font_size=styles.FontSize.BIGGEST.value,
                    height="max-content",
                    padding_y="0.5em",
                    align="center"
                ),
                # Info Song
                rx.hstack(
                    rx.text(
                        "Artista: ",
                        rx.text.strong(data_download.author),
                        style=styles.text_info_style,
                        height="100%",
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
                        url=data_download.link_download,
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
                ManageSpotifyApi.get_id_song_from_playlist,
                position_left=False
            ),
        ),
    )

def card_info_playlist_spotify(data_playlist: SpotifyPlaylistData, 
                 show_song_playlist: bool,
                 data_download: SpotifyDownloadData) -> rx.Component:
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
                            src=data_download.image,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                        # Cond False
                        rx.image(
                            src=data_playlist.img_playlist,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                    ),
                    # Content Song
                    rx.grid(
                        rx.heading(
                            data_playlist.title,
                            font_size=styles.FontSize.BIGGEST.value,
                            height="max-content",
                            padding_y="0.5em",
                            align="center"
                        ),
                        card_content(data_playlist,show_song_playlist, data_download),
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
                        data_playlist.title,
                        font_size=styles.FontSize.BIGGEST.value,
                        height="max-content",
                        padding_bottom="0.5em"
                    ),
                    # Image Song
                    rx.cond(
                        show_song_playlist,
                        # Cond True
                        rx.image(
                            src=data_download.image,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                        #Cond False
                        rx.image(
                            src=data_playlist.img_playlist,
                            width="480px",
                            height="auto",
                            padding=styles.Size.BIG.value,
                        ),
                    ),
                    card_content(data_playlist,show_song_playlist,data_download),
                    width="100%",
                    height="100%",
                    padding_x=styles.Size.DEFAULT.value,
                )
            )
        ),
    )