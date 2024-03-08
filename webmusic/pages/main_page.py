import reflex as rx
from webmusic.views.sidebar import sidebar_cond,sidebar_mobile
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.components.header import header
from webmusic.styles.colors import Color
import webmusic.styles.styles as styles
from webmusic.api.manage_yt_apis import ManageYoutubeApi
from webmusic.api.state_components import StateComponents
from webmusic.routes import Route


@rx.page(
    route=Route.INDEX.value, 
    title='WebMusic', 
    image="/auriculares.ico",
    #on_load=ManageYoutubeApi.getYoutubeInfo
)
def main_page() -> rx.Component:
    return rx.grid(
        sidebar_cond(),
        rx.vstack(
            header(),
            title(),
            input_link(
                ManageYoutubeApi.get_id_from_url_and_redirect, 
                ManageYoutubeApi.set_url
            ),
            rx.button('log',on_click=rx.console_log("jpña")),    
            footer(),
            background_color=Color.BG_PRIMARY.value,
            width="100%",
            spacing="0",
        ),  
        columns="2",
        rows="1",
        gridTemplateColumns=StateComponents.grid_sidebar,
        width="100%",
        height="100%",
    )

