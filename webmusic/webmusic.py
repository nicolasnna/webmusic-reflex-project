"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import reflex as rx
import webmusic.styles.styles as styles
from webmusic.pages.main_page import main_page
from webmusic.api.youtube_info2 import YoutubeInfo


app = rx.App(
    style=styles.BASE_STYLE
)


#app.api.add_api_route("/youtubemp3downloader", YoutubeMp3Downloader)
#app.api.add_api_route("/youtubeinfo", YoutubeInfo)
