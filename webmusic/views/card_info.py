import reflex as rx
import webmusic.styles.styles as styles
from webmusic.api.youtube_info import YoutubeInfo
from webmusic.model.youtube_info import YoutubeInfoData

def card_info() -> rx.Component:
    return rx.grid(
        rx.image(
            src=YoutubeInfo.data_info.img_src,
            width=f"{YoutubeInfo.data_info.img_width}px",
            align_self="center",
            padding=styles.Size.BIG.value,
        ),
        rx.grid(
            rx.heading(
                YoutubeInfo.data_info.title,
                font_size=styles.FontSize.BIGGEST.value,
            ),
            padding=styles.Size.BIG.value,
            margin_x=styles.Size.BIGGEST.value,
            rows="3",
            columns="1",
        ),
        columns="2",
        rows="1",
        style=styles.grid_info_style,
)