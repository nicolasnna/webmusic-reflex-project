"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import reflex as rx
import webmusic.styles.styles as styles


app = rx.App(
    style=styles.BASE_STYLE,
    theme=rx.theme(
        appearance="light", has_background=True, radius="large", accent_color="teal"
    )
)


#app.api.add_api_route("/youtubeinfo/getDataYoutubeInfo", YoutubeInfo.getDataYoutubeInfo)
