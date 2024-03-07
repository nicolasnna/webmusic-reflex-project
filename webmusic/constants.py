from decouple import config

URL_YT_INFO = "https://youtube-search-and-download.p.rapidapi.com/video"
HEADERS_YT_INFO = {
    "X-RapidAPI-Key": config('RAPIDAPI_KEY'),
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
}

URL_YT_DOWN = "https://youtube-mp36.p.rapidapi.com/dl"
HEADERS_YT_DOWN = {
    "X-RapidAPI-Key": config('RAPIDAPI_KEY'),
    "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com"
}