from enum import Enum

class Route(Enum):
    INDEX = "/"
    YOUTUBE_DOWNLOAD = "/yt_download"
    YOUTUBE_PLAYLIST = "/yt_playlist"
    SPOTIFY_DOWNLOAD = "/spotify_download"
