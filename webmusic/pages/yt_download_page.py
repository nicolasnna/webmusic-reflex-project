import reflex as rx
from webmusic.views.sidebar import sidebar
from webmusic.components.card_info import card_info
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.styles.colors import Color
from webmusic.styles.styles import Size
from webmusic.api.manage_yt_apis import ManageYoutubeApi
from webmusic.routes import Route


@rx.page(
    route=f"{Route.YOUTUBE_DOWNLOAD.value}/[id]",
    title='WebMusic', 
    image="/auriculares.ico",
    on_load=[ManageYoutubeApi.getYoutubeInfo,
             ManageYoutubeApi.getYoutubeMp3]
)
def youtube_info_page() -> rx.Component:
    return rx.grid(
        sidebar(),
        rx.vstack(
            title(),
            input_link(
                ManageYoutubeApi.get_id_from_url_and_redirect, 
                ManageYoutubeApi.set_url
            ),
            card_info(
                ManageYoutubeApi.data_info,
                ManageYoutubeApi.data_download
            ),
            footer(),
            background_color=Color.BG_PRIMARY.value,
            border_left=f"{Size.SMALL.value} solid {Color.BG_SECONDARY.value}",
            content_visibility="none"
        ),
        columns="2",
        rows="1",
        gridTemplateColumns="22% 78%",
        width="100%",
        height="100%",
    )


