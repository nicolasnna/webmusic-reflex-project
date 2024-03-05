#https://rapidapi.com/h0p3rwe/api/youtube-search-and-download
import reflex as rx
import requests as rq
from webmusic.model.youtube_info import YoutubeInfoData

class YoutubeInfo(rx.State):
    URL = "https://youtube-search-and-download.p.rapidapi.com/video"
    HEADERS = {
        "X-RapidAPI-Key": "bd82ec0ba3mshbc9f9b34c257a1bp13d818jsn4644fe015839",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
    }

    data = YoutubeInfoData()
    id: str = "mLW35YMzELE"
    querystring = {}

    @rx.background
    async def getYoutubeInfo(self):
        async with self:
            response = rq.get(self.URL, headers=self.HEADERS, params=self.querystring)
            self.data.autor = response.json()['videoDetails']['author']
            self.data.title = response.json()['videoDetails']['title']
            self.data.view_count = int(response.json()['videoDetails']['viewCount'])
            length_thumbnail = len(response.json()['videoDetails']['thumbnail']['thumbnails'])
            self.data.image_src = response.json()['videoDetails']['thumbnail']['thumbnails'][length_thumbnail-1]


    @rx.var
    def getDataYoutubeInfo(self) -> list:
        self.querystring = {"id":self.id}
        #self.querystring = {"id":"mLW35YMzELE"}
        return self.data 
    