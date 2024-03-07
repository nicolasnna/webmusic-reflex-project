"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import reflex as rx
import webmusic.styles.styles as styles
from .api.manage_yt_apis import ManageYoutubeApi


app = rx.App(
    style=styles.BASE_STYLE
)


#app.api.add_api_route("/youtubeinfo/getDataYoutubeInfo", YoutubeInfo.getDataYoutubeInfo)
