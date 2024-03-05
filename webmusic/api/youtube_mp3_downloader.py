# https://rapidapi.com/ytjar/api/youtube-mp36
import reflex as rx
import requests as rq

class YoutubeMp3Downloader(rx.State):
    URL = "https://youtube-mp36.p.rapidapi.com/dl"
    HEADERS = {
        "X-RapidAPI-Key": "bd82ec0ba3mshbc9f9b34c257a1bp13d818jsn4644fe015839",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com"
    }

    data: list[dict] = []
    id: str = ""
    querystring = {}

    @rx.background
    async def getYoutubeMp3(self):
        async with self:
            response = rq.get(self.URL, headers=self.HEADERS, params=self.querystring)
            self.data = response.json()

    @rx.var
    def getDataYoutubeMp3(self) -> list[dict]:
        self.querystring = {"id":self.id}
        return self.data
    