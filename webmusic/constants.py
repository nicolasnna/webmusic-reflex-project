from dotenv import load_dotenv
import os

load_dotenv()

URL_YT_INFO = "https://youtube-search-and-download.p.rapidapi.com/video"
URL_YT_INFO_PLAYLIST = "https://youtube-search-and-download.p.rapidapi.com/playlist"
HEADERS_YT_INFO = {
    "X-RapidAPI-Key": os.getenv('RAPIDAPI_KEY'),
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
}

URL_YT_DOWN = "https://youtube-mp36.p.rapidapi.com/dl"
HEADERS_YT_DOWN = {
    "X-RapidAPI-Key": os.getenv('RAPIDAPI_KEY'),
    "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com"
}

URL_SPOTIFY_DOWN = "https://spotify-downloader6.p.rapidapi.com/spotify"
HEADERS_SPOTIFY_DOWN = {
    "X-RapidAPI-Key": os.getenv('RAPIDAPI_KEY'),
    "X-RapidAPI-Host": "spotify-downloader6.p.rapidapi.com"
}

URL_SPOTIFY_PLAYLIST_INFO = "https://spotify23.p.rapidapi.com/playlist/"
URL_SPOTIFY_PLAYLIST = "https://spotify23.p.rapidapi.com/playlist_tracks/"
HEADERS_SPOTIFY_PLAYLIST = {
	"X-RapidAPI-Key": os.getenv('RAPIDAPI_KEY'),
	"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
}
