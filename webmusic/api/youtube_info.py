#https://rapidapi.com/h0p3rwe/api/youtube-search-and-download
import reflex as rx
import requests as rq
from webmusic.model.youtube_info import YoutubeInfoData

URL = "https://youtube-search-and-download.p.rapidapi.com/video"
HEADERS = {
    "X-RapidAPI-Key": "bd82ec0ba3mshbc9f9b34c257a1bp13d818jsn4644fe015839",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
}

class YoutubeInfo(rx.State):
    data_info: YoutubeInfoData = YoutubeInfoData()
    id: str = "mLW35YMzELE"
    querystring = {"id":id}
    
    @rx.background
    async def getYoutubeInfo(self):
        async with self:
            response = rq.get(URL, headers=HEADERS, params=self.querystring)
            msg_response = response.json()['videoDetails']
            length_thumbnail = len(msg_response['thumbnail']['thumbnails'])

            self.data_info.author = msg_response['author']
            self.data_info.title = msg_response['title']    
            self.data_info.view_count = int(msg_response['viewCount'])
            self.data_info.img_src = msg_response['thumbnail']['thumbnails'][length_thumbnail-1]['url']
            self.data_info.img_width = int(msg_response['thumbnail']['thumbnails'][length_thumbnail-1]['width'])
            self.data_info.img_height = int(msg_response['thumbnail']['thumbnails'][length_thumbnail-1]['height'])

    @rx.var
    def getDataYoutubeInfo(self) -> YoutubeInfoData:
        return self.data_info
    
   
    