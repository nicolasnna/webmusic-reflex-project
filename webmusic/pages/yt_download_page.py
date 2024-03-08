import reflex as rx
from webmusic.views.sidebar import sidebar_cond
from webmusic.components.card_info import card_info_cond
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.components.header import header
from webmusic.styles.colors import Color
from webmusic.api.manage_yt_apis import ManageYoutubeApi
from webmusic.api.state_components import StateComponents
from webmusic.routes import Route


@rx.page(
    route=f"{Route.YOUTUBE_DOWNLOAD.value}/[id]",
    title='WebMusic', 
    image="logo.ico",
    on_load=[ManageYoutubeApi.getYoutubeInfo,
             ManageYoutubeApi.getYoutubeMp3]
)
def youtube_info_page() -> rx.Component:
    return rx.grid(
        sidebar_cond(),
        rx.vstack(
            header(),
            title(),
            input_link(
                ManageYoutubeApi.get_id_from_url_and_redirect, 
                ManageYoutubeApi.set_url
            ),
            card_info_cond(
                ManageYoutubeApi.data_info,
                ManageYoutubeApi.data_download  
            ),
            footer(),
            background_color=Color.BG_PRIMARY.value,
            
        ),
        columns="2",
        rows="1",
        gridTemplateColumns=StateComponents.grid_sidebar,
        width="100%",
        height="100%",
    )


