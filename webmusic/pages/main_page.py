import reflex as rx
from webmusic.views.sidebar import sidebar_cond,sidebar_shortened
from webmusic.components.footer import footer
from webmusic.components.input_link import input_link
from webmusic.components.title import title
from webmusic.components.header import header
from webmusic.styles.colors import Color
from webmusic.api.manage_yt_apis import ManageYoutubeApi
from webmusic.api.state_components import StateComponents
from webmusic.routes import Route


def page_content() -> rx.Component:
    return rx.vstack(
        rx.mobile_only(
            sidebar_shortened(direction_stack="row"),
            width="100%"
        ),
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
    )    


@rx.page(
    route=Route.INDEX.value, 
    title='WebMusic', 
    #on_load=ManageYoutubeApi.getYoutubeInfo
)
def main_page() -> rx.Component:
    return rx.fragment(
        rx.tablet_and_desktop(
             rx.grid(
                sidebar_cond(),
                page_content(),
                gridTemplateColumns=StateComponents.grid_sidebar,
                width="100%",
                height="100%",
            ),
        ),
        rx.mobile_only(
            page_content(),
        ),
    )
   

